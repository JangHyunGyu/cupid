(function (global) {
    'use strict';

    class CGTransition {
        constructor(layers, dialogue) {
            this.layers = layers.filter(Boolean);
            this.dialogue = dialogue;
            this.key = '';
            this.isCG = false;
            this.active = null;
        }

        _snapshotProperties() {
            const properties = new Set(['opacity', 'transform', 'filter', 'display', 'visibility', 'background-image', 'app-region']);
            const visit = rules => {
                for (const rule of rules) {
                    if (rule.style) for (const property of rule.style) {
                        if (property === 'all') throw new Error('Full computed-style snapshot required');
                        properties.add(property);
                        if (property.startsWith('-webkit-')) properties.add(property.slice(8));
                    }
                    if (rule.cssRules) visit(rule.cssRules);
                    if (rule.styleSheet) visit(rule.styleSheet.cssRules);
                }
            };
            try {
                if (!document.styleSheets?.length) return null;
                for (const sheet of document.styleSheets) visit(sheet.cssRules);
                return properties;
            } catch (_) {
                return null;
            }
        }

        _snapshot(source, properties = this._snapshotProperties()) {
            const clone = source.cloneNode(true);
            const originals = [source, ...source.querySelectorAll('*')];
            const copies = [clone, ...clone.querySelectorAll('*')];
            originals.forEach((element, index) => {
                const copy = copies[index];
                const computed = getComputedStyle(element);
                copy.removeAttribute('id');
                if (properties) {
                    const selected = new Set([...properties, ...element.style]);
                    for (const animation of element.getAnimations?.() || []) {
                        for (const frame of animation.effect?.getKeyframes?.() || []) {
                            for (const property of Object.keys(frame)) {
                                if (!['offset', 'computedOffset', 'easing', 'composite'].includes(property)) {
                                    selected.add(property.replace(/[A-Z]/g, value => '-' + value.toLowerCase()));
                                }
                            }
                        }
                    }
                    const declarations = [];
                    for (const property of selected) {
                        const value = computed.getPropertyValue(property);
                        if (value) declarations.push(property + ':' + value + ';');
                    }
                    copy.style.cssText = declarations.join('');
                } else {
                    for (const property of computed) copy.style.setProperty(property, computed.getPropertyValue(property));
                }
                copy.style.animation = 'none';
                copy.style.transition = 'none';
                copy.style.pointerEvents = 'none';
            });
            return clone;
        }

        prepare(key, isCG, instant = false) {
            this.cancel();
            if (key === this.key || instant || (!isCG && !this.isCG)) return null;
            const overlay = document.createElement('div');
            overlay.dataset.cgTransition = 'loading';
            Object.assign(overlay.style, {
                position: 'absolute', inset: '0', zIndex: '4', pointerEvents: 'none',
                overflow: 'hidden', background: this.isCG && isCG ? '#000' : 'transparent'
            });
            overlay.setAttribute('aria-hidden', 'true');
            const picture = document.createElement('div');
            Object.assign(picture.style, { position: 'absolute', inset: '0', pointerEvents: 'none' });
            const properties = this._snapshotProperties();
            this.layers.forEach(layer => picture.appendChild(this._snapshot(layer, properties)));
            overlay.appendChild(picture);
            this.layers[0].parentNode.appendChild(overlay);
            const state = {
                overlay, picture, incoming: isCG, outgoing: this.isCG, animations: [], timers: [],
                visibility: this.dialogue?.style.visibility ?? ''
            };
            state.cancelled = new Promise(resolve => { state.resolveCancel = resolve; });
            this.active = state;
            if (this.dialogue) {
                if (this.dialogue.animate) state.animations.push(this.dialogue.animate(
                    [{ opacity: getComputedStyle(this.dialogue).opacity }, { opacity: 0 }],
                    { duration: 180, fill: 'forwards' }
                ));
                else this.dialogue.style.visibility = 'hidden';
            }
            return state;
        }

        async _fade(state, element, duration) {
            if (this.active !== state) return;
            state.overlay.dataset.cgTransition = 'fading';
            state.overlay.dataset.duration = String(duration);
            if (element.animate) state.animations.push(element.animate(
                [{ opacity: 1 }, { opacity: 0 }],
                { duration, easing: 'ease-in-out', fill: 'forwards' }
            ));
            else {
                element.style.transition = `opacity ${duration}ms ease-in-out`;
                void element.offsetWidth;
                element.style.opacity = '0';
            }
            await Promise.race([
                new Promise(resolve => state.timers.push(setTimeout(resolve, duration))), state.cancelled
            ]);
        }

        async reveal(state) {
            if (!state || this.active !== state) return;
            if (state.outgoing && state.incoming) {
                await this._fade(state, state.picture, 1000);
                if (this.active !== state) return;
                state.picture.remove();
                await this._fade(state, state.overlay, 1500);
            } else {
                await this._fade(state, state.overlay, state.incoming ? 1500 : 1000);
            }
            if (this.active === state) this.cancel();
        }

        commit(key, isCG) {
            this.key = key;
            this.isCG = isCG;
        }

        cancel() {
            const state = this.active;
            if (!state) return;
            this.active = null;
            state.resolveCancel();
            state.timers.forEach(clearTimeout);
            state.animations.forEach(animation => animation.cancel());
            state.overlay.remove();
            if (this.dialogue) this.dialogue.style.visibility = state.visibility;
        }
    }

    global.CGTransition = CGTransition;
})(window);

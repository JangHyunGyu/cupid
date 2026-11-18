(function (global) {
  'use strict';

  function isDesktopComposerEnvironment(environment = global) { var __oc0, __oc1;
    const navigatorObject = ((environment === null || environment === void 0 ? void 0 : environment.navigator)) || {};
    const userAgent = navigatorObject.userAgent || '';
    const mobileUserAgent = (((__oc0 = navigatorObject.userAgentData) === null || __oc0 === void 0 ? void 0 : __oc0.mobile)) === true
      || /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(userAgent);
    const coarseOnly = (((__oc1 = environment === null || environment === void 0 ? void 0 : environment.matchMedia) === null || __oc1 === void 0 ? void 0 : __oc1.call(environment, '(hover: none) and (pointer: coarse)').matches)) === true;

    return !(mobileUserAgent || coarseOnly);
  }

  function shouldSubmitOnEnter(event, environment = global) {
    if (!event
      || event.key !== 'Enter'
      || event.shiftKey
      || event.altKey
      || event.isComposing
      || event.keyCode === 229) {
      return false;
    }

    return isDesktopComposerEnvironment(environment);
  }

  const api = Object.freeze({
    isDesktopComposerEnvironment,
    shouldSubmitOnEnter,
  });

  global.MessageComposerUtils = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);

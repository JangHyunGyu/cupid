(function (global) {
  'use strict';

  function isDesktopComposerEnvironment(environment = global) {
    const navigatorObject = environment?.navigator || {};
    const userAgent = navigatorObject.userAgent || '';
    const mobileUserAgent = navigatorObject.userAgentData?.mobile === true
      || /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(userAgent);
    const coarseOnly = environment?.matchMedia?.('(hover: none) and (pointer: coarse)').matches === true;

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

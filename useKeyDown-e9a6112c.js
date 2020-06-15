import { useRef, useEffect, useLayoutEffect } from 'react';

var useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useGlobalKeyDown(active, keyHandlers) {
  var keyHandlersRef = useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}
var keycode = {
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  Enter: 13,
  Home: 36,
  End: 35,
  PageUp: 33,
  PageDown: 34,
  Esc: 27
};

export { useIsomorphicEffect as a, keycode as k, useGlobalKeyDown as u };
//# sourceMappingURL=useKeyDown-e9a6112c.js.map

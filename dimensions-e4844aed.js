import { useContext, useRef } from 'react';
import { M as MuiPickersAdapterContext } from './LocalizationProvider-f54087c1.js';

// TODO uncomment when syntax will be allowed by next babel
function checkUtils(utils)
/* : asserts utils is MuiPickersUtils */
{
  if (!utils) {
    throw new Error('Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
  }
}

function useUtils() {
  var utils = useContext(MuiPickersAdapterContext);
  checkUtils(utils);
  return utils;
}
function useNow() {
  var utils = useUtils();
  var now = useRef(utils.date());
  return now.current;
}

var DIALOG_WIDTH = 320;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 358;
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var IS_TOUCH_DEVICE_MEDIA = '@media (pointer: fine)';

export { DAY_MARGIN as D, IS_TOUCH_DEVICE_MEDIA as I, VIEW_HEIGHT as V, useNow as a, DAY_SIZE as b, DIALOG_WIDTH as c, DIALOG_WIDTH_WIDER as d, useUtils as u };
//# sourceMappingURL=dimensions-e4844aed.js.map

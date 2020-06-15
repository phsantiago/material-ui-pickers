import { useRef, useState, useEffect, useCallback, useMemo, useDebugValue } from 'react';
import { a as useNow, u as useUtils } from './dimensions-e4844aed.js';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _typeof from '@babel/runtime/helpers/esm/typeof';

/* Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}
var onSpaceOrEnter = function onSpaceOrEnter(innerFn, onFocus) {
  return function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      innerFn(); // prevent any side effects

      e.preventDefault();
      e.stopPropagation();
    }

    if (onFocus) {
      onFocus(e);
    }
  };
};
/* Quick untyped helper to improve function composition readability */

var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduceRight(function (prevFn, nextFn) {
    return function () {
      return nextFn(prevFn.apply(void 0, arguments));
    };
  }, function (value) {
    return value;
  });
};
var executeInTheNextEventLoopTick = function executeInTheNextEventLoopTick(fn) {
  setTimeout(fn, 0);
};
function createDelegatedEventHandler(fn, onEvent) {
  return function (event) {
    fn(event);

    if (onEvent) {
      onEvent(event);
    }
  };
}
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (_typeof(ref) === 'object' && ref != null) {
        // @ts-ignore .current is not a readonly, hold on ts
        ref.current = value;
      }
    });
  };
}

function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var isControllingOpenProp = useRef(typeof open === 'boolean').current;

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _open = _React$useState2[0],
      _setIsOpen = _React$useState2[1]; // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)


  useEffect(function () {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }

      _setIsOpen(open);
    }
  }, [isControllingOpenProp, open]);
  var setIsOpen = useCallback(function (newIsOpen) {
    if (!isControllingOpenProp) {
      _setIsOpen(newIsOpen);
    }

    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: _open,
    setIsOpen: setIsOpen
  };
}

var FORCE_FINISH_PICKER = Symbol('Force closing picker, useful for accessibility');
function usePickerState(props, valueManager) {
  var autoOk = props.autoOk,
      inputFormat = props.inputFormat,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      onChange = props.onChange,
      value = props.value;

  if (!inputFormat) {
    throw new Error('inputFormat prop is required');
  }

  var now = useNow();
  var utils = useUtils();

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  var _React$useState = useState(valueManager.parseInput(utils, props)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pickerDate = _React$useState2[0],
      setPickerDate = _React$useState2[1]; // Mobile keyboard view is a special case.
  // When it's open picker should work like closed, cause we are just showing text field


  var _React$useState3 = useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isMobileKeyboardViewOpen = _React$useState4[0],
      setMobileKeyboardViewOpen = _React$useState4[1];

  useEffect(function () {
    var parsedDateValue = valueManager.parseInput(utils, props);
    setPickerDate(function (currentPickerDate) {
      if (!valueManager.areValuesEqual(utils, currentPickerDate, parsedDateValue)) {
        return parsedDateValue;
      }

      return currentPickerDate;
    }); // We need to react only on value change, because `date` could potentially return new Date() on each render
  }, [value, utils]); // eslint-disable-line

  var acceptDate = useCallback(function (acceptedDate, needClosePicker) {
    onChange(acceptedDate);

    if (needClosePicker) {
      setIsOpen(false);

      if (onAccept) {
        onAccept(acceptedDate);
      }
    }
  }, [onAccept, onChange, setIsOpen]);
  var wrapperProps = useMemo(function () {
    return {
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(valueManager.emptyValue, true);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate, true);
      },
      onDismiss: function onDismiss() {
        return setIsOpen(false);
      },
      onSetToday: function onSetToday() {
        // TODO FIX ME
        setPickerDate(now);
        acceptDate(now, Boolean(autoOk));
      }
    };
  }, [acceptDate, autoOk, isOpen, now, pickerDate, setIsOpen, valueManager.emptyValue]);
  var pickerProps = useMemo(function () {
    return {
      date: pickerDate,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: function toggleMobileKeyboardView() {
        if (!isMobileKeyboardViewOpen) {
          // accept any partial input done by React.user
          setPickerDate(pickerDate);
        }

        setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen);
      },
      onDateChange: function onDateChange(newDate, currentVariant) {
        var isFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        setPickerDate(newDate);
        var isFinishing = typeof isFinish === 'boolean' ? isFinish : isFinish === FORCE_FINISH_PICKER;

        if (isFinishing) {
          var autoAcceptRequested = Boolean(autoOk) || isFinish === FORCE_FINISH_PICKER;

          if (currentVariant === 'mobile' && autoAcceptRequested) {
            acceptDate(newDate, true);
          }

          if (currentVariant !== 'mobile') {
            acceptDate(newDate, autoAcceptRequested);
          }
        }
      }
    };
  }, [acceptDate, autoOk, isMobileKeyboardViewOpen, pickerDate]);
  var inputProps = useMemo(function () {
    return {
      onChange: onChange,
      inputFormat: inputFormat,
      open: isOpen,
      rawValue: value,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [onChange, inputFormat, isOpen, value, readOnly, disabled, setIsOpen]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  useDebugValue(pickerState, function () {
    return {
      MuiPickerState: {
        pickerDate: pickerDate,
        other: pickerState
      }
    };
  });
  return pickerState;
}

export { FORCE_FINISH_PICKER as F, arrayIncludes as a, createDelegatedEventHandler as c, executeInTheNextEventLoopTick as e, mergeRefs as m, onSpaceOrEnter as o, pipe as p, usePickerState as u };
//# sourceMappingURL=usePickerState-c86d9d51.js.map

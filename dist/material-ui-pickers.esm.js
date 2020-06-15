import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React__default, { createElement, createContext, useMemo, useContext, useRef, useCallback, useState, useEffect, useLayoutEffect, Component, Fragment, useDebugValue, memo, useReducer, cloneElement, forwardRef } from 'react';
import { func, oneOfType, object, string, node, instanceOf, bool, number, oneOf, arrayOf } from 'prop-types';
import _extends from '@babel/runtime/helpers/esm/extends';
import getThemeProps from '@material-ui/styles/getThemeProps';
import { useTheme, makeStyles, styled, withStyles, createStyles, fade } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { createSvgIcon } from '@material-ui/core/utils';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _typeof from '@babel/runtime/helpers/esm/typeof';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Popover from '@material-ui/core/Popover';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useRifm } from 'rifm';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import TrapFocus from '@material-ui/core/Unstable_TrapFocus';
import Popper from '@material-ui/core/Popper';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import ButtonBase from '@material-ui/core/ButtonBase';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Fade from '@material-ui/core/Fade';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

function withDefaultProps(_ref, Component) {
  var name = _ref.name;
  return function (_ref2) {
    var props = _extends({}, _ref2);

    var theme = useTheme();
    var propsWithDefault = getThemeProps({
      props: props,
      theme: theme,
      name: name
    });
    return /*#__PURE__*/createElement(Component, propsWithDefault);
  };
}

var MuiPickersAdapterContext = createContext(null);
var LocalizationProvider = function LocalizationProvider(_ref) {
  var Utils = _ref.dateAdapter,
      children = _ref.children,
      locale = _ref.locale,
      libFormats = _ref.dateFormats,
      libInstance = _ref.dateLibInstance;
  var utils = useMemo(function () {
    return new Utils({
      locale: locale,
      formats: libFormats,
      instance: libInstance
    });
  }, [Utils, locale, libFormats, libInstance]);
  return /*#__PURE__*/createElement(MuiPickersAdapterContext.Provider, {
    value: utils,
    children: children
  });
};
process.env.NODE_ENV !== "production" ? LocalizationProvider.propTypes = {
  dateAdapter: func.isRequired,
  locale: oneOfType([object, string]),

  /**
   * Your component tree.
   */
  children: node.isRequired
} : void 0;
var LocalizationProvider$1 = withDefaultProps({
  name: 'MuiPickersLocalizationProvider'
}, LocalizationProvider);

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

/**
 * @ignore - internal component.
 */

var PenIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Pen');

/**
 * @ignore - internal component.
 */

var CalendarIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), 'Calendar');

var useStyles = makeStyles(function (theme) {
  var toolbarBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: toolbarBackground,
      color: theme.palette.getContrastText(toolbarBackground)
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    dateTitleContainer: {
      flex: 1
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
  return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
}

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$getMobileKeyboar = _ref.getMobileKeyboardInputViewButtonText,
      getMobileKeyboardInputViewButtonText = _ref$getMobileKeyboar === void 0 ? defaultGetKeyboardInputSwitchingButtonText : _ref$getMobileKeyboar,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      _ref$landscapeDirecti = _ref.landscapeDirection,
      landscapeDirection = _ref$landscapeDirecti === void 0 ? 'column' : _ref$landscapeDirecti,
      penIconClassName = _ref.penIconClassName,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarTitle = _ref.toolbarTitle,
      other = _objectWithoutProperties(_ref, ["children", "className", "getMobileKeyboardInputViewButtonText", "isLandscape", "isMobileKeyboardViewOpen", "landscapeDirection", "penIconClassName", "toggleMobileKeyboardView", "toolbarTitle"]);

  var classes = useStyles();
  return /*#__PURE__*/createElement(Toolbar, _extends({
    "data-mui-test": "picker-toolbar",
    className: clsx(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
  }, other), /*#__PURE__*/createElement(Typography, {
    "data-mui-test": "picker-toolbar-title",
    color: "inherit",
    variant: "overline"
  }, toolbarTitle), /*#__PURE__*/createElement(Grid, {
    container: true,
    justify: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end'
  }, children, /*#__PURE__*/createElement(IconButton, {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "data-mui-test": "toggle-mobile-keyboard-view",
    "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen)
  }, isMobileKeyboardViewOpen ? /*#__PURE__*/createElement(CalendarIcon, {
    color: "inherit"
  }) : /*#__PURE__*/createElement(PenIcon, {
    color: "inherit"
  }))));
};

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

var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && arrayIncludes(views, 'month') && arrayIncludes(views, 'year');
};
var getFormatByViews = function getFormatByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return utils.formats.year;
  }

  if (isYearAndMonthViews(views)) {
    return utils.formats.monthAndYear;
  }

  return utils.formats.keyboardDate;
};
function parsePickerInputValue(utils, _ref2) {
  var value = _ref2.value;
  var parsedValue = utils.date(value);
  return utils.isValid(parsedValue) ? parsedValue : null;
}
function parseRangeInputValue(utils, _ref3) {
  var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [null, null] : _ref3$value;
  return value.map(function (date) {
    return !utils.isValid(date) || date === null ? null : utils.startOfDay(utils.date(date));
  });
}
var isRangeValid = function isRangeValid(utils, range) {
  return Boolean(range && range[0] && range[1] && utils.isBefore(range[0], range[1]));
};
var isWithinRange = function isWithinRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isWithinRange(day, range);
};
var isStartOfRange = function isStartOfRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[0]);
};
var isEndOfRange = function isEndOfRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[1]);
};
var validateDate = function validateDate(utils, value, _ref4) {
  var minDate = _ref4.minDate,
      maxDate = _ref4.maxDate,
      disableFuture = _ref4.disableFuture,
      shouldDisableDate = _ref4.shouldDisableDate,
      disablePast = _ref4.disablePast;
  var now = utils.date();
  var date = utils.date(value);

  if (value === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(shouldDisableDate && shouldDisableDate(date)):
      return 'shouldDisableDate';

    case Boolean(disableFuture && utils.isAfterDay(date, now)):
      return 'disableFuture';

    case Boolean(disablePast && utils.isBeforeDay(date, now)):
      return 'disablePast';

    case Boolean(minDate && utils.isBeforeDay(date, minDate)):
      return 'minDate';

    case Boolean(maxDate && utils.isAfterDay(date, maxDate)):
      return 'maxDate';

    default:
      return null;
  }
};
var validateDateRange = function validateDateRange(utils, value, dateValidationProps) {
  var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1]; // for partial input


  if (start === null || end === null) {
    return [null, null];
  }

  var dateValidations = [validateDate(utils, start, dateValidationProps), validateDate(utils, end, dateValidationProps)];

  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }

  if (!isRangeValid(utils, [utils.date(start), utils.date(end)])) {
    return ['invalidRange', 'invalidRange'];
  }

  return [null, null];
};

var muiPickersComponentConfig = {
  name: 'MuiPickersDatePickerToolbar'
};
var useStyles$1 = makeStyles({
  dateTitleLandscape: {
    margin: 'auto 16px auto auto'
  },
  penIcon: {
    position: 'relative',
    top: 4
  }
}, muiPickersComponentConfig);
var DatePickerToolbar = withDefaultProps(muiPickersComponentConfig, function (_ref) {
  var date = _ref.date,
      views = _ref.views,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarFormat = _ref.toolbarFormat,
      _ref$toolbarPlacehold = _ref.toolbarPlaceholder,
      toolbarPlaceholder = _ref$toolbarPlacehold === void 0 ? '––' : _ref$toolbarPlacehold,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE' : _ref$toolbarTitle;
  var utils = useUtils();
  var classes = useStyles$1();
  var dateText = useMemo(function () {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    if (isYearOnlyView(views)) {
      return utils.format(date, 'year');
    }

    if (isYearAndMonthViews(views)) {
      return utils.format(date, 'month');
    } // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1"
    // For other locales using strings like "June 1", without weekday


    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(date, 'normalDateWithWeekday') : utils.format(date, 'normalDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils, views]);
  return /*#__PURE__*/createElement(PickerToolbar, {
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: isLandscape,
    penIconClassName: classes.penIcon
  }, /*#__PURE__*/createElement(Typography, {
    variant: "h4",
    children: dateText,
    "data-mui-test": "datepicker-toolbar-date",
    align: isLandscape ? 'left' : 'center',
    className: clsx(isLandscape && classes.dateTitleLandscape)
  }));
});

var DIALOG_WIDTH = 320;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 358;
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var IS_TOUCH_DEVICE_MEDIA = '@media (pointer: fine)';

function getTextFieldAriaText(rawValue, utils) {
  return rawValue && utils.isValid(utils.date(rawValue)) ? "Choose date, selected date is ".concat(utils.format(utils.date(rawValue), 'fullDate')) : 'Choose date';
}
var getDisplayDate = function getDisplayDate(utils, value, inputFormat) {
  var date = utils.date(value);
  var isEmpty = value === null;

  if (isEmpty) {
    return '';
  }

  return utils.isValid(date) ? utils.formatByString(date, inputFormat) : '';
};
function pick12hOr24hFormat(userFormat, ampm, formats) {
  if (userFormat) {
    return userFormat;
  }

  if (typeof ampm === 'undefined') {
    return formats.localized;
  }

  return ampm ? formats['12h'] : formats['24h'];
}
var MASK_USER_INPUT_SYMBOL = '_';
var staticDateWith2DigitTokens = new Date('2019-11-21T22:30:00.000');
var staticDateWith1DigitTokens = new Date('2019-01-01T09:00:00.000');
function checkMaskIsValidForCurrentFormat(mask, format, acceptRegex, utils) {
  var formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
  var inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, MASK_USER_INPUT_SYMBOL);
  var inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, '_');
  var isMaskValid = inferredFormatPatternWith2Digits === mask && inferredFormatPatternWith1Digits === mask; // @ts-ignore

  if (!isMaskValid && process.env.NODE_ENV !== 'production') {
    console.warn("The mask \"".concat(mask, "\" you passed is not valid for the format used ").concat(format, ". Falling down to uncontrolled not-masked input."));
  }

  return isMaskValid;
}
var maskedDateFormatter = function maskedDateFormatter(mask, acceptRegexp) {
  return function (value) {
    return value.split('').map(function (_char, i) {
      acceptRegexp.lastIndex = 0;

      if (i > mask.length - 1) {
        return '';
      }

      var maskChar = mask[i];
      var nextMaskChar = mask[i + 1];
      var acceptedChar = acceptRegexp.test(_char) ? _char : '';
      var formattedChar = maskChar === MASK_USER_INPUT_SYMBOL ? acceptedChar : maskChar + acceptedChar;

      if (i === value.length - 1 && nextMaskChar && nextMaskChar !== MASK_USER_INPUT_SYMBOL) {
        // when cursor at the end of mask part (e.g. month) prerender next symbol "21" -> "21/"
        return formattedChar ? formattedChar + nextMaskChar : '';
      } else {
        return formattedChar;
      }
    }).join('');
  };
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PureDateInput = function PureDateInput(_ref) {
  var containerRef = _ref.containerRef,
      disabled = _ref.disabled,
      forwardedRef = _ref.forwardedRef,
      _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
      getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? getTextFieldAriaText : _ref$getOpenDialogAri,
      inputFormat = _ref.inputFormat,
      InputProps = _ref.InputProps,
      label = _ref.label,
      onOpen = _ref.openPicker,
      rawValue = _ref.rawValue,
      renderInput = _ref.renderInput,
      _ref$TextFieldProps = _ref.TextFieldProps,
      TextFieldProps = _ref$TextFieldProps === void 0 ? {} : _ref$TextFieldProps,
      validationError = _ref.validationError;
  var utils = useUtils();
  var PureDateInputProps = useMemo(function () {
    return _objectSpread(_objectSpread({}, InputProps), {}, {
      readOnly: true
    });
  }, [InputProps]);
  var inputValue = getDisplayDate(utils, rawValue, inputFormat);
  return renderInput(_objectSpread({
    label: label,
    disabled: disabled,
    ref: containerRef,
    inputRef: forwardedRef,
    error: validationError,
    InputProps: PureDateInputProps,
    inputProps: {
      disabled: disabled,
      'aria-readonly': true,
      'aria-label': getOpenDialogAriaText(rawValue, utils),
      value: inputValue,
      onClick: onOpen,
      onKeyDown: onSpaceOrEnter(onOpen)
    }
  }, TextFieldProps));
};
process.env.NODE_ENV !== "production" ? PureDateInput.propTypes = {
  acceptRegex: instanceOf(RegExp),
  getOpenDialogAriaText: func,
  mask: string,
  OpenPickerButtonProps: object,
  openPickerIcon: node,
  renderInput: func.isRequired,
  rifmFormatter: func
} : void 0;

// consider getting rid from wrapper variant
var WrapperVariantContext = createContext(null);
var IsStaticVariantContext = createContext(false);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useStyles$2 = makeStyles({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialogContainer: {
    '&:focus > $dialogRoot': {
      outline: 'auto',
      '@media (pointer:coarse)': {
        outline: 0
      }
    }
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  dialogAction: {// requested for overrides
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/mui-org/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
}, {
  name: 'MuiPickersModalDialog'
});
var PickerModalDialog = function PickerModalDialog(_ref) {
  var _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? 'Cancel' : _ref$cancelText,
      children = _ref.children,
      MuiDialogClasses = _ref.classes,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? false : _ref$clearable,
      _ref$clearText = _ref.clearText,
      clearText = _ref$clearText === void 0 ? 'Clear' : _ref$clearText,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? 'OK' : _ref$okText,
      onAccept = _ref.onAccept,
      onClear = _ref.onClear,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      showTabs = _ref.showTabs,
      _ref$showTodayButton = _ref.showTodayButton,
      showTodayButton = _ref$showTodayButton === void 0 ? false : _ref$showTodayButton,
      _ref$todayText = _ref.todayText,
      todayText = _ref$todayText === void 0 ? 'Today' : _ref$todayText,
      wider = _ref.wider,
      other = _objectWithoutProperties(_ref, ["cancelText", "children", "classes", "clearable", "clearText", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "showTabs", "showTodayButton", "todayText", "wider"]);

  var classes = useStyles$2();
  return /*#__PURE__*/createElement(Dialog, _extends({
    onClose: onDismiss,
    classes: _objectSpread$1({
      container: classes.dialogContainer,
      paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
    }, MuiDialogClasses)
  }, other), /*#__PURE__*/createElement(DialogContent, {
    children: children,
    className: classes.dialog
  }), /*#__PURE__*/createElement(DialogActions, {
    className: clsx(classes.dialogAction, (clearable || showTodayButton) && classes.withAdditionalAction)
  }, clearable && /*#__PURE__*/createElement(Button, {
    "data-mui-test": "clear-action-button",
    color: "primary",
    onClick: onClear
  }, clearText), showTodayButton && /*#__PURE__*/createElement(Button, {
    "data-mui-test": "today-action-button",
    color: "primary",
    onClick: onSetToday
  }, todayText), cancelText && /*#__PURE__*/createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelText), okText && /*#__PURE__*/createElement(Button, {
    color: "primary",
    onClick: onAccept
  }, okText)));
};

var MobileWrapper = function MobileWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      okText = _ref.okText,
      cancelText = _ref.cancelText,
      clearText = _ref.clearText,
      todayText = _ref.todayText,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      DateInputProps = _ref.DateInputProps,
      onClear = _ref.onClear,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      PopoverProps = _ref.PopoverProps,
      displayStaticWrapperAs = _ref.displayStaticWrapperAs,
      KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
      _ref$PureDateInputCom = _ref.PureDateInputComponent,
      PureDateInputComponent = _ref$PureDateInputCom === void 0 ? PureDateInput : _ref$PureDateInputCom,
      other = _objectWithoutProperties(_ref, ["open", "children", "okText", "cancelText", "clearText", "todayText", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday", "PopoverProps", "displayStaticWrapperAs", "KeyboardDateInputComponent", "PureDateInputComponent"]);

  return /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: "mobile"
  }, /*#__PURE__*/createElement(PureDateInputComponent, _extends({}, other, DateInputProps)), /*#__PURE__*/createElement(PickerModalDialog, _extends({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearText: clearText,
    todayText: todayText,
    okText: okText,
    cancelText: cancelText,
    clearable: clearable,
    showTodayButton: showTodayButton,
    children: children,
    "data-mui-test": "mobile-wrapper-dialog"
  }, DialogProps)));
};
process.env.NODE_ENV !== "production" ? MobileWrapper.propTypes = {
  okText: node,
  cancelText: node,
  clearText: node,
  clearable: bool,
  todayText: node,
  showTodayButton: bool,
  DialogProps: object
} : void 0;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function useMaskedInput(_ref) {
  var disableMaskedInput = _ref.disableMaskedInput,
      rawValue = _ref.rawValue,
      validationError = _ref.validationError,
      onChange = _ref.onChange,
      mask = _ref.mask,
      _ref$acceptRegex = _ref.acceptRegex,
      acceptRegex = _ref$acceptRegex === void 0 ? /[\d]/gi : _ref$acceptRegex,
      inputFormat = _ref.inputFormat,
      disabled = _ref.disabled,
      rifmFormatter = _ref.rifmFormatter,
      ignoreInvalidInputs = _ref.ignoreInvalidInputs,
      readOnly = _ref.readOnly,
      TextFieldProps = _ref.TextFieldProps,
      label = _ref.label,
      inputProps = _ref.inputProps;
  var utils = useUtils();
  var isFocusedRef = useRef(false);
  var getInputValue = useCallback(function () {
    return getDisplayDate(utils, rawValue, inputFormat);
  }, [inputFormat, rawValue, utils]);
  var formatHelperText = utils.getFormatHelperText(inputFormat);

  var _React$useState = useState(getInputValue()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerInputValue = _React$useState2[0],
      setInnerInputValue = _React$useState2[1];

  var shouldUseMaskedInput = useMemo(function () {
    // formatting of dates is a quite slow thing, so do not make useless .format calls
    if (!mask || disableMaskedInput) {
      return false;
    }

    return checkMaskIsValidForCurrentFormat(mask, inputFormat, acceptRegex, utils);
  }, [acceptRegex, disableMaskedInput, inputFormat, mask, utils]);
  var formatter = useMemo(function () {
    return shouldUseMaskedInput && mask ? maskedDateFormatter(mask, acceptRegex) : function (st) {
      return st;
    };
  }, [acceptRegex, mask, shouldUseMaskedInput]);
  useEffect(function () {
    // We do not need to update the input value on keystroke
    // Because library formatters can change inputs from 12/12/2 to 12/12/0002
    if ((rawValue === null || utils.isValid(rawValue)) && !isFocusedRef.current) {
      setInnerInputValue(getInputValue());
    }
  }, [utils, getInputValue, rawValue]);

  var handleChange = function handleChange(text) {
    var finalString = text === '' || text === mask ? '' : text;
    setInnerInputValue(finalString);
    var date = finalString === null ? null : utils.parse(finalString, inputFormat);

    if (ignoreInvalidInputs && !utils.isValid(date)) {
      return;
    }

    onChange(date, finalString || undefined);
  };

  var rifmProps = useRifm({
    value: innerInputValue,
    onChange: handleChange,
    format: rifmFormatter || formatter
  });
  var inputStateArgs = shouldUseMaskedInput ? rifmProps : {
    value: innerInputValue,
    onChange: function onChange(e) {
      return handleChange(e.currentTarget.value);
    }
  };
  return _objectSpread$2({
    label: label,
    disabled: disabled,
    error: validationError,
    helperText: formatHelperText,
    inputProps: _objectSpread$2(_objectSpread$2(_objectSpread$2({}, inputStateArgs), {}, {
      disabled: disabled,
      // make spreading in custom input easier
      placeholder: formatHelperText,
      readOnly: readOnly,
      type: shouldUseMaskedInput ? 'tel' : 'text'
    }, inputProps), {}, {
      onFocus: createDelegatedEventHandler(function () {
        return isFocusedRef.current = true;
      }, inputProps === null || inputProps === void 0 ? void 0 : inputProps.onFocus),
      onBlur: createDelegatedEventHandler(function () {
        return isFocusedRef.current = false;
      }, inputProps === null || inputProps === void 0 ? void 0 : inputProps.onBlur)
    })
  }, TextFieldProps);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var KeyboardDateInput = function KeyboardDateInput(_ref) {
  var containerRef = _ref.containerRef,
      hideOpenPickerButton = _ref.disableOpenPicker,
      forwardedRef = _ref.forwardedRef,
      _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
      getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? getTextFieldAriaText : _ref$getOpenDialogAri,
      InputAdornmentProps = _ref.InputAdornmentProps,
      InputProps = _ref.InputProps,
      onOpen = _ref.openPicker,
      OpenPickerButtonProps = _ref.OpenPickerButtonProps,
      _ref$openPickerIcon = _ref.openPickerIcon,
      openPickerIcon = _ref$openPickerIcon === void 0 ? /*#__PURE__*/createElement(CalendarIcon, null) : _ref$openPickerIcon,
      renderInput = _ref.renderInput,
      other = _objectWithoutProperties(_ref, ["containerRef", "disableOpenPicker", "forwardedRef", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "openPicker", "OpenPickerButtonProps", "openPickerIcon", "renderInput"]);

  var utils = useUtils();
  var textFieldProps = useMaskedInput(other);
  var adornmentPosition = (InputAdornmentProps === null || InputAdornmentProps === void 0 ? void 0 : InputAdornmentProps.position) || 'end';
  return renderInput(_objectSpread$3(_objectSpread$3({
    ref: containerRef,
    inputRef: forwardedRef
  }, textFieldProps), {}, {
    InputProps: _objectSpread$3(_objectSpread$3({}, InputProps), {}, _defineProperty({}, "".concat(adornmentPosition, "Adornment"), hideOpenPickerButton ? undefined : /*#__PURE__*/createElement(InputAdornment, _extends({
      position: adornmentPosition
    }, InputAdornmentProps), /*#__PURE__*/createElement(IconButton, _extends({
      edge: adornmentPosition,
      "data-mui-test": "open-picker-from-keyboard",
      disabled: other.disabled,
      "aria-label": getOpenDialogAriaText(other.rawValue, utils)
    }, OpenPickerButtonProps, {
      onClick: onOpen
    }), openPickerIcon))))
  }));
};
process.env.NODE_ENV !== "production" ? KeyboardDateInput.propTypes = {
  acceptRegex: instanceOf(RegExp),
  getOpenDialogAriaText: func,
  mask: string,
  OpenPickerButtonProps: object,
  openPickerIcon: node,
  renderInput: func.isRequired,
  rifmFormatter: func
} : void 0;

var useStyles$3 = makeStyles({
  popover: {
    '&:focus': _defineProperty({
      outline: 'auto'
    }, IS_TOUCH_DEVICE_MEDIA, {
      outline: 0
    })
  }
});
var DesktopWrapper = function DesktopWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      PopoverProps = _ref.PopoverProps,
      onDismiss = _ref.onDismiss,
      DateInputProps = _ref.DateInputProps,
      _ref$KeyboardDateInpu = _ref.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _ref$KeyboardDateInpu === void 0 ? KeyboardDateInput : _ref$KeyboardDateInpu;
  var ref = useRef(null);
  var classes = useStyles$3();
  return /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/createElement(KeyboardDateInputComponent, _extends({}, DateInputProps, {
    containerRef: ref
  })), /*#__PURE__*/createElement(Popover, _extends({
    role: "dialog",
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    classes: {
      paper: classes.popover
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, PopoverProps), children));
};
process.env.NODE_ENV !== "production" ? DesktopWrapper.propTypes = {
  onOpen: func,
  onClose: func,
  PopoverProps: object
} : void 0;

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

var useStyles$4 = makeStyles(function (theme) {
  return {
    popper: {
      zIndex: theme.zIndex.modal
    },
    paper: {
      transformOrigin: 'top center',
      '&:focus': _defineProperty({
        outline: 'auto'
      }, IS_TOUCH_DEVICE_MEDIA, {
        outline: 0
      })
    },
    topTransition: {
      transformOrigin: 'bottom center'
    }
  };
});
var DesktopPopperWrapper = function DesktopPopperWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      PopperProps = _ref.PopperProps,
      onDismiss = _ref.onDismiss,
      DateInputProps = _ref.DateInputProps,
      _ref$TransitionCompon = _ref.TransitionComponent,
      TransitionComponent = _ref$TransitionCompon === void 0 ? Grow : _ref$TransitionCompon,
      _ref$KeyboardDateInpu = _ref.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _ref$KeyboardDateInpu === void 0 ? KeyboardDateInput : _ref$KeyboardDateInpu;
  var classes = useStyles$4();
  var inputRef = useRef(null);
  var popperRef = useRef(null);
  useGlobalKeyDown(open, _defineProperty({}, keycode.Esc, onDismiss));

  var handleBlur = function handleBlur() {
    executeInTheNextEventLoopTick(function () {
      var _inputRef$current, _popperRef$current;

      if (((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.contains(document.activeElement)) || ((_popperRef$current = popperRef.current) === null || _popperRef$current === void 0 ? void 0 : _popperRef$current.contains(document.activeElement))) {
        return;
      }

      onDismiss();
    });
  };

  return /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/createElement(KeyboardDateInputComponent, _extends({}, DateInputProps, {
    containerRef: inputRef,
    onBlur: handleBlur
  })), /*#__PURE__*/createElement(Popper, _extends({
    transition: true,
    placement: "bottom",
    open: open,
    anchorEl: inputRef.current
  }, PopperProps, {
    className: clsx(classes.popper, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className)
  }), function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/createElement(TrapFocus, {
      open: open,
      disableAutoFocus: true,
      disableEnforceFocus: true,
      isEnabled: function isEnabled() {
        return true;
      },
      getDoc: function getDoc() {
        var _popperRef$current$ow, _popperRef$current2;

        return (_popperRef$current$ow = (_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 ? void 0 : _popperRef$current2.ownerDocument) !== null && _popperRef$current$ow !== void 0 ? _popperRef$current$ow : document;
      }
    }, /*#__PURE__*/createElement(TransitionComponent, _extends({}, TransitionProps, {
      timeout: 350
    }), /*#__PURE__*/createElement(Paper, {
      ref: popperRef,
      onBlur: handleBlur,
      tabIndex: -1,
      elevation: 8,
      className: clsx(classes.paper, placement === 'top' && classes.topTransition)
    }, children)));
  }));
};

var makeResponsiveWrapper = function makeResponsiveWrapper(DesktopWrapperComponent, MobileWrapperComponent) {
  var ResponsiveWrapper = function ResponsiveWrapper(_ref) {
    var _ref$desktopModeMedia = _ref.desktopModeMediaQuery,
        desktopModeMediaQuery = _ref$desktopModeMedia === void 0 ? IS_TOUCH_DEVICE_MEDIA : _ref$desktopModeMedia,
        okText = _ref.okText,
        cancelText = _ref.cancelText,
        clearText = _ref.clearText,
        todayText = _ref.todayText,
        showTodayButton = _ref.showTodayButton,
        clearable = _ref.clearable,
        DialogProps = _ref.DialogProps,
        PopoverProps = _ref.PopoverProps,
        PopperProps = _ref.PopperProps,
        TransitionComponent = _ref.TransitionComponent,
        displayStaticWrapperAs = _ref.displayStaticWrapperAs,
        other = _objectWithoutProperties(_ref, ["desktopModeMediaQuery", "okText", "cancelText", "clearText", "todayText", "showTodayButton", "clearable", "DialogProps", "PopoverProps", "PopperProps", "TransitionComponent", "displayStaticWrapperAs"]);

    var isDesktop = useMediaQuery(desktopModeMediaQuery);
    return isDesktop ? /*#__PURE__*/createElement(DesktopWrapperComponent, _extends({
      PopperProps: PopperProps,
      TransitionComponent: TransitionComponent,
      PopoverProps: PopoverProps
    }, other)) : /*#__PURE__*/createElement(MobileWrapperComponent, _extends({
      okText: okText,
      cancelText: cancelText,
      clearText: clearText,
      todayText: todayText,
      showTodayButton: showTodayButton,
      clearable: clearable,
      DialogProps: DialogProps
    }, other));
  };

  return ResponsiveWrapper;
};
var ResponsiveWrapper = makeResponsiveWrapper(DesktopWrapper, MobileWrapper);
var ResponsivePopperWrapper = makeResponsiveWrapper(DesktopPopperWrapper, MobileWrapper);

function useParsedDate(possiblyUnparsedValue) {
  var utils = useUtils();
  return useMemo(function () {
    return typeof possiblyUnparsedValue === 'undefined' ? undefined : utils.date(possiblyUnparsedValue);
  }, [possiblyUnparsedValue, utils]);
}
function useNextMonthDisabled(month, _ref) {
  var disableFuture = _ref.disableFuture,
      maxDate = _ref.maxDate;
  var utils = useUtils();
  return useMemo(function () {
    var now = utils.date();
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils]);
}
function usePreviousMonthDisabled(month, _ref2) {
  var disablePast = _ref2.disablePast,
      minDate = _ref2.minDate;
  var utils = useUtils();
  return useMemo(function () {
    var now = utils.date();
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils]);
}

var useStyles$5 = makeStyles(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(_ref) {
  var _ref$displayStaticWra = _ref.displayStaticWrapperAs,
      displayStaticWrapperAs = _ref$displayStaticWra === void 0 ? 'static' : _ref$displayStaticWra,
      children = _ref.children;
  var classes = useStyles$5();
  return /*#__PURE__*/createElement(IsStaticVariantContext.Provider, {
    value: true
  }, /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: displayStaticWrapperAs
  }, /*#__PURE__*/createElement("div", {
    className: classes.staticWrapperRoot,
    children: children
  })));
};

var defaultIsSameError = function defaultIsSameError(a, b) {
  return a === b;
};

function makeValidationHook(validateFn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultValidationError = _ref.defaultValidationError,
      _ref$isSameError = _ref.isSameError,
      isSameError = _ref$isSameError === void 0 ? defaultIsSameError : _ref$isSameError;

  return function (value, props) {
    var utils = useUtils();
    var previousValidationErrorRef = useRef(defaultValidationError || null);
    var validationError = validateFn(utils, value, props);
    useEffect(function () {
      if (props.onError && !isSameError(validationError, previousValidationErrorRef.current)) {
        props.onError(validationError, value);
      }

      previousValidationErrorRef.current = validationError;
    }, [previousValidationErrorRef, props, validationError, value]);
    return validationError;
  };
}

var date = oneOfType([object, string, number, instanceOf(Date)]);
var datePickerView = oneOf(['year', 'month', 'day']);
var defaultMinDate = new Date('1900-01-01');
var defaultMaxDate = new Date('2099-12-31');

function useViews(_ref) {
  var views = _ref.views,
      openTo = _ref.openTo,
      onChange = _ref.onChange,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView;

  var _React$useState = useState(openTo && arrayIncludes(views, openTo) ? openTo : views[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openView = _React$useState2[0],
      _setOpenView = _React$useState2[1];

  var setOpenView = useCallback(function () {
    if (isMobileKeyboardViewOpen) {
      toggleMobileKeyboardView();
    }

    _setOpenView.apply(void 0, arguments);
  }, [isMobileKeyboardViewOpen, toggleMobileKeyboardView]);
  var previousView = views[views.indexOf(openView) - 1];
  var nextView = views[views.indexOf(openView) + 1];
  var openNext = useCallback(function () {
    if (nextView) {
      setOpenView(nextView);
    }
  }, [nextView, setOpenView]);
  var handleChangeAndOpenNext = useCallback(function (date, isFinishedSelectionInCurrentView) {
    onChange(date, Boolean(nextView) ? false : isFinishedSelectionInCurrentView);

    if (isFinishedSelectionInCurrentView) {
      openNext();
    }
  }, [nextView, onChange, openNext]);
  return {
    nextView: nextView,
    previousView: previousView,
    openNext: openNext,
    handleChangeAndOpenNext: handleChangeAndOpenNext,
    openView: openView,
    setOpenView: setOpenView
  };
}

var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safari


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

function useIsLandscape(views, customOrientation) {
  var _React$useState = useState(getOrientation()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var eventHandler = useCallback(function () {
    return setOrientation(getOrientation());
  }, []);
  useIsomorphicEffect(function () {
    window.addEventListener('orientationchange', eventHandler);
    return function () {
      return window.removeEventListener('orientationchange', eventHandler);
    };
  }, [eventHandler]);

  if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return false;
  }

  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}

var MobileKeyboardInputView = styled('div')({
  padding: '16px 24px'
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var ClockPointer = /*#__PURE__*/function (_React$Component) {
  _inherits(ClockPointer, _React$Component);

  var _super = _createSuper(ClockPointer);

  function ClockPointer() {
    var _this;

    _classCallCheck(this, ClockPointer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      toAnimateTransform: false,
      previousType: undefined
    };

    _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          type = _this$props.type;
      var max = type === 'hours' ? 12 : 60;
      var angle = 360 / max * value;

      if (type === 'hours' && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: isInner ? '26%' : '40%',
        transform: "rotateZ(".concat(angle, "deg)")
      };
    };

    return _this;
  }

  _createClass(ClockPointer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected,
          isInner = _this$props2.isInner,
          type = _this$props2.type,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["classes", "hasSelected", "isInner", "type", "value"]);

      return /*#__PURE__*/createElement("div", _extends({}, other, {
        style: this.getAngleStyle(),
        className: clsx(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
      }), /*#__PURE__*/createElement("div", {
        className: clsx(classes.thumb, hasSelected && classes.noPoint)
      }));
    }
  }]);

  return ClockPointer;
}(Component);

ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
};

var styles = function styles(theme) {
  return createStyles({
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    animateTransform: {
      transition: theme.transitions.create(['transform', 'height'])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: "14px solid ".concat(theme.palette.primary.main),
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  });
};
var ClockPointer$1 = withStyles(styles, {
  name: 'MuiPickersClockPointer'
})(ClockPointer);

var getMeridiem = function getMeridiem(date, utils) {
  if (!date) {
    return null;
  }

  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
var convertValueToMeridiem = function convertValueToMeridiem(value, meridiem, ampm) {
  if (ampm) {
    var currentMeridiem = value >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }

  return value;
};
var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  var newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
var clockCenter = {
  x: 260 / 2,
  y: 260 / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - clockCenter.x;
  var y = offsetY - clockCenter.y;
  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  var value = Math.floor(deg / step) || 0;
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);
  return {
    value: value,
    distance: distance
  };
};

var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var angleStep = step * 6;

  var _getAngleValue = getAngleValue(angleStep, offsetX, offsetY),
      value = _getAngleValue.value;

  value = value * step % 60;
  return value;
};
var getHours = function getHours(offsetX, offsetY, ampm) {
  var _getAngleValue2 = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue2.value,
      distance = _getAngleValue2.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};
function getSecondsInDay(date, utils) {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
}
var createIsAfterIgnoreDatePart = function createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils) {
  return function (dateLeft, dateRight) {
    if (disableIgnoringDatePartForTimeValidation) {
      return utils.isAfter(dateLeft, dateRight);
    }

    return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
  };
};
var validateTime = function validateTime(utils, value, _ref) {
  var minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      shouldDisableTime = _ref.shouldDisableTime,
      disableIgnoringDatePartForTimeValidation = _ref.disableIgnoringDatePartForTimeValidation;
  var date = utils.date(value);
  var isAfterComparingFn = createIsAfterIgnoreDatePart(Boolean(disableIgnoringDatePartForTimeValidation), utils);

  if (value === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(minTime && isAfterComparingFn(minTime, date)):
      return 'minTime';

    case Boolean(maxTime && isAfterComparingFn(date, maxTime)):
      return 'maxTime';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getHours(date), 'hours')):
      return 'shouldDisableTime-hours';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getMinutes(date), 'minutes')):
      return 'shouldDisableTime-minutes';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getSeconds(date), 'seconds')):
      return 'shouldDisableTime-seconds';

    default:
      return null;
  }
};

var muiComponentConfig = {
  name: 'MuiPickersClock'
};
var useStyles$6 = makeStyles(function (theme) {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      minHeight: VIEW_HEIGHT,
      alignItems: 'center'
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none',
      touchActions: 'none',
      userSelect: 'none',
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    amButton: {
      zIndex: 1,
      left: 8,
      position: 'absolute',
      bottom: 8
    },
    pmButton: {
      zIndex: 1,
      position: 'absolute',
      bottom: 8,
      right: 8
    },
    meridiemButtonSelected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  };
}, muiComponentConfig);
var Clock = withDefaultProps(muiComponentConfig, function (_ref) {
  var _useGlobalKeyDown;

  var date = _ref.date,
      _ref$ampmInClock = _ref.ampmInClock,
      ampmInClock = _ref$ampmInClock === void 0 ? false : _ref$ampmInClock,
      value = _ref.value,
      numbersElementsArray = _ref.children,
      type = _ref.type,
      ampm = _ref.ampm,
      isTimeDisabled = _ref.isTimeDisabled,
      _ref$minutesStep = _ref.minutesStep,
      minutesStep = _ref$minutesStep === void 0 ? 1 : _ref$minutesStep,
      allowKeyboardControl = _ref.allowKeyboardControl,
      onChange = _ref.onChange,
      meridiemMode = _ref.meridiemMode,
      handleMeridiemChange = _ref.handleMeridiemChange;
  var utils = useUtils();
  var classes = useStyles$6();
  var wrapperVariant = useContext(WrapperVariantContext);
  var isMoving = useRef(false);
  var isSelectedTimeDisabled = isTimeDisabled(value, type);
  var isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);

  var handleValueChange = function handleValueChange(newValue, isFinish) {
    if (isTimeDisabled(newValue, type)) {
      return;
    }

    onChange(newValue, isFinish);
  };

  var setTime = function setTime(e) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var offsetX = e.offsetX,
        offsetY = e.offsetY;

    if (typeof offsetX === 'undefined') {
      var rect = e.target.getBoundingClientRect();
      offsetX = e.changedTouches[0].clientX - rect.left;
      offsetY = e.changedTouches[0].clientY - rect.top;
    }

    var value = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(value, isFinish);
  };

  var handleTouchMove = function handleTouchMove(e) {
    isMoving.current = true;
    setTime(e);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    if (isMoving.current) {
      setTime(e, true);
      isMoving.current = false;
    }
  };

  var handleMouseMove = function handleMouseMove(e) {
    e.preventDefault();
    e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

    var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

    if (isButtonPressed) {
      setTime(e.nativeEvent, false);
    }
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (isMoving.current) {
      isMoving.current = false;
    }

    setTime(e.nativeEvent, true);
  };

  var hasSelected = useMemo(function () {
    if (type === 'hours') {
      return true;
    }

    return value % 5 === 0;
  }, [type, value]);
  var keyboardControlStep = type === 'minutes' ? minutesStep : 1;
  useGlobalKeyDown(Boolean(allowKeyboardControl !== null && allowKeyboardControl !== void 0 ? allowKeyboardControl : wrapperVariant !== 'static') && !isMoving.current, (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return handleValueChange(0, false);
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return handleValueChange(type === 'minutes' ? 59 : 23, false);
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return handleValueChange(value + keyboardControlStep, false);
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return handleValueChange(value - keyboardControlStep, false);
  }), _useGlobalKeyDown));
  return /*#__PURE__*/createElement("div", {
    className: classes.container
  }, /*#__PURE__*/createElement("div", {
    className: classes.clock
  }, /*#__PURE__*/createElement("div", {
    role: "menu",
    tabIndex: -1,
    className: classes.squareMask,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove
  }), !isSelectedTimeDisabled && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: classes.pin
  }), date && /*#__PURE__*/createElement(ClockPointer$1, {
    type: type,
    value: value,
    isInner: isPointerInner,
    hasSelected: hasSelected,
    "aria-live": "polite",
    "aria-label": "Selected time ".concat(utils.format(date, 'fullTime'))
  })), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(IconButton, {
    "data-mui-test": "in-clock-am-btn",
    onClick: function onClick() {
      return handleMeridiemChange('am');
    },
    disabled: meridiemMode === null,
    className: clsx(classes.amButton, meridiemMode === 'am' && classes.meridiemButtonSelected)
  }, /*#__PURE__*/createElement(Typography, {
    variant: "caption"
  }, "AM")), /*#__PURE__*/createElement(IconButton, {
    disabled: meridiemMode === null,
    "data-mui-test": "in-clock-pm-btn",
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    },
    className: clsx(classes.pmButton, meridiemMode === 'pm' && classes.meridiemButtonSelected)
  }, /*#__PURE__*/createElement(Typography, {
    variant: "caption"
  }, "PM"))));
});
Clock.defaultProps = {
  ampm: bool,
  minutesStep: number
};
Clock.displayName = 'Clock';

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

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles$7 = makeStyles(function (theme) {
  var size = 32;
  var clockNumberColor = theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint;
  return {
    clockNumber: {
      outline: 0,
      width: size,
      height: size,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(size, "px) / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: clockNumberColor,
      '&:focused': {
        backgroundColor: theme.palette.background.paper
      }
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    },
    clockNumberDisabled: {
      pointerEvents: 'none',
      color: fade(clockNumberColor, 0.2)
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      index = _ref.index,
      onSelect = _ref.onSelect,
      isInner = _ref.isInner,
      disabled = _ref.disabled,
      getClockNumberText = _ref.getClockNumberText;
  var ref = useRef(null);
  var classes = useStyles$7();
  var className = clsx(classes.clockNumber, selected && classes.clockNumberSelected, disabled && classes.clockNumberDisabled);
  var transformStyle = useMemo(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  useEffect(function () {
    if (selected && ref.current) {
      ref.current.focus();
    }
  }, [selected]);
  return /*#__PURE__*/createElement(ButtonBase, {
    focusRipple: true,
    centerRipple: true,
    ref: ref,
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
    component: "span",
    className: className,
    style: transformStyle,
    "aria-label": getClockNumberText(label),
    onKeyDown: onSpaceOrEnter(function () {
      return onSelect(FORCE_FINISH_PICKER);
    })
  }, /*#__PURE__*/createElement(Typography, {
    variant: isInner ? 'body2' : 'body1'
  }, label));
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      date = _ref.date,
      utils = _ref.utils,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      getClockNumberText = _ref.getClockNumberText;
  var currentHours = date ? utils.getHours(date) : null;
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (currentHours === null) {
      return false;
    }

    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  var _loop = function _loop(_hour) {
    var label = _hour.toString();

    if (_hour === 0) {
      label = '00';
    }

    var isInner = !ampm && (_hour === 0 || _hour > 12);
    hourNumbers.push( /*#__PURE__*/createElement(ClockNumber, {
      key: _hour,
      index: _hour,
      isInner: isInner,
      selected: isSelected(_hour),
      disabled: isDisabled(_hour),
      label: utils.formatNumber(label),
      onSelect: function onSelect() {
        return onChange(_hour, true);
      },
      getClockNumberText: getClockNumberText
    }));
  };

  for (var _hour = startHour; _hour <= endHour; _hour += 1) {
    _loop(_hour);
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var value = _ref2.value,
      utils = _ref2.utils,
      onChange = _ref2.onChange,
      isDisabled = _ref2.isDisabled,
      getClockNumberText = _ref2.getClockNumberText;
  var f = utils.formatNumber;
  return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(function (_ref3, index) {
    var _ref4 = _slicedToArray(_ref3, 2),
        numberValue = _ref4[0],
        label = _ref4[1];

    return /*#__PURE__*/createElement(ClockNumber, {
      key: numberValue,
      label: label,
      index: index + 1,
      disabled: isDisabled(numberValue),
      selected: numberValue === value,
      onSelect: function onSelect(isFinish) {
        return onChange(numberValue, isFinish);
      },
      getClockNumberText: getClockNumberText
    });
  });
};

var useStyles$8 = makeStyles(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    toolbarTxt: {
      transition: theme.transitions.create('color'),
      color: fade(textColor, 0.54)
    },
    toolbarBtnSelected: {
      color: textColor
    }
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      label = _ref.value,
      other = _objectWithoutProperties(_ref, ["className", "selected", "value"]);

  var classes = useStyles$8();
  return /*#__PURE__*/createElement(Typography, _extends({
    children: label,
    className: clsx(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
  }, other));
};

var useStyles$9 = makeStyles({
  toolbarBtn: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
}, {
  name: 'MuiPickersToolbarButton'
});
var ToolbarButton = function ToolbarButton(_ref) {
  var align = _ref.align,
      className = _ref.className,
      selected = _ref.selected,
      typographyClassName = _ref.typographyClassName,
      value = _ref.value,
      variant = _ref.variant,
      other = _objectWithoutProperties(_ref, ["align", "className", "selected", "typographyClassName", "value", "variant"]);

  var classes = useStyles$9();
  return /*#__PURE__*/createElement(Button, _extends({
    "data-mui-test": "toolbar-button",
    variant: "text",
    className: clsx(classes.toolbarBtn, className)
  }, other), /*#__PURE__*/createElement(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    value: value,
    selected: selected
  }));
};
ToolbarButton.displayName = 'ToolbarButton';

var muiComponentConfig$1 = {
  name: 'MuiPickersTimePickerToolbar'
};
var useStyles$a = makeStyles({
  separator: {
    outline: 0,
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 12
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmLabel: {
    fontSize: 17
  },
  penIconLandscape: {
    marginTop: 'auto'
  }
}, muiComponentConfig$1);
function useMeridiemMode(date, ampm, onChange) {
  var utils = useUtils();
  var meridiemMode = getMeridiem(date, utils);
  var handleMeridiemChange = useCallback(function (mode) {
    var timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, false);
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var clockTypographyVariant = 'h3';
var TimePickerToolbar = withDefaultProps(muiComponentConfig$1, function (_ref) {
  var date = _ref.date,
      views = _ref.views,
      ampm = _ref.ampm,
      openView = _ref.openView,
      onChange = _ref.onChange,
      isLandscape = _ref.isLandscape,
      setOpenView = _ref.setOpenView,
      ampmInClock = _ref.ampmInClock,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT TIME' : _ref$toolbarTitle;
  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles$a();
  var showAmPmControl = Boolean(ampm && !ampmInClock);

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var formatHours = function formatHours(time) {
    return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  };

  var separator = /*#__PURE__*/createElement(ToolbarText, {
    tabIndex: -1,
    value: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/createElement(PickerToolbar, {
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: clsx(isLandscape && classes.penIconLandscape)
  }, /*#__PURE__*/createElement("div", {
    className: clsx(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
  }, arrayIncludes(views, 'hours') && /*#__PURE__*/createElement(ToolbarButton, {
    "data-mui-test": "hours",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--'
  }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/createElement(ToolbarButton, {
    "data-mui-test": "minutes",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--'
  }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/createElement(ToolbarButton, {
    "data-mui-test": "seconds",
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('seconds');
    },
    selected: openView === 'seconds',
    value: date ? utils.format(date, 'seconds') : '--'
  })), showAmPmControl && /*#__PURE__*/createElement("div", {
    className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, /*#__PURE__*/createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-am-btn",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), /*#__PURE__*/createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-pm-btn",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
});

/**
 * @ignore - internal component.
 */

var ArrowLeftIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'ArrowLeft');

/**
 * @ignore - internal component.
 */

var ArrowRightIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'ArrowRight');

var useStyles$b = makeStyles(function (theme) {
  return {
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButtonMargin: {
      marginRight: 24
    },
    hidden: {
      visibility: 'hidden'
    }
  };
}, {
  name: 'MuiPickersArrowSwitcher'
});

var PureArrowSwitcher = function PureArrowSwitcher(_ref) {
  var className = _ref.className,
      isLeftDisabled = _ref.isLeftDisabled,
      isLeftHidden = _ref.isLeftHidden,
      isRightDisabled = _ref.isRightDisabled,
      isRightHidden = _ref.isRightHidden,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      leftArrowButtonText = _ref.leftArrowButtonText,
      _ref$leftArrowIcon = _ref.leftArrowIcon,
      leftArrowIcon = _ref$leftArrowIcon === void 0 ? /*#__PURE__*/createElement(ArrowLeftIcon, null) : _ref$leftArrowIcon,
      onLeftClick = _ref.onLeftClick,
      onRightClick = _ref.onRightClick,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      rightArrowButtonText = _ref.rightArrowButtonText,
      _ref$rightArrowIcon = _ref.rightArrowIcon,
      rightArrowIcon = _ref$rightArrowIcon === void 0 ? /*#__PURE__*/createElement(ArrowRightIcon, null) : _ref$rightArrowIcon,
      text = _ref.text,
      other = _objectWithoutProperties(_ref, ["className", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "onLeftClick", "onRightClick", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "text"]);

  var classes = useStyles$b();
  var theme = useTheme();
  var isRtl = theme.direction === 'rtl';
  return /*#__PURE__*/createElement("div", _extends({
    className: className
  }, other), /*#__PURE__*/createElement(IconButton, _extends({
    "data-mui-test": "previous-arrow-button",
    size: "small",
    "aria-label": leftArrowButtonText
  }, leftArrowButtonProps, {
    disabled: isLeftDisabled,
    onClick: onLeftClick,
    className: clsx(classes.iconButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, Boolean(isLeftHidden) && classes.hidden, !Boolean(text) && classes.previousMonthButtonMargin)
  }), isRtl ? rightArrowIcon : leftArrowIcon), text && /*#__PURE__*/createElement(Typography, {
    variant: "subtitle1",
    display: "inline"
  }, text), /*#__PURE__*/createElement(IconButton, _extends({
    "data-mui-test": "next-arrow-button",
    size: "small",
    "aria-label": rightArrowButtonText
  }, rightArrowButtonProps, {
    disabled: isRightDisabled,
    onClick: onRightClick,
    className: clsx(classes.iconButton, rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className, Boolean(isRightHidden) && classes.hidden)
  }), isRtl ? leftArrowIcon : rightArrowIcon));
};

PureArrowSwitcher.displayName = 'ArrowSwitcher';
var ArrowSwitcher = memo(PureArrowSwitcher);

var muiPickersComponentConfig$1 = {
  name: 'MuiPickersClockView'
};
var useStyles$c = makeStyles(function () {
  return {
    arrowSwitcher: {
      position: 'absolute',
      right: 8,
      top: 8
    }
  };
}, muiPickersComponentConfig$1);

var getMinutesAriaText = function getMinutesAriaText(minute) {
  return "".concat(minute, " minutes");
};

var getHoursAriaText = function getHoursAriaText(hour) {
  return "".concat(hour, " hours");
};

var getSecondsAriaText = function getSecondsAriaText(seconds) {
  return "".concat(seconds, " seconds");
};

var ClockView = withDefaultProps(muiPickersComponentConfig$1, function (_ref) {
  var type = _ref.type,
      onDateChange = _ref.onDateChange,
      onChange = _ref.onChange,
      ampm = _ref.ampm,
      date = _ref.date,
      _ref$minutesStep = _ref.minutesStep,
      minutesStep = _ref$minutesStep === void 0 ? 1 : _ref$minutesStep,
      ampmInClock = _ref.ampmInClock,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      allowKeyboardControl = _ref.allowKeyboardControl,
      shouldDisableTime = _ref.shouldDisableTime,
      _ref$getHoursClockNum = _ref.getHoursClockNumberText,
      getHoursClockNumberText = _ref$getHoursClockNum === void 0 ? getHoursAriaText : _ref$getHoursClockNum,
      _ref$getMinutesClockN = _ref.getMinutesClockNumberText,
      getMinutesClockNumberText = _ref$getMinutesClockN === void 0 ? getMinutesAriaText : _ref$getMinutesClockN,
      _ref$getSecondsClockN = _ref.getSecondsClockNumberText,
      getSecondsClockNumberText = _ref$getSecondsClockN === void 0 ? getSecondsAriaText : _ref$getSecondsClockN,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      _ref$leftArrowButtonT = _ref.leftArrowButtonText,
      leftArrowButtonText = _ref$leftArrowButtonT === void 0 ? 'open previous view' : _ref$leftArrowButtonT,
      _ref$rightArrowButton = _ref.rightArrowButtonText,
      rightArrowButtonText = _ref$rightArrowButton === void 0 ? 'open next view' : _ref$rightArrowButton,
      openNextView = _ref.openNextView,
      openPreviousView = _ref.openPreviousView,
      nextViewAvailable = _ref.nextViewAvailable,
      showViewSwitcher = _ref.showViewSwitcher,
      previousViewAvailable = _ref.previousViewAvailable,
      disableIgnoringDatePartForTimeValidation = _ref.disableIgnoringDatePartForTimeValidation;
  var now = useNow();
  var utils = useUtils();
  var classes = useStyles$c();

  var _useMeridiemMode = useMeridiemMode(date, ampm, onDateChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var isTimeDisabled = useCallback(function (rawValue, type) {
    var validateTimeValue = function validateTimeValue(getRequestedTimePoint) {
      var isAfterComparingFn = createIsAfterIgnoreDatePart(Boolean(disableIgnoringDatePartForTimeValidation), utils); // prettier-ignore

      return Boolean(minTime && isAfterComparingFn(minTime, getRequestedTimePoint('end')) || maxTime && isAfterComparingFn(getRequestedTimePoint('start'), maxTime) || shouldDisableTime && shouldDisableTime(rawValue, type));
    };

    switch (type) {
      case 'hours':
        var hoursWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, Boolean(ampm));
        return validateTimeValue(function (when) {
          return pipe(function (currentDate) {
            return utils.setHours(currentDate, hoursWithMeridiem);
          }, function (dateWithHours) {
            return utils.setMinutes(dateWithHours, when === 'start' ? 0 : 59);
          }, function (dateWithMinutes) {
            return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
          })(date);
        });

      case 'minutes':
        return validateTimeValue(function (when) {
          return pipe(function (currentDate) {
            return utils.setMinutes(currentDate, rawValue);
          }, function (dateWithMinutes) {
            return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
          })(date);
        });

      case 'seconds':
        return validateTimeValue(function () {
          return utils.setSeconds(date, rawValue);
        });
    }
  }, [ampm, date, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, shouldDisableTime, utils]);
  var dateOrNow = date || now;
  var viewProps = useMemo(function () {
    switch (type) {
      case 'hours':
        var handleHoursChange = function handleHoursChange(value, isFinish) {
          var valueWithMeridiem = convertValueToMeridiem(value, meridiemMode, Boolean(ampm));
          onChange(utils.setHours(dateOrNow, valueWithMeridiem), isFinish);
        };

        return {
          onChange: handleHoursChange,
          value: utils.getHours(dateOrNow),
          children: getHourNumbers({
            date: date,
            utils: utils,
            ampm: Boolean(ampm),
            onChange: handleHoursChange,
            getClockNumberText: getHoursClockNumberText,
            isDisabled: function isDisabled(value) {
              return isTimeDisabled(value, 'hours');
            }
          })
        };

      case 'minutes':
        var minutesValue = utils.getMinutes(dateOrNow);

        var handleMinutesChange = function handleMinutesChange(value, isFinish) {
          onChange(utils.setMinutes(dateOrNow, value), isFinish);
        };

        return {
          value: minutesValue,
          onChange: handleMinutesChange,
          children: getMinutesNumbers({
            utils: utils,
            value: minutesValue,
            onChange: handleMinutesChange,
            getClockNumberText: getMinutesClockNumberText,
            isDisabled: function isDisabled(value) {
              return isTimeDisabled(value, 'minutes');
            }
          })
        };

      case 'seconds':
        var secondsValue = utils.getSeconds(dateOrNow);

        var handleSecondsChange = function handleSecondsChange(value, isFinish) {
          onChange(utils.setSeconds(dateOrNow, value), isFinish);
        };

        return {
          value: secondsValue,
          onChange: handleSecondsChange,
          children: getMinutesNumbers({
            utils: utils,
            value: secondsValue,
            onChange: handleSecondsChange,
            getClockNumberText: getSecondsClockNumberText,
            isDisabled: function isDisabled(value) {
              return isTimeDisabled(value, 'seconds');
            }
          })
        };

      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [type, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, onChange, dateOrNow, isTimeDisabled]);
  return /*#__PURE__*/createElement(Fragment, null, showViewSwitcher && /*#__PURE__*/createElement(ArrowSwitcher, {
    className: classes.arrowSwitcher,
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowButtonProps: rightArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowIcon: rightArrowIcon,
    onLeftClick: openPreviousView,
    onRightClick: openNextView,
    isLeftDisabled: previousViewAvailable,
    isRightDisabled: nextViewAvailable
  }), /*#__PURE__*/createElement(Clock, _extends({
    date: date,
    ampmInClock: ampmInClock,
    onDateChange: onDateChange,
    type: type,
    ampm: ampm,
    minutesStep: minutesStep,
    allowKeyboardControl: allowKeyboardControl,
    isTimeDisabled: isTimeDisabled,
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  }, viewProps)));
});
process.env.NODE_ENV !== "production" ? ClockView.propTypes = {
  ampm: bool,
  date: object,
  minutesStep: number,
  onChange: func.isRequired,
  type: oneOf(['minutes', 'hours', 'seconds']).isRequired
} : void 0;
ClockView.displayName = 'ClockView';

var useStyles$d = makeStyles(function (theme) {
  return {
    root: {
      flex: '1 0 33.33%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      height: 64,
      transition: theme.transitions.create('font-size', {
        duration: '100ms'
      }),
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    monthSelected: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    monthDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersMonth'
});
var Month = function Month(_ref) {
  var selected = _ref.selected,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

  var classes = useStyles$d();
  var handleSelection = useCallback(function () {
    onSelect(value);
  }, [onSelect, value]);
  return /*#__PURE__*/createElement(Typography, _extends({
    "data-mui-test": "month",
    role: "button",
    component: "div",
    className: clsx(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyDown: onSpaceOrEnter(handleSelection),
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children
  }, other));
};
Month.displayName = 'Month';

var useStyles$e = makeStyles({
  container: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
}, {
  name: 'MuiPickersMonthSelection'
});
var MonthSelection = function MonthSelection(_ref) {
  var disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      date = _ref.date,
      onMonthChange = _ref.onMonthChange,
      onChange = _ref.onChange,
      renderMonth = _ref.renderMonth;
  var utils = useUtils();
  var classes = useStyles$e();
  var currentMonth = utils.getMonth(date);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var now = utils.date();
    var utilMinDate = utils.date(minDate);
    var utilMaxDate = utils.date(maxDate);
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = useCallback(function (month) {
    var newDate = utils.setMonth(date, month);
    onChange(newDate, true);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, onChange, onMonthChange, utils]);
  return /*#__PURE__*/createElement("div", {
    className: classes.container
  }, utils.getMonthArray(date).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'monthShort');
    var monthProps = {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month),
      children: monthText
    };
    return renderMonth ? renderMonth(month, monthProps) : /*#__PURE__*/createElement(Month, monthProps);
  }));
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var createCalendarStateReducer = function createCalendarStateReducer(reduceAnimations, disableSwitchToMonthOnDayFocus, utils) {
  return function (state, action) {
    switch (action.type) {
      case 'changeMonth':
        {
          return _objectSpread$4(_objectSpread$4({}, state), {}, {
            slideDirection: action.direction,
            currentMonth: action.newMonth,
            isMonthSwitchingAnimating: !reduceAnimations
          });
        }

      case 'finishMonthSwitchingAnimation':
        {
          return _objectSpread$4(_objectSpread$4({}, state), {}, {
            isMonthSwitchingAnimating: false
          });
        }

      case 'changeFocusedDay':
        {
          // action.focusedDay = action.focusedDay || utils.date()
          var needMonthSwitch = Boolean(action.focusedDay) && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
          return _objectSpread$4(_objectSpread$4({}, state), {}, {
            focusedDay: action.focusedDay,
            isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations,
            currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
            slideDirection: utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
          });
        }
    }
  };
};
function useCalendarState(_ref) {
  var date = _ref.date,
      reduceAnimations = _ref.reduceAnimations,
      onMonthChange = _ref.onMonthChange,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      shouldDisableDate = _ref.shouldDisableDate,
      _ref$disableSwitchToM = _ref.disableSwitchToMonthOnDayFocus,
      disableSwitchToMonthOnDayFocus = _ref$disableSwitchToM === void 0 ? false : _ref$disableSwitchToM;
  var now = useNow();
  var utils = useUtils();
  var dateForMonth = date || now;
  var reducerFn = useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;

  var _React$useReducer = useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: date,
    currentMonth: utils.startOfMonth(dateForMonth),
    slideDirection: 'left'
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      calendarState = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var handleChangeMonth = useCallback(function (payload) {
    dispatch(_objectSpread$4({
      type: 'changeMonth'
    }, payload));

    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  var changeMonth = useCallback(function (newDate) {
    var newDateRequested = newDate !== null && newDate !== void 0 ? newDate : now;

    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }

    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
    });
  }, [calendarState.currentMonth, handleChangeMonth, now, utils]);
  var isDateDisabled = useCallback(function (day) {
    return validateDate(utils, day, {
      disablePast: disablePast,
      disableFuture: disableFuture,
      minDate: minDate,
      maxDate: maxDate,
      shouldDisableDate: shouldDisableDate
    }) !== null;
  }, [disableFuture, disablePast, maxDate, minDate, shouldDisableDate, utils]);
  var onMonthSwitchingAnimationEnd = useCallback(function () {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  var changeFocusedDay = useCallback(function (newFocusedDate) {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate
      });
    }
  }, [isDateDisabled]);
  return {
    calendarState: calendarState,
    changeMonth: changeMonth,
    changeFocusedDay: changeFocusedDay,
    isDateDisabled: isDateDisabled,
    onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
    handleChangeMonth: handleChangeMonth
  };
}

var animationDuration = 500;
var useStyles$f = makeStyles(function (theme) {
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative'
    },
    fadeEnter: {
      willChange: 'transform',
      opacity: 0
    },
    fadeEnterActive: {
      opacity: 1,
      transition: theme.transitions.create('opacity', {
        duration: animationDuration
      })
    },
    fadeExit: {
      opacity: 1
    },
    fadeExitActive: {
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: animationDuration / 2
      })
    }
  };
}, {
  name: 'MuiPickersFadeTransition'
});
var FadeTransitionGroup = function FadeTransitionGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      reduceAnimations = _ref.reduceAnimations,
      transKey = _ref.transKey;
  var classes = useStyles$f();

  if (reduceAnimations) {
    return children;
  }

  var transitionClasses = {
    exit: classes.fadeExit,
    enterActive: classes.fadeEnterActive,
    enter: classes.fadeEnter,
    exitActive: classes.fadeExitActive
  };
  return /*#__PURE__*/createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, /*#__PURE__*/createElement(CSSTransition, {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: {
      appear: animationDuration,
      enter: animationDuration / 2,
      exit: 0
    },
    classNames: transitionClasses,
    children: children
  }));
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var muiComponentConfig$2 = {
  name: 'MuiPickersDay'
};
var useStyles$g = makeStyles(function (theme) {
  return {
    day: _objectSpread$5(_objectSpread$5({}, theme.typography.caption), {}, {
      width: DAY_SIZE,
      height: DAY_SIZE,
      borderRadius: '50%',
      padding: 0,
      // background required here to prevent collides with the other days when animating with transition group
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
        '&$daySelected': {
          willChange: 'background-color',
          backgroundColor: theme.palette.primary.dark
        }
      }
    }),
    dayWithMargin: {
      margin: "0 ".concat(DAY_MARGIN, "px")
    },
    dayOutsideMonth: {
      color: theme.palette.text.hint
    },
    hiddenDaySpacingFiller: {
      visibility: 'hidden'
    },
    today: {
      '&:not($daySelected)': {
        border: "1px solid ".concat(theme.palette.text.hint)
      }
    },
    daySelected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration["short"]
      }),
      '&:hover': {
        willChange: 'background-color',
        backgroundColor: theme.palette.primary.dark
      }
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    },
    dayLabel: {// need for overrides
    }
  };
}, muiComponentConfig$2);

var PureDay = function PureDay(_ref) {
  var className = _ref.className,
      day = _ref.day,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      isInCurrentMonth = _ref.inCurrentMonth,
      isToday = _ref.today,
      selected = _ref.selected,
      _ref$focused = _ref.focused,
      focused = _ref$focused === void 0 ? false : _ref$focused,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? false : _ref$focusable,
      isAnimating = _ref.isAnimating,
      onDayFocus = _ref.onDayFocus,
      onDaySelect = _ref.onDaySelect,
      onFocus = _ref.onFocus,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      _ref$disableMargin = _ref.disableMargin,
      disableMargin = _ref$disableMargin === void 0 ? false : _ref$disableMargin,
      allowKeyboardControl = _ref.allowKeyboardControl,
      _ref$disableHighlight = _ref.disableHighlightToday,
      disableHighlightToday = _ref$disableHighlight === void 0 ? false : _ref$disableHighlight,
      _ref$showDaysOutsideC = _ref.showDaysOutsideCurrentMonth,
      showDaysOutsideCurrentMonth = _ref$showDaysOutsideC === void 0 ? false : _ref$showDaysOutsideC,
      other = _objectWithoutProperties(_ref, ["className", "day", "disabled", "hidden", "inCurrentMonth", "today", "selected", "focused", "focusable", "isAnimating", "onDayFocus", "onDaySelect", "onFocus", "onClick", "onKeyDown", "disableMargin", "allowKeyboardControl", "disableHighlightToday", "showDaysOutsideCurrentMonth"]);

  var ref = useRef(null);
  var utils = useUtils();
  var classes = useStyles$g();
  useEffect(function () {
    if (focused && !disabled && !isAnimating && isInCurrentMonth && ref.current && allowKeyboardControl) {
      ref.current.focus();
    }
  }, [allowKeyboardControl, disabled, focused, isAnimating, isInCurrentMonth]);

  var handleFocus = function handleFocus(e) {
    if (!focused) {
      onDayFocus(day);
    }

    if (onFocus) {
      onFocus(e);
    }
  };

  var handleClick = function handleClick(e) {
    if (!disabled) {
      onDaySelect(day, true);
    }

    if (onClick) {
      onClick(e);
    }
  };

  var handleKeyDown = onSpaceOrEnter(function () {
    if (!disabled) {
      onDaySelect(day, FORCE_FINISH_PICKER);
    }
  }, onKeyDown);
  var dayClassName = clsx(classes.day, className, selected && classes.daySelected, disabled && classes.dayDisabled, !disableMargin && classes.dayWithMargin, !disableHighlightToday && isToday && classes.today, !isInCurrentMonth && showDaysOutsideCurrentMonth && classes.dayOutsideMonth);

  if (!isInCurrentMonth && !showDaysOutsideCurrentMonth) {
    // Do not render button and not attach any listeners for empty days
    return /*#__PURE__*/createElement("div", {
      "aria-hidden": true,
      className: clsx(dayClassName, classes.hiddenDaySpacingFiller)
    });
  }

  return /*#__PURE__*/createElement(ButtonBase, _extends({
    ref: ref,
    centerRipple: true,
    "data-mui-test": "day",
    "aria-label": utils.format(day, 'fullDate'),
    tabIndex: focused || focusable ? 0 : -1,
    className: dayClassName
  }, other, {
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }), /*#__PURE__*/createElement("span", {
    className: classes.dayLabel
  }, utils.format(day, 'dayOfMonth')));
};

var areDayPropsEqual = function areDayPropsEqual(prevProps, nextProps) {
  return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.allowKeyboardControl === nextProps.allowKeyboardControl && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};
var Day = withDefaultProps(muiComponentConfig$2, memo(PureDay, areDayPropsEqual));
PureDay.displayName = 'Day';
process.env.NODE_ENV !== "production" ? PureDay.propTypes = {
  today: bool,
  disabled: bool,
  selected: bool
} : void 0;
PureDay.defaultProps = {
  disabled: false,
  today: false,
  selected: false
};

var slideAnimationDuration = 350;
var useStyles$h = makeStyles(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: slideAnimationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});
var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      reduceAnimations = _ref.reduceAnimations,
      slideDirection = _ref.slideDirection,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      other = _objectWithoutProperties(_ref, ["children", "transKey", "reduceAnimations", "slideDirection", "className"]);

  var classes = useStyles$h();

  if (reduceAnimations) {
    return /*#__PURE__*/createElement("div", {
      className: className
    }, children);
  }

  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes['slideEnter-' + slideDirection],
    // @ts-ignore
    exitActive: classes['slideExitActiveLeft-' + slideDirection]
  };
  return /*#__PURE__*/createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, /*#__PURE__*/createElement(CSSTransition, _extends({
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: slideAnimationDuration,
    classNames: transitionClasses,
    children: children
  }, other)));
};

var muiComponentConfig$3 = {
  name: 'MuiPickersCalendar'
};
var useStyles$i = makeStyles(function (theme) {
  var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 4) * 6;
  return {
    calendarContainer: {
      minHeight: weeksContainerHeight
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: weeksContainerHeight
    },
    weekContainer: {
      overflow: 'hidden'
    },
    week: {
      margin: "".concat(DAY_MARGIN, "px 0"),
      display: 'flex',
      justifyContent: 'center'
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButton: {
      marginRight: 12
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    weekDayLabel: {
      width: 36,
      height: 40,
      margin: '0 2px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.hint
    }
  };
}, muiComponentConfig$3);
var Calendar = withDefaultProps(muiComponentConfig$3, function (_ref) {
  var _useGlobalKeyDown;

  var date = _ref.date,
      isMonthSwitchingAnimating = _ref.isMonthSwitchingAnimating,
      onMonthSwitchingAnimationEnd = _ref.onMonthSwitchingAnimationEnd,
      focusedDay = _ref.focusedDay,
      changeFocusedDay = _ref.changeFocusedDay,
      onChange = _ref.onChange,
      slideDirection = _ref.slideDirection,
      currentMonth = _ref.currentMonth,
      renderDay = _ref.renderDay,
      reduceAnimations = _ref.reduceAnimations,
      allowKeyboardControl = _ref.allowKeyboardControl,
      isDateDisabled = _ref.isDateDisabled,
      disableHighlightToday = _ref.disableHighlightToday,
      showDaysOutsideCurrentMonth = _ref.showDaysOutsideCurrentMonth,
      className = _ref.className,
      loading = _ref.loading,
      _ref$renderLoading = _ref.renderLoading,
      renderLoading = _ref$renderLoading === void 0 ? function () {
    return /*#__PURE__*/createElement("span", {
      "data-mui-test": "loading-progress"
    }, "...");
  } : _ref$renderLoading,
      TransitionProps = _ref.TransitionProps;
  var now = useNow();
  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles$i();
  var handleDaySelect = useCallback(function (day) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    onChange(Array.isArray(date) ? day : utils.mergeDateAndTime(day, date || now), isFinish);
  }, [date, now, onChange, utils]);
  var initialDate = Array.isArray(date) ? date[0] : date;
  var nowFocusedDay = focusedDay || initialDate || now;
  useGlobalKeyDown(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, -7));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, 7));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowLeft, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? -1 : 1));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowRight, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? 1 : -1));
  }), _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return changeFocusedDay(utils.startOfWeek(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return changeFocusedDay(utils.endOfWeek(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.PageUp, function () {
    return changeFocusedDay(utils.getNextMonth(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.PageDown, function () {
    return changeFocusedDay(utils.getPreviousMonth(nowFocusedDay));
  }), _useGlobalKeyDown));
  var currentMonthNumber = utils.getMonth(currentMonth);
  var selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
    return utils.startOfDay(selectedDateItem);
  });
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, i) {
    return /*#__PURE__*/createElement(Typography, {
      "aria-hidden": true,
      key: day + i.toString(),
      variant: "caption",
      className: classes.weekDayLabel,
      children: day.charAt(0).toUpperCase()
    });
  })), loading ? /*#__PURE__*/createElement("div", {
    className: classes.loadingContainer
  }, renderLoading()) : /*#__PURE__*/createElement(SlideTransition, _extends({
    transKey: currentMonthNumber,
    onExited: onMonthSwitchingAnimationEnd,
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    className: clsx(classes.calendarContainer, className)
  }, TransitionProps), /*#__PURE__*/createElement("div", {
    role: "grid",
    className: classes.weekContainer
  }, utils.getWeekArray(currentMonth).map(function (week) {
    return /*#__PURE__*/createElement("div", {
      role: "row",
      key: "week-".concat(week[0]),
      className: classes.week
    }, week.map(function (day) {
      var _ref2;

      var disabled = isDateDisabled(day);
      var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
      var dayProps = {
        key: (_ref2 = day) === null || _ref2 === void 0 ? void 0 : _ref2.toString(),
        day: day,
        role: 'cell',
        isAnimating: isMonthSwitchingAnimating,
        disabled: disabled,
        allowKeyboardControl: allowKeyboardControl,
        focused: allowKeyboardControl && Boolean(focusedDay) && utils.isSameDay(day, focusedDay),
        today: utils.isSameDay(day, now),
        inCurrentMonth: isDayInCurrentMonth,
        selected: selectedDates.some(function (selectedDate) {
          return utils.isSameDay(selectedDate, day);
        }),
        disableHighlightToday: disableHighlightToday,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        focusable: allowKeyboardControl && Boolean(nowFocusedDay) && utils.toJsDate(nowFocusedDay).getDate() === utils.toJsDate(day).getDate(),
        onDayFocus: changeFocusedDay,
        onDaySelect: handleDaySelect
      };
      return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/createElement(Day, dayProps);
    }));
  }))));
});
Calendar.displayName = 'Calendar';

/**
 * @ignore - internal component.
 */

var ArrowDropDownIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

var useStyles$j = makeStyles(function (theme) {
  return {
    switchHeader: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
      paddingLeft: 24,
      paddingRight: 12,
      // prevent jumping in safari
      maxHeight: 30,
      minHeight: 30
    },
    yearSelectionSwitcher: {
      marginRight: 'auto'
    },
    previousMonthButton: {
      marginRight: 24
    },
    switchViewDropdown: {
      willChange: 'transform',
      transition: theme.transitions.create('transform'),
      transform: 'rotate(0deg)'
    },
    switchViewDropdownDown: {
      transform: 'rotate(180deg)'
    },
    monthTitleContainer: {
      display: 'flex',
      maxHeight: 30,
      overflow: 'hidden',
      cursor: 'pointer',
      marginRight: 'auto'
    },
    monthText: {
      marginRight: 4
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});

function getSwitchingViewAriaText(view) {
  return view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view';
}

var CalendarHeader = function CalendarHeader(_ref) {
  var currentView = _ref.view,
      views = _ref.views,
      month = _ref.currentMonth,
      changeView = _ref.changeView,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      onMonthChange = _ref.onMonthChange,
      reduceAnimations = _ref.reduceAnimations,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      _ref$leftArrowButtonT = _ref.leftArrowButtonText,
      leftArrowButtonText = _ref$leftArrowButtonT === void 0 ? 'previous month' : _ref$leftArrowButtonT,
      _ref$rightArrowButton = _ref.rightArrowButtonText,
      rightArrowButtonText = _ref$rightArrowButton === void 0 ? 'next month' : _ref$rightArrowButton,
      _ref$getViewSwitching = _ref.getViewSwitchingButtonText,
      getViewSwitchingButtonText = _ref$getViewSwitching === void 0 ? getSwitchingViewAriaText : _ref$getViewSwitching;
  var utils = useUtils();
  var classes = useStyles$j();

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(month), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(month), 'right');
  };

  var isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast: disablePast,
    minDate: minDate
  });

  var toggleView = function toggleView() {
    if (views.length === 1) {
      return;
    }

    if (views.length === 2) {
      changeView(views.find(function (view) {
        return view !== currentView;
      }) || views[0]);
    } else {
      // switching only between first 2
      var nextIndexToOpen = views.indexOf(currentView) !== 0 ? 0 : 1;
      changeView(views[nextIndexToOpen]);
    }
  };

  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: classes.switchHeader
  }, /*#__PURE__*/createElement("div", {
    className: classes.monthTitleContainer,
    onClick: toggleView
  }, /*#__PURE__*/createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'month')
  }, /*#__PURE__*/createElement(Typography, {
    "aria-live": "polite",
    "data-mui-test": "calendar-month-text",
    align: "center",
    variant: "subtitle1",
    className: classes.monthText,
    children: utils.format(month, 'month')
  })), /*#__PURE__*/createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'year')
  }, /*#__PURE__*/createElement(Typography, {
    "aria-live": "polite",
    "data-mui-test": "calendar-year-text",
    align: "center",
    variant: "subtitle1",
    children: utils.format(month, 'year')
  })), views.length > 1 && /*#__PURE__*/createElement(IconButton, {
    size: "small",
    "data-mui-test": "calendar-view-switcher",
    onClick: toggleView,
    className: classes.yearSelectionSwitcher,
    "aria-label": getViewSwitchingButtonText(currentView)
  }, /*#__PURE__*/createElement(ArrowDropDownIcon, {
    className: clsx(classes.switchViewDropdown, currentView === 'year' && classes.switchViewDropdownDown)
  }))), /*#__PURE__*/createElement(Fade, {
    "in": currentView === 'date'
  }, /*#__PURE__*/createElement(ArrowSwitcher, {
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowButtonProps: rightArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowIcon: rightArrowIcon,
    onLeftClick: selectPreviousMonth,
    onRightClick: selectNextMonth,
    isLeftDisabled: isPreviousMonthDisabled,
    isRightDisabled: isNextMonthDisabled
  }))));
};
CalendarHeader.displayName = 'CalendarHeader';
process.env.NODE_ENV !== "production" ? CalendarHeader.propTypes = {
  leftArrowIcon: node,
  rightArrowIcon: node,
  leftArrowButtonText: string,
  rightArrowButtonText: string
} : void 0;

var useStyles$k = makeStyles(function (theme) {
  return {
    yearButtonContainer: {
      color: 'unset',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 0,
      flexBasis: '33.3%',
      display: 'flex',
      justifyContent: 'center',
      padding: '8px 0'
    },
    yearButtonContainerDesktop: {
      flexBasis: '25%'
    },
    yearButton: {
      height: 36,
      width: 72,
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      '&:focus, &:hover': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    },
    yearSelected: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main,
      '&:focus, &:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    yearDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersYear'
});
var Year = function Year(_ref) {
  var onSelect = _ref.onSelect,
      forwardedRef = _ref.forwardedRef,
      value = _ref.value,
      selected = _ref.selected,
      disabled = _ref.disabled,
      children = _ref.children,
      focused = _ref.focused,
      allowKeyboardControl = _ref.allowKeyboardControl,
      other = _objectWithoutProperties(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children", "focused", "allowKeyboardControl"]);

  var classes = useStyles$k();
  var ref = useRef(null);
  var wrapperVariant = useContext(WrapperVariantContext);
  useEffect(function () {
    if (focused && ref.current && !disabled && allowKeyboardControl) {
      ref.current.focus();
    }
  }, [allowKeyboardControl, disabled, focused]);
  return /*#__PURE__*/createElement("button", {
    ref: forwardedRef,
    disabled: disabled,
    "data-mui-test": "year",
    onClick: function onClick() {
      return onSelect(value);
    },
    className: clsx(classes.yearButtonContainer, wrapperVariant === 'desktop' && classes.yearButtonContainerDesktop)
  }, /*#__PURE__*/createElement(Typography, _extends({
    ref: ref,
    variant: "subtitle1",
    "data-mui-test": "year-".concat(children),
    tabIndex: selected ? 0 : -1,
    color: selected ? 'primary' : undefined,
    onKeyDown: onSpaceOrEnter(function () {
      return onSelect(value);
    }),
    className: clsx(classes.yearButton, selected && classes.yearSelected, disabled && classes.yearDisabled)
  }, other), children));
};
var Year$1 = forwardRef(function (props, ref) {
  return /*#__PURE__*/createElement(Year, _extends({}, props, {
    forwardedRef: ref
  }));
});

var useStyles$l = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%'
  }
}, {
  name: 'MuiPickersYearSelection'
});
var YearSelection = function YearSelection(_ref) {
  var _useGlobalKeyDown;

  var __dateOrNull = _ref.date,
      onChange = _ref.onChange,
      onYearChange = _ref.onYearChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      isDateDisabled = _ref.isDateDisabled,
      shouldDisableYear = _ref.shouldDisableYear,
      changeFocusedDay = _ref.changeFocusedDay,
      allowKeyboardControl = _ref.allowKeyboardControl;
  var now = useNow();
  var theme = useTheme();
  var utils = useUtils();
  var classes = useStyles$l();
  var selectedDate = __dateOrNull || now;
  var currentYear = utils.getYear(selectedDate);
  var wrapperVariant = useContext(WrapperVariantContext);
  var selectedYearRef = useRef(null);

  var _React$useState = useState(currentYear),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedYear = _React$useState2[0],
      setFocusedYear = _React$useState2[1];

  useEffect(function () {
    if (allowKeyboardControl && selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
      try {
        selectedYearRef.current.scrollIntoView({
          block: wrapperVariant === 'static' ? 'nearest' : 'center'
        });
      } catch (e) {
        // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
        selectedYearRef.current.scrollIntoView();
      }
    }
  }, []); // eslint-disable-line

  var handleYearSelection = useCallback(function (year) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var newDate = utils.setYear(selectedDate, year);

    if (isDateDisabled(newDate)) {
      return;
    }

    if (onYearChange) {
      onYearChange(newDate);
    }

    onChange(newDate, isFinish);
    changeFocusedDay(newDate);
  }, [changeFocusedDay, selectedDate, isDateDisabled, onChange, onYearChange, utils]);
  var focusYear = useCallback(function (year) {
    if (!isDateDisabled(utils.setYear(selectedDate, year))) {
      setFocusedYear(year);
    }
  }, [selectedDate, isDateDisabled, utils]);
  var yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;
  var nowFocusedYear = focusedYear || currentYear;
  useGlobalKeyDown(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return focusYear(nowFocusedYear - yearsInRow);
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return focusYear(nowFocusedYear + yearsInRow);
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowLeft, function () {
    return focusYear(nowFocusedYear + (theme.direction === 'ltr' ? -1 : 1));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowRight, function () {
    return focusYear(nowFocusedYear + (theme.direction === 'ltr' ? 1 : -1));
  }), _useGlobalKeyDown));
  return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement("div", {
    className: classes.container
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return /*#__PURE__*/createElement(Year$1, {
      key: utils.format(year, 'year'),
      selected: selected,
      value: yearNumber,
      onSelect: handleYearSelection,
      allowKeyboardControl: allowKeyboardControl,
      focused: yearNumber === focusedYear,
      ref: selected ? selectedYearRef : undefined,
      disabled: // Make sure that final date (with month and day included) will be enabled
      isDateDisabled(utils.setYear(selectedDate, yearNumber)) || shouldDisableYear && shouldDisableYear(year)
    }, utils.format(year, 'year'));
  })));
};

var muiComponentConfig$4 = {
  name: 'MuiPickersCalendarView'
};
var useStyles$m = makeStyles({
  viewTransitionContainer: {
    overflowY: 'auto'
  },
  fullHeightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: (DAY_SIZE + DAY_MARGIN * 4) * 7,
    height: '100%'
  }
}, muiComponentConfig$4);
var defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
var CalendarView = withDefaultProps(muiComponentConfig$4, function (_ref) {
  var date = _ref.date,
      view = _ref.view,
      onChange = _ref.onChange,
      changeView = _ref.changeView,
      onMonthChange = _ref.onMonthChange,
      __minDate = _ref.minDate,
      __maxDate = _ref.maxDate,
      _ref$reduceAnimations = _ref.reduceAnimations,
      reduceAnimations = _ref$reduceAnimations === void 0 ? defaultReduceAnimations : _ref$reduceAnimations,
      shouldDisableDate = _ref.shouldDisableDate,
      __allowKeyboardControlProp = _ref.allowKeyboardControl,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      shouldDisableYear = _ref.shouldDisableYear,
      loading = _ref.loading,
      renderLoading = _ref.renderLoading,
      other = _objectWithoutProperties(_ref, ["date", "view", "onChange", "changeView", "onMonthChange", "minDate", "maxDate", "reduceAnimations", "shouldDisableDate", "allowKeyboardControl", "disablePast", "disableFuture", "shouldDisableYear", "loading", "renderLoading"]);

  var utils = useUtils();
  var classes = useStyles$m();
  var isStatic = useContext(IsStaticVariantContext);
  var allowKeyboardControl = __allowKeyboardControlProp !== null && __allowKeyboardControlProp !== void 0 ? __allowKeyboardControlProp : !isStatic;

  var minDate = __minDate || utils.date(defaultMinDate);

  var maxDate = __maxDate || utils.date(defaultMaxDate);

  var _useCalendarState = useCalendarState({
    date: date,
    reduceAnimations: reduceAnimations,
    onMonthChange: onMonthChange,
    minDate: minDate,
    maxDate: maxDate,
    shouldDisableDate: shouldDisableDate,
    disablePast: disablePast,
    disableFuture: disableFuture
  }),
      calendarState = _useCalendarState.calendarState,
      changeFocusedDay = _useCalendarState.changeFocusedDay,
      changeMonth = _useCalendarState.changeMonth,
      isDateDisabled = _useCalendarState.isDateDisabled,
      handleChangeMonth = _useCalendarState.handleChangeMonth,
      onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd;

  useEffect(function () {
    if (date && isDateDisabled(date)) {
      var closestEnabledDate = findClosestEnabledDate({
        utils: utils,
        date: date,
        minDate: utils.date(minDate),
        maxDate: utils.date(maxDate),
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      onChange(closestEnabledDate, false);
    } // This call is too expensive to run it on each prop change.
    // So just ensure that we are not rendering disabled as selected on mount.

  }, []); // eslint-disable-line

  useEffect(function () {
    changeMonth(date);
  }, [date]); // eslint-disable-line

  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(CalendarHeader, _extends({}, other, {
    view: view,
    currentMonth: calendarState.currentMonth,
    changeView: changeView,
    onMonthChange: function onMonthChange(newMonth, direction) {
      return handleChangeMonth({
        newMonth: newMonth,
        direction: direction
      });
    },
    minDate: minDate,
    maxDate: maxDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    reduceAnimations: reduceAnimations
  })), /*#__PURE__*/createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    className: classes.viewTransitionContainer,
    transKey: view
  }, /*#__PURE__*/createElement("div", null, view === 'year' && /*#__PURE__*/createElement(YearSelection, _extends({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    disableFuture: disableFuture,
    disablePast: disablePast,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl,
    shouldDisableYear: shouldDisableYear,
    changeFocusedDay: changeFocusedDay
  })), view === 'month' && /*#__PURE__*/createElement(MonthSelection, _extends({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    onMonthChange: onMonthChange
  })), view === 'date' && /*#__PURE__*/createElement(Calendar, _extends({}, other, calendarState, {
    onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
    changeFocusedDay: changeFocusedDay,
    reduceAnimations: reduceAnimations,
    date: date,
    onChange: onChange,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl,
    loading: loading,
    renderLoading: renderLoading
  })))));
});

var muiComponentConfig$5 = {
  name: 'MuiPickersBasePicker'
};
var useStyles$n = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    width: DIALOG_WIDTH,
    maxHeight: VIEW_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, muiComponentConfig$5);
var MobileKeyboardTextFieldProps = {
  fullWidth: true
};

var isTimePickerByViews = function isTimePickerByViews(views) {
  return !views.some(function (view) {
    return view === 'year' || view === 'month' || view === 'date';
  });
};

function Picker(_ref) {
  var date = _ref.date,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['year', 'month', 'date', 'hours', 'minutes', 'seconds'] : _ref$views,
      toolbarTitle = _ref.toolbarTitle,
      showToolbar = _ref.showToolbar,
      onDateChange = _ref.onDateChange,
      _ref$ToolbarComponent = _ref.ToolbarComponent,
      ToolbarComponent = _ref$ToolbarComponent === void 0 ? function () {
    return null;
  } : _ref$ToolbarComponent,
      orientation = _ref.orientation,
      DateInputProps = _ref.DateInputProps,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarFormat = _ref.toolbarFormat,
      className = _ref.className,
      toolbarPlaceholder = _ref.toolbarPlaceholder,
      other = _objectWithoutProperties(_ref, ["date", "openTo", "views", "toolbarTitle", "showToolbar", "onDateChange", "ToolbarComponent", "orientation", "DateInputProps", "isMobileKeyboardViewOpen", "toggleMobileKeyboardView", "toolbarFormat", "className", "toolbarPlaceholder"]);

  var classes = useStyles$n();
  var isLandscape = useIsLandscape(views, orientation);
  var wrapperVariant = useContext(WrapperVariantContext);
  var handleDateChange = useCallback(function (date, isFinish) {
    onDateChange(date, wrapperVariant, isFinish);
  }, [onDateChange, wrapperVariant]);
  var toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;

  var _useViews = useViews({
    views: views,
    openTo: openTo,
    onChange: handleDateChange,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }),
      openView = _useViews.openView,
      nextView = _useViews.nextView,
      previousView = _useViews.previousView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  return /*#__PURE__*/createElement("div", {
    className: clsx(classes.container, className, isLandscape && classes.containerLandscape)
  }, toShowToolbar && /*#__PURE__*/createElement(ToolbarComponent, _extends({}, other, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: handleDateChange,
    setOpenView: setOpenView,
    openView: openView,
    toolbarTitle: toolbarTitle,
    toolbarFormat: toolbarFormat,
    toolbarPlaceholder: toolbarPlaceholder,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  })), /*#__PURE__*/createElement("div", {
    className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, isMobileKeyboardViewOpen ? /*#__PURE__*/createElement(MobileKeyboardInputView, null, /*#__PURE__*/createElement(KeyboardDateInput, _extends({}, DateInputProps, {
    ignoreInvalidInputs: true,
    disableOpenPicker: true,
    TextFieldProps: MobileKeyboardTextFieldProps
  }))) : /*#__PURE__*/createElement(Fragment, null, (openView === 'year' || openView === 'month' || openView === 'date') && /*#__PURE__*/createElement(CalendarView, _extends({
    date: date,
    changeView: setOpenView // @ts-ignore
    ,
    views: views,
    onChange: handleChangeAndOpenNext,
    view: openView
  }, other)), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && /*#__PURE__*/createElement(ClockView, _extends({}, other, {
    date: date,
    type: openView,
    onDateChange: handleDateChange,
    onChange: handleChangeAndOpenNext,
    openNextView: function openNextView() {
      return setOpenView(nextView);
    },
    openPreviousView: function openPreviousView() {
      return setOpenView(previousView);
    },
    nextViewAvailable: !Boolean(nextView),
    previousViewAvailable: !Boolean(previousView),
    showViewSwitcher: isTimePickerByViews(views) && wrapperVariant === 'desktop'
  })))));
}

var Picker$1 = withDefaultProps(muiComponentConfig$5, Picker);

function withDateAdapterProp(Component) {
  return function (_ref) {
    var dateAdapter = _ref.dateAdapter,
        other = _objectWithoutProperties(_ref, ["dateAdapter"]);

    if (dateAdapter) {
      return /*#__PURE__*/createElement(MuiPickersAdapterContext.Provider, {
        value: dateAdapter
      }, /*#__PURE__*/createElement(Component, other));
    }

    return /*#__PURE__*/createElement(Component, other);
  };
}

/* Creates a component that rendering modal/popover/nothing and spreading props down to text field */
function makeWrapperComponent(Wrapper, _ref) {
  var KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
      PureDateInputComponent = _ref.PureDateInputComponent;

  function WrapperComponent(props) {
    var open = props.open,
        value = props.value,
        autoOk = props.autoOk,
        inputFormat = props.inputFormat,
        onChange = props.onChange,
        children = props.children,
        clearable = props.clearable,
        clearText = props.clearText,
        DialogProps = props.DialogProps,
        PopoverProps = props.PopoverProps,
        okText = props.okText,
        cancelText = props.cancelText,
        todayText = props.todayText,
        DateInputProps = props.DateInputProps,
        wrapperProps = props.wrapperProps,
        wider = props.wider,
        showTabs = props.showTabs,
        onAccept = props.onAccept,
        onClose = props.onClose,
        onOpen = props.onOpen,
        displayStaticWrapperAs = props.displayStaticWrapperAs,
        restPropsForTextField = _objectWithoutProperties(props, ["open", "value", "autoOk", "inputFormat", "onChange", "children", "clearable", "clearText", "DialogProps", "PopoverProps", "okText", "cancelText", "todayText", "DateInputProps", "wrapperProps", "wider", "showTabs", "onAccept", "onClose", "onOpen", "displayStaticWrapperAs"]);

    var WrapperComponent = Wrapper;
    return /*#__PURE__*/React__default.createElement(WrapperComponent, _extends({
      clearable: clearable,
      clearText: clearText,
      DialogProps: DialogProps,
      okText: okText,
      todayText: todayText,
      cancelText: cancelText,
      DateInputProps: DateInputProps // @ts-ignore
      ,
      KeyboardDateInputComponent: KeyboardDateInputComponent // @ts-ignore
      ,
      PureDateInputComponent: PureDateInputComponent,
      wider: wider,
      showTabs: showTabs,
      displayStaticWrapperAs: displayStaticWrapperAs
    }, wrapperProps, restPropsForTextField), children);
  }

  return WrapperComponent;
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var valueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  areValuesEqual: function areValuesEqual(utils, a, b) {
    return utils.isEqual(a, b);
  }
};
function makePickerWithStateAndWrapper(Wrapper, _ref) {
  var name = _ref.name,
      useInterceptProps = _ref.useInterceptProps,
      useValidation = _ref.useValidation,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;
  var PickerWrapper = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: KeyboardDateInput,
    PureDateInputComponent: PureDateInput
  });

  function PickerWithState(__props) {
    var allProps = useInterceptProps(__props);
    var validationError = useValidation(allProps.value, allProps) !== null;

    var _usePickerState = usePickerState(allProps, valueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps; // Note that we are passing down all the value without spread.
    // It saves us >1kb gzip and make any prop available automatically on any level down.


    var value = allProps.value,
        onChange = allProps.onChange,
        other = _objectWithoutProperties(allProps, ["value", "onChange"]);

    var AllDateInputProps = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, inputProps), other), {}, {
      validationError: validationError
    });

    return /*#__PURE__*/createElement(PickerWrapper, _extends({
      wrapperProps: wrapperProps,
      DateInputProps: AllDateInputProps
    }, other), /*#__PURE__*/createElement(Picker$1, _extends({}, pickerProps, {
      toolbarTitle: allProps.label || allProps.toolbarTitle,
      ToolbarComponent: other.ToolbarComponent || DefaultToolbarComponent,
      DateInputProps: AllDateInputProps
    }, other)));
  }

  var FinalPickerComponent = withDefaultProps({
    name: name
  }, withDateAdapterProp(PickerWithState));
  return forwardRef(function (props, ref) {
    return /*#__PURE__*/createElement(FinalPickerComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  });
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var datePickerConfig = {
  useValidation: makeValidationHook(validateDate),
  DefaultToolbarComponent: DatePickerToolbar,
  useInterceptProps: function useInterceptProps(_ref) {
    var _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['year', 'date'] : _ref$views,
        _ref$minDate = _ref.minDate,
        __minDate = _ref$minDate === void 0 ? defaultMinDate : _ref$minDate,
        _ref$maxDate = _ref.maxDate,
        __maxDate = _ref$maxDate === void 0 ? defaultMaxDate : _ref$maxDate,
        other = _objectWithoutProperties(_ref, ["openTo", "views", "minDate", "maxDate"]);

    var utils = useUtils();
    var minDate = useParsedDate(__minDate);
    var maxDate = useParsedDate(__maxDate);
    return _objectSpread$7({
      views: views,
      openTo: openTo,
      minDate: minDate,
      maxDate: maxDate,
      mask: '__/__/____',
      inputFormat: getFormatByViews(views, utils)
    }, other);
  }
};
var DatePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, _objectSpread$7({
  name: 'MuiPickersDatePicker'
}, datePickerConfig));
var MobileDatePicker = makePickerWithStateAndWrapper(MobileWrapper, _objectSpread$7({
  name: 'MuiPickersMobileDatePicker'
}, datePickerConfig));
var DesktopDatePicker = makePickerWithStateAndWrapper(DesktopWrapper, _objectSpread$7({
  name: 'MuiPickersDesktopDatePicker'
}, datePickerConfig));
var StaticDatePicker = makePickerWithStateAndWrapper(StaticWrapper, _objectSpread$7({
  name: 'MuiPickersStaticDatePicker'
}, datePickerConfig));

/**
 * @ignore - internal component.
 */

var ClockIcon = createSvgIcon( /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), /*#__PURE__*/createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'Clock');

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function getTextFieldAriaText$1(value, utils) {
  return value && utils.isValid(utils.date(value)) ? "Choose time, selected time is ".concat(utils.format(utils.date(value), 'fullTime')) : 'Choose time';
}

function useInterceptProps(_ref) {
  var ampm = _ref.ampm,
      mask = _ref.mask,
      inputFormat = _ref.inputFormat,
      __minTime = _ref.minTime,
      __maxTime = _ref.maxTime,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'hours' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['hours', 'minutes'] : _ref$views,
      other = _objectWithoutProperties(_ref, ["ampm", "mask", "inputFormat", "minTime", "maxTime", "openTo", "views"]);

  var utils = useUtils();
  var minTime = useParsedDate(__minTime);
  var maxTime = useParsedDate(__maxTime);
  var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();
  return _objectSpread$8({
    views: views,
    openTo: openTo,
    minTime: minTime,
    maxTime: maxTime,
    ampm: willUseAmPm,
    acceptRegex: willUseAmPm ? /[\dapAP]/gi : /\d/gi,
    mask: mask || (willUseAmPm ? '__:__ _M' : '__:__'),
    getOpenDialogAriaText: getTextFieldAriaText$1,
    openPickerIcon: /*#__PURE__*/React__default.createElement(ClockIcon, null),
    inputFormat: pick12hOr24hFormat(inputFormat, ampm, {
      localized: utils.formats.fullTime,
      '12h': utils.formats.fullTime12h,
      '24h': utils.formats.fullTime24h
    })
  }, other);
}

var timePickerConfig = {
  useInterceptProps: useInterceptProps,
  useValidation: makeValidationHook(validateTime),
  DefaultToolbarComponent: TimePickerToolbar
};
var TimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, _objectSpread$8({
  name: 'MuiPickersTimePicker'
}, timePickerConfig));
var DesktopTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, _objectSpread$8({
  name: 'MuiPickersDesktopTimePicker'
}, timePickerConfig));
var MobileTimePicker = makePickerWithStateAndWrapper(MobileWrapper, _objectSpread$8({
  name: 'MuiPickersMobileTimePicker'
}, timePickerConfig));
var StaticTimePicker = makePickerWithStateAndWrapper(StaticWrapper, _objectSpread$8({
  name: 'MuiPickersStaticTimePicker'
}, timePickerConfig));

/**
 * @ignore - internal component.
 */

var TimeIcon = createSvgIcon( /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), /*#__PURE__*/createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'Time');

/**
 * @ignore - internal component.
 */

var DateRangeIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), 'DateRange');

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

var useStyles$o = makeStyles(function (theme) {
  // prettier-ignore
  var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    container: {
      order: 1
    },
    tabs: {
      color: theme.palette.getContrastText(tabsBackground),
      backgroundColor: tabsBackground
    }
  };
}, {
  name: 'MuiPickerDTTabs'
});
var DateTimePickerTabs = function DateTimePickerTabs(_ref) {
  var view = _ref.view,
      onChange = _ref.onChange,
      _ref$timeIcon = _ref.timeIcon,
      timeIcon = _ref$timeIcon === void 0 ? /*#__PURE__*/createElement(TimeIcon, null) : _ref$timeIcon,
      _ref$dateRangeIcon = _ref.dateRangeIcon,
      dateRangeIcon = _ref$dateRangeIcon === void 0 ? /*#__PURE__*/createElement(DateRangeIcon, null) : _ref$dateRangeIcon;
  var classes = useStyles$o();
  var theme = useTheme();
  var wrapperVariant = useContext(WrapperVariantContext);
  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return /*#__PURE__*/createElement(Paper, {
    className: clsx(wrapperVariant === 'desktop' && classes.container)
  }, /*#__PURE__*/createElement(Tabs, {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, /*#__PURE__*/createElement(Tab, {
    value: "date",
    "aria-label": "pick date",
    icon: /*#__PURE__*/createElement(Fragment, null, dateRangeIcon)
  }), /*#__PURE__*/createElement(Tab, {
    value: "time",
    "aria-label": "pick time",
    icon: /*#__PURE__*/createElement(Fragment, null, timeIcon)
  })));
};

var muiComponentConfig$6 = {
  name: 'MuiPickersDateTimePickerToolbar'
};
var useStyles$p = makeStyles({
  toolbar: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-around'
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  timeContainer: {
    display: 'flex'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  timeTypography: {},
  penIcon: {
    position: 'absolute',
    top: 8,
    right: 8
  }
}, muiComponentConfig$6);
var DateTimePickerToolbar = withDefaultProps(muiComponentConfig$6, function (_ref) {
  var date = _ref.date,
      openView = _ref.openView,
      setOpenView = _ref.setOpenView,
      ampm = _ref.ampm,
      hideTabs = _ref.hideTabs,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon,
      toolbarFormat = _ref.toolbarFormat,
      _ref$toolbarPlacehold = _ref.toolbarPlaceholder,
      toolbarPlaceholder = _ref$toolbarPlacehold === void 0 ? '––' : _ref$toolbarPlacehold,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE & TIME' : _ref$toolbarTitle;
  var utils = useUtils();
  var classes = useStyles$p();
  var wrapperVariant = useContext(WrapperVariantContext);
  var showTabs = wrapperVariant === 'desktop' ? true : !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

  var formatHours = function formatHours(time) {
    return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  };

  var dateText = useMemo(function () {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    return utils.format(date, 'shortDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils]);
  return /*#__PURE__*/createElement(Fragment, null, wrapperVariant !== 'desktop' && /*#__PURE__*/createElement(PickerToolbar, {
    toolbarTitle: toolbarTitle,
    isLandscape: false,
    penIconClassName: classes.penIcon,
    className: classes.toolbar,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }, /*#__PURE__*/createElement("div", {
    className: classes.dateContainer
  }, /*#__PURE__*/createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "subtitle1",
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    value: date ? utils.format(date, 'year') : '–'
  }), /*#__PURE__*/createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "h4",
    "data-mui-test": "datetimepicker-toolbar-date",
    onClick: function onClick() {
      return setOpenView('date');
    },
    selected: openView === 'date',
    value: dateText
  })), /*#__PURE__*/createElement("div", {
    className: classes.timeContainer
  }, /*#__PURE__*/createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    "data-mui-test": "hours",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--',
    typographyClassName: classes.timeTypography
  }), /*#__PURE__*/createElement(ToolbarText, {
    variant: "h3",
    value: ":",
    className: classes.separator
  }), /*#__PURE__*/createElement(ToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    "data-mui-test": "minutes",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--',
    typographyClassName: classes.timeTypography
  }))), showTabs && /*#__PURE__*/createElement(DateTimePickerTabs, {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView
  }));
});

function validateDateAndTime(utils, value, _ref) {
  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      shouldDisableDate = _ref.shouldDisableDate,
      disablePast = _ref.disablePast,
      timeValidationProps = _objectWithoutProperties(_ref, ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"]);

  var dateValidationResult = validateDate(utils, value, {
    minDate: minDate,
    maxDate: maxDate,
    disableFuture: disableFuture,
    shouldDisableDate: shouldDisableDate,
    disablePast: disablePast
  });

  if (dateValidationResult !== null) {
    return dateValidationResult;
  }

  return validateTime(utils, value, timeValidationProps);
}

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useInterceptProps$1(_ref) {
  var ampm = _ref.ampm,
      mask = _ref.mask,
      inputFormat = _ref.inputFormat,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
      __minTime = _ref.minTime,
      __maxTime = _ref.maxTime,
      _ref$minDate = _ref.minDate,
      __minDate = _ref$minDate === void 0 ? defaultMinDate : _ref$minDate,
      _ref$maxDate = _ref.maxDate,
      __maxDate = _ref$maxDate === void 0 ? defaultMaxDate : _ref$maxDate,
      __maxDateTime = _ref.maxDateTime,
      __minDateTime = _ref.minDateTime,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['year', 'date', 'hours', 'minutes'] : _ref$views,
      other = _objectWithoutProperties(_ref, ["ampm", "mask", "inputFormat", "orientation", "minTime", "maxTime", "minDate", "maxDate", "maxDateTime", "minDateTime", "openTo", "views"]);

  var utils = useUtils();
  var minTime = useParsedDate(__minTime);
  var maxTime = useParsedDate(__maxTime);
  var minDate = useParsedDate(__minDate);
  var maxDate = useParsedDate(__maxDate);
  var minDateTime = useParsedDate(__minDateTime);
  var maxDateTime = useParsedDate(__maxDateTime);
  var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();

  if (orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return _objectSpread$9({
    openTo: openTo,
    views: views,
    ampm: willUseAmPm,
    ampmInClock: true,
    orientation: orientation,
    showToolbar: true,
    showTabs: true,
    minDate: minDateTime || minDate,
    minTime: minDateTime || minTime,
    maxDate: maxDateTime || maxDate,
    maxTime: maxDateTime || maxTime,
    disableIgnoringDatePartForTimeValidation: Boolean(minDateTime || maxDateTime),
    acceptRegex: willUseAmPm ? /[\dap]/gi : /\d/gi,
    mask: mask || (willUseAmPm ? '__/__/____ __:__ _M' : '__/__/____ __:__'),
    inputFormat: pick12hOr24hFormat(inputFormat, ampm, {
      localized: utils.formats.keyboardDateTime,
      '12h': utils.formats.keyboardDateTime12h,
      '24h': utils.formats.keyboardDateTime24h
    })
  }, other);
}

var useValidation = makeValidationHook(validateDateAndTime);
var dateTimePickerConfig = {
  useInterceptProps: useInterceptProps$1,
  useValidation: useValidation,
  DefaultToolbarComponent: DateTimePickerToolbar
};
var DateTimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, _objectSpread$9({
  name: 'MuiPickersDateTimePicker'
}, dateTimePickerConfig));
var DesktopDateTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, _objectSpread$9({
  name: 'MuiPickersDesktopDateTimePicker'
}, dateTimePickerConfig));
var MobileDateTimePicker = makePickerWithStateAndWrapper(MobileWrapper, _objectSpread$9({
  name: 'MuiPickersMobileDateTimePicker'
}, dateTimePickerConfig));
var StaticDateTimePicker = makePickerWithStateAndWrapper(StaticWrapper, _objectSpread$9({
  name: 'MuiPickersStaticDateTimePicker'
}, dateTimePickerConfig));

function calculateRangeChange(_ref) {
  var utils = _ref.utils,
      range = _ref.range,
      selectedDate = _ref.newDate,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd;

  var _range = _slicedToArray(range, 2),
      start = _range[0],
      end = _range[1];

  if (currentlySelectingRangeEnd === 'start') {
    return Boolean(end) && utils.isAfter(selectedDate, end) ? {
      nextSelection: 'end',
      newRange: [selectedDate, null]
    } : {
      nextSelection: 'end',
      newRange: [selectedDate, end]
    };
  } else {
    return Boolean(start) && utils.isBefore(selectedDate, start) ? {
      nextSelection: 'end',
      newRange: [selectedDate, null]
    } : {
      nextSelection: 'start',
      newRange: [start, selectedDate]
    };
  }
}
function calculateRangePreview(options) {
  if (!options.newDate) {
    return [null, null];
  }

  var _options$range = _slicedToArray(options.range, 2),
      start = _options$range[0],
      end = _options$range[1];

  var _calculateRangeChange = calculateRangeChange(options),
      newRange = _calculateRangeChange.newRange;

  if (!start || !end) {
    return newRange;
  }

  var _newRange = _slicedToArray(newRange, 2),
      previewStart = _newRange[0],
      previewEnd = _newRange[1]; // prettier-ignore


  return options.currentlySelectingRangeEnd === 'end' ? [end, previewEnd] : [previewStart, start];
}

var muiComponentConfig$7 = {
  name: 'MuiPickersDateRangePickerToolbarProps'
};
var useStyles$q = makeStyles({
  penIcon: {
    position: 'relative',
    top: 4
  },
  dateTextContainer: {
    display: 'flex'
  }
}, muiComponentConfig$7);
var DateRangePickerToolbar = withDefaultProps(muiComponentConfig$7, function (_ref) {
  var _ref$date = _slicedToArray(_ref.date, 2),
      start = _ref$date[0],
      end = _ref$date[1],
      toolbarFormat = _ref.toolbarFormat,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      startText = _ref.startText,
      endText = _ref.endText,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE RANGE' : _ref$toolbarTitle;

  var utils = useUtils();
  var classes = useStyles$q();
  var startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  var endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
  return /*#__PURE__*/createElement(PickerToolbar, {
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: false,
    penIconClassName: classes.penIcon
  }, /*#__PURE__*/createElement("div", {
    className: classes.dateTextContainer
  }, /*#__PURE__*/createElement(ToolbarButton, {
    variant: Boolean(start) ? 'h5' : 'h6',
    value: startDateValue,
    selected: currentlySelectingRangeEnd === 'start',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('start');
    }
  }), /*#__PURE__*/createElement(Typography, {
    variant: "h5"
  }, "\xA0", '–', "\xA0"), /*#__PURE__*/createElement(ToolbarButton, {
    variant: Boolean(end) ? 'h5' : 'h6',
    value: endDateValue,
    selected: currentlySelectingRangeEnd === 'end',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('end');
    }
  })));
});

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var endBorderStyle = {
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%'
};
var startBorderStyle = {
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%'
};
var useStyles$r = makeStyles(function (theme) {
  return {
    rangeIntervalDay: {
      '&:first-child $rangeIntervalDayPreview': _objectSpread$a(_objectSpread$a({}, startBorderStyle), {}, {
        borderLeftColor: theme.palette.divider
      }),
      '&:last-child $rangeIntervalDayPreview': _objectSpread$a(_objectSpread$a({}, endBorderStyle), {}, {
        borderRightColor: theme.palette.divider
      })
    },
    rangeIntervalDayHighlight: {
      borderRadius: 0,
      color: theme.palette.primary.contrastText,
      backgroundColor: fade(theme.palette.primary.light, 0.6),
      '&:first-child': startBorderStyle,
      '&:last-child': endBorderStyle
    },
    rangeIntervalDayHighlightStart: _objectSpread$a(_objectSpread$a({}, startBorderStyle), {}, {
      paddingLeft: 0,
      marginLeft: DAY_MARGIN / 2
    }),
    rangeIntervalDayHighlightEnd: _objectSpread$a(_objectSpread$a({}, endBorderStyle), {}, {
      paddingRight: 0,
      marginRight: DAY_MARGIN / 2
    }),
    day: {
      // Required to overlap preview border
      transform: 'scale(1.1)',
      '& > *': {
        transform: 'scale(0.9)'
      }
    },
    dayOutsideRangeInterval: {
      '&:hover': {
        border: "1px solid ".concat(theme.palette.grey[500])
      }
    },
    dayInsideRangeInterval: {
      color: theme.palette.getContrastText(fade(theme.palette.primary.light, 0.6))
    },
    notSelectedDate: {
      backgroundColor: 'transparent'
    },
    rangeIntervalPreview: {
      // replace default day component margin with transparent border to avoid jumping on preview
      border: '2px solid transparent'
    },
    rangeIntervalDayPreview: {
      borderRadius: 0,
      border: "2px dashed ".concat(theme.palette.divider),
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      '&$rangeIntervalDayPreviewStart': _objectSpread$a({
        borderLeftColor: theme.palette.divider
      }, startBorderStyle),
      '&$rangeIntervalDayPreviewEnd': _objectSpread$a({
        borderRightColor: theme.palette.divider
      }, endBorderStyle)
    },
    rangeIntervalDayPreviewStart: {},
    rangeIntervalDayPreviewEnd: {}
  };
}, {
  name: 'MuiPickersDateRangeDay'
});
var PureDateRangeDay = function PureDateRangeDay(_ref) {
  var day = _ref.day,
      className = _ref.className,
      selected = _ref.selected,
      isPreviewing = _ref.isPreviewing,
      isStartOfPreviewing = _ref.isStartOfPreviewing,
      isEndOfPreviewing = _ref.isEndOfPreviewing,
      isHighlighting = _ref.isHighlighting,
      isEndOfHighlighting = _ref.isEndOfHighlighting,
      isStartOfHighlighting = _ref.isStartOfHighlighting,
      inCurrentMonth = _ref.inCurrentMonth,
      other = _objectWithoutProperties(_ref, ["day", "className", "selected", "isPreviewing", "isStartOfPreviewing", "isEndOfPreviewing", "isHighlighting", "isEndOfHighlighting", "isStartOfHighlighting", "inCurrentMonth"]);

  var utils = useUtils();
  var classes = useStyles$r();
  var isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
  var isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
  var shouldRenderHighlight = isHighlighting && inCurrentMonth;
  var shouldRenderPreview = isPreviewing && inCurrentMonth;
  return /*#__PURE__*/createElement("div", {
    "data-mui-test": shouldRenderHighlight ? 'DateRangeHighlight' : undefined,
    className: clsx(classes.rangeIntervalDay, (isEndOfHighlighting || isEndOfMonth) && classes.rangeIntervalDayHighlightEnd, (isStartOfHighlighting || isStartOfMonth) && classes.rangeIntervalDayHighlightStart, shouldRenderHighlight && classes.rangeIntervalDayHighlight)
  }, /*#__PURE__*/createElement("div", {
    "data-mui-test": shouldRenderPreview ? 'DateRangePreview' : undefined,
    className: clsx(classes.rangeIntervalPreview, (isEndOfPreviewing || isEndOfMonth) && classes.rangeIntervalDayPreviewEnd, (isStartOfPreviewing || isStartOfMonth) && classes.rangeIntervalDayPreviewStart, shouldRenderPreview && classes.rangeIntervalDayPreview)
  }, /*#__PURE__*/createElement(Day, _extends({
    allowKeyboardControl: false,
    disableMargin: true
  }, other, {
    day: day,
    selected: selected,
    inCurrentMonth: inCurrentMonth,
    "data-mui-test": "DateRangeDay",
    className: clsx(classes.day, className, !selected && [classes.notSelectedDate, isHighlighting && classes.dayInsideRangeInterval], !isHighlighting && classes.dayOutsideRangeInterval)
  }))));
};
PureDateRangeDay.displayName = 'DateRangeDay';
var DateRangeDay = memo(PureDateRangeDay, function (prevProps, nextProps) {
  return prevProps.isHighlighting === nextProps.isHighlighting && prevProps.isEndOfHighlighting === nextProps.isEndOfHighlighting && prevProps.isStartOfHighlighting === nextProps.isStartOfHighlighting && prevProps.isPreviewing === nextProps.isPreviewing && prevProps.isEndOfPreviewing === nextProps.isEndOfPreviewing && prevProps.isStartOfPreviewing === nextProps.isStartOfPreviewing && areDayPropsEqual(prevProps, nextProps);
});

var onlyDateView = ['date'];
var DateRangePickerViewMobile = function DateRangePickerViewMobile(_ref) {
  var date = _ref.date,
      changeMonth = _ref.changeMonth,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      leftArrowButtonText = _ref.leftArrowButtonText,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      rightArrowButtonText = _ref.rightArrowButtonText,
      rightArrowIcon = _ref.rightArrowIcon,
      onChange = _ref.onChange,
      __minDate = _ref.minDate,
      __maxDate = _ref.maxDate,
      other = _objectWithoutProperties(_ref, ["date", "changeMonth", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "onChange", "minDate", "maxDate"]);

  var utils = useUtils();

  var minDate = __minDate || utils.date(defaultMinDate);

  var maxDate = __maxDate || utils.date(defaultMaxDate);

  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(CalendarHeader, _extends({
    view: "date",
    views: onlyDateView,
    changeView: function changeView() {
      return {};
    },
    onMonthChange: changeMonth,
    leftArrowButtonProps: leftArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowButtonProps: rightArrowButtonProps,
    rightArrowButtonText: rightArrowButtonText,
    rightArrowIcon: rightArrowIcon,
    minDate: minDate,
    maxDate: maxDate
  }, other)), /*#__PURE__*/createElement(Calendar, _extends({}, other, {
    date: date,
    onChange: onChange,
    renderDay: function renderDay(day, _, DayProps) {
      return /*#__PURE__*/createElement(DateRangeDay, _extends({
        isPreviewing: false,
        isStartOfPreviewing: false,
        isEndOfPreviewing: false,
        isHighlighting: isWithinRange(utils, day, date),
        isStartOfHighlighting: isStartOfRange(utils, day, date),
        isEndOfHighlighting: isEndOfRange(utils, day, date)
      }, DayProps));
    }
  })));
};

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useStyles$s = makeStyles(function (theme) {
  return {
    rangeInputsContainer: _defineProperty({
      display: 'flex',
      alignItems: 'baseline'
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column',
      alignItems: 'center'
    }),
    toLabelDelimiter: _defineProperty({
      margin: '8px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '0 16px'
    })
  };
}, {
  name: 'MuiPickersDateRangePickerInput'
});
var DateRangePickerInput = function DateRangePickerInput(_ref) {
  var containerRef = _ref.containerRef,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      disableOpenPicker = _ref.disableOpenPicker,
      endText = _ref.endText,
      forwardedRef = _ref.forwardedRef,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      open = _ref.open,
      openPicker = _ref.openPicker,
      rawValue = _ref.rawValue,
      readOnly = _ref.readOnly,
      renderInput = _ref.renderInput,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      startText = _ref.startText,
      TextFieldProps = _ref.TextFieldProps,
      _ref$rawValue = _slicedToArray(_ref.rawValue, 2),
      start = _ref$rawValue[0],
      end = _ref$rawValue[1],
      _ref$validationError = _slicedToArray(_ref.validationError, 2),
      startValidationError = _ref$validationError[0],
      endValidationError = _ref$validationError[1],
      other = _objectWithoutProperties(_ref, ["containerRef", "currentlySelectingRangeEnd", "disableOpenPicker", "endText", "forwardedRef", "onBlur", "onChange", "open", "openPicker", "rawValue", "readOnly", "renderInput", "setCurrentlySelectingRangeEnd", "startText", "TextFieldProps", "rawValue", "validationError"]);

  var utils = useUtils();
  var classes = useStyles$s();
  var startRef = useRef(null);
  var endRef = useRef(null);
  var wrapperVariant = useContext(WrapperVariantContext);
  useEffect(function () {
    if (!open) {
      return;
    }

    if (currentlySelectingRangeEnd === 'start') {
      var _startRef$current;

      (_startRef$current = startRef.current) === null || _startRef$current === void 0 ? void 0 : _startRef$current.focus();
    } else if (currentlySelectingRangeEnd === 'end') {
      var _endRef$current;

      (_endRef$current = endRef.current) === null || _endRef$current === void 0 ? void 0 : _endRef$current.focus();
    }
  }, [currentlySelectingRangeEnd, open]); // TODO: rethink this approach. We do not need to wait for calendar to be updated to rerender input (looks like freezing)
  // TODO: so simply break 1 react's commit phase in 2 (first for input and second for calendars) by executing onChange in the next tick

  var lazyHandleChangeCallback = useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return executeInTheNextEventLoopTick(function () {
      return onChange.apply(void 0, args);
    });
  }, [onChange]);

  var handleStartChange = function handleStartChange(date, inputString) {
    lazyHandleChangeCallback([date, utils.date(end)], inputString);
  };

  var handleEndChange = function handleEndChange(date, inputString) {
    lazyHandleChangeCallback([utils.date(start), date], inputString);
  };

  var openRangeStartSelection = function openRangeStartSelection() {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('start');
    }

    if (!disableOpenPicker) {
      openPicker();
    }
  };

  var openRangeEndSelection = function openRangeEndSelection() {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('end');
    }

    if (!disableOpenPicker) {
      openPicker();
    }
  };

  var openOnFocus = wrapperVariant === 'desktop';
  var startInputProps = useMaskedInput(_objectSpread$b(_objectSpread$b({}, other), {}, {
    readOnly: readOnly,
    rawValue: start,
    onChange: handleStartChange,
    label: startText,
    validationError: startValidationError !== null,
    TextFieldProps: _objectSpread$b(_objectSpread$b({}, TextFieldProps), {}, {
      ref: startRef,
      variant: 'outlined',
      focused: open && currentlySelectingRangeEnd === 'start'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeStartSelection : undefined,
      onFocus: openOnFocus ? openRangeStartSelection : undefined
    }
  }));
  var endInputProps = useMaskedInput(_objectSpread$b(_objectSpread$b({}, other), {}, {
    readOnly: readOnly,
    label: endText,
    rawValue: end,
    onChange: handleEndChange,
    validationError: endValidationError !== null,
    TextFieldProps: _objectSpread$b(_objectSpread$b({}, TextFieldProps), {}, {
      ref: endRef,
      variant: 'outlined',
      focused: open && currentlySelectingRangeEnd === 'end'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeEndSelection : undefined,
      onFocus: openOnFocus ? openRangeEndSelection : undefined
    }
  }));
  return /*#__PURE__*/createElement("div", {
    onBlur: onBlur,
    className: classes.rangeInputsContainer,
    ref: mergeRefs([containerRef, forwardedRef])
  }, renderInput(startInputProps, endInputProps));
};
process.env.NODE_ENV !== "production" ? DateRangePickerInput.propTypes = {
  acceptRegex: instanceOf(RegExp),
  getOpenDialogAriaText: func,
  mask: string,
  OpenPickerButtonProps: object,
  openPickerIcon: node,
  renderInput: func.isRequired,
  rifmFormatter: func
} : void 0;

var useStyles$t = makeStyles(function (theme) {
  return {
    dateRangeContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    rangeCalendarContainer: {
      '&:not(:last-child)': {
        borderRight: "2px solid ".concat(theme.palette.divider)
      }
    },
    calendar: {
      minWidth: 312,
      minHeight: 288
    },
    arrowSwitcher: {
      padding: '16px 16px 8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  };
}, {
  name: 'MuiPickersDesktopDateRangeCalendar'
});

function getCalendarsArray(calendars) {
  switch (calendars) {
    case 1:
      return [0];

    case 2:
      return [0, 0];

    case 3:
      return [0, 0, 0];
    // this will not work in IE11, but allows to support any amount of calendars

    default:
      return new Array(calendars).fill(0);
  }
}

var DateRangePickerViewDesktop = function DateRangePickerViewDesktop(_ref) {
  var date = _ref.date,
      _ref$calendars = _ref.calendars,
      calendars = _ref$calendars === void 0 ? 2 : _ref$calendars,
      changeMonth = _ref.changeMonth,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      leftArrowButtonText = _ref.leftArrowButtonText,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      rightArrowButtonText = _ref.rightArrowButtonText,
      rightArrowIcon = _ref.rightArrowIcon,
      onChange = _ref.onChange,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      __minDate = _ref.minDate,
      __maxDate = _ref.maxDate,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      currentMonth = _ref.currentMonth,
      other = _objectWithoutProperties(_ref, ["date", "calendars", "changeMonth", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "onChange", "disableFuture", "disablePast", "minDate", "maxDate", "currentlySelectingRangeEnd", "currentMonth"]);

  var utils = useUtils();
  var classes = useStyles$t();

  var minDate = __minDate || utils.date(defaultMinDate);

  var maxDate = __maxDate || utils.date(defaultMaxDate);

  var _React$useState = useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rangePreviewDay = _React$useState2[0],
      setRangePreviewDay = _React$useState2[1];

  var isNextMonthDisabled = useNextMonthDisabled(currentMonth, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = usePreviousMonthDisabled(currentMonth, {
    disablePast: disablePast,
    minDate: minDate
  });
  var previewingRange = calculateRangePreview({
    utils: utils,
    range: date,
    newDate: rangePreviewDay,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd
  });
  var handleDayChange = useCallback(function (day) {
    setRangePreviewDay(null);
    onChange(day);
  }, [onChange]);

  var handlePreviewDayChange = function handlePreviewDayChange(newPreviewRequest) {
    if (!isWithinRange(utils, newPreviewRequest, date)) {
      setRangePreviewDay(newPreviewRequest);
    } else {
      setRangePreviewDay(null);
    }
  };

  var CalendarTransitionProps = useMemo(function () {
    return {
      onMouseLeave: function onMouseLeave() {
        return setRangePreviewDay(null);
      }
    };
  }, []);
  var selectNextMonth = useCallback(function () {
    changeMonth(utils.getNextMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  var selectPreviousMonth = useCallback(function () {
    changeMonth(utils.getPreviousMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  return /*#__PURE__*/createElement("div", {
    className: classes.dateRangeContainer
  }, getCalendarsArray(calendars).map(function (_, index) {
    var monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
    return /*#__PURE__*/createElement("div", {
      key: index,
      className: classes.rangeCalendarContainer
    }, /*#__PURE__*/createElement(ArrowSwitcher, {
      className: classes.arrowSwitcher,
      onLeftClick: selectPreviousMonth,
      onRightClick: selectNextMonth,
      isLeftHidden: index !== 0,
      isRightHidden: index !== calendars - 1,
      isLeftDisabled: isPreviousMonthDisabled,
      isRightDisabled: isNextMonthDisabled,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowButtonText: leftArrowButtonText,
      leftArrowIcon: leftArrowIcon,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowButtonText: rightArrowButtonText,
      rightArrowIcon: rightArrowIcon,
      text: utils.format(monthOnIteration, 'monthAndYear')
    }), /*#__PURE__*/createElement(Calendar, _extends({}, other, {
      key: index,
      date: date,
      className: classes.calendar,
      onChange: handleDayChange,
      currentMonth: monthOnIteration,
      TransitionProps: CalendarTransitionProps,
      renderDay: function renderDay(day, _, DayProps) {
        return /*#__PURE__*/createElement(DateRangeDay, _extends({
          isPreviewing: isWithinRange(utils, day, previewingRange),
          isStartOfPreviewing: isStartOfRange(utils, day, previewingRange),
          isEndOfPreviewing: isEndOfRange(utils, day, previewingRange),
          isHighlighting: isWithinRange(utils, day, date),
          isStartOfHighlighting: isStartOfRange(utils, day, date),
          isEndOfHighlighting: isEndOfRange(utils, day, date),
          onMouseEnter: function onMouseEnter() {
            return handlePreviewDayChange(day);
          }
        }, DayProps));
      }
    })));
  }));
};

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DateRangePickerView = function DateRangePickerView(_ref) {
  var open = _ref.open,
      _ref$calendars = _ref.calendars,
      calendars = _ref$calendars === void 0 ? 2 : _ref$calendars,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      date = _ref.date,
      _ref$disableAutoMonth = _ref.disableAutoMonthSwitching,
      disableAutoMonthSwitching = _ref$disableAutoMonth === void 0 ? false : _ref$disableAutoMonth,
      disableFuture = _ref.disableFuture,
      disableHighlightToday = _ref.disableHighlightToday,
      disablePast = _ref.disablePast,
      _ref$maxDate = _ref.maxDate,
      unparsedMaxDate = _ref$maxDate === void 0 ? defaultMaxDate : _ref$maxDate,
      _ref$minDate = _ref.minDate,
      unparsedMinDate = _ref$minDate === void 0 ? defaultMinDate : _ref$minDate,
      onDateChange = _ref.onDateChange,
      onMonthChange = _ref.onMonthChange,
      _ref$reduceAnimations = _ref.reduceAnimations,
      reduceAnimations = _ref$reduceAnimations === void 0 ? defaultReduceAnimations : _ref$reduceAnimations,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      shouldDisableDate = _ref.shouldDisableDate,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      showToolbar = _ref.showToolbar,
      startText = _ref.startText,
      endText = _ref.endText,
      className = _ref.className,
      DateInputProps = _ref.DateInputProps,
      other = _objectWithoutProperties(_ref, ["open", "calendars", "currentlySelectingRangeEnd", "date", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "maxDate", "minDate", "onDateChange", "onMonthChange", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "toggleMobileKeyboardView", "isMobileKeyboardViewOpen", "showToolbar", "startText", "endText", "className", "DateInputProps"]);

  var now = useNow();
  var utils = useUtils();
  var wrapperVariant = useContext(WrapperVariantContext);
  var minDate = useParsedDate(unparsedMinDate);
  var maxDate = useParsedDate(unparsedMaxDate);

  var _date = _slicedToArray(date, 2),
      start = _date[0],
      end = _date[1];

  var _useCalendarState = useCalendarState({
    date: start || end || now,
    minDate: minDate,
    maxDate: maxDate,
    reduceAnimations: reduceAnimations,
    disablePast: disablePast,
    disableFuture: disableFuture,
    onMonthChange: onMonthChange,
    shouldDisableDate: shouldDisableDate,
    disableSwitchToMonthOnDayFocus: true
  }),
      changeMonth = _useCalendarState.changeMonth,
      calendarState = _useCalendarState.calendarState,
      isDateDisabled = _useCalendarState.isDateDisabled,
      onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd,
      changeFocusedDay = _useCalendarState.changeFocusedDay;

  var toShowToolbar = showToolbar !== null && showToolbar !== void 0 ? showToolbar : wrapperVariant !== 'desktop';

  var scrollToDayIfNeeded = function scrollToDayIfNeeded(day) {
    if (!utils.isValid(day) || isDateDisabled(day)) {
      return;
    }

    var displayingMonthRange = wrapperVariant === 'mobile' ? 0 : calendars - 1;
    var currentMonthNumber = utils.getMonth(calendarState.currentMonth);
    var requestedMonthNumber = utils.getMonth(day);

    if (!utils.isSameYear(calendarState.currentMonth, day) || requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
      var newMonth = currentlySelectingRangeEnd === 'start' ? start : // If need to focus end, scroll to the state when "end" is displaying in the last calendar
      utils.addMonths(end, -displayingMonthRange);
      changeMonth(newMonth);
    }
  };

  useEffect(function () {
    if (disableAutoMonthSwitching || !open) {
      return;
    }

    if (currentlySelectingRangeEnd === 'start' && start === null || currentlySelectingRangeEnd === 'end' && end === null) {
      return;
    }

    scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
  }, [currentlySelectingRangeEnd, date]); // eslint-disable-line

  var handleChange = useCallback(function (newDate) {
    var _calculateRangeChange = calculateRangeChange({
      newDate: newDate,
      utils: utils,
      range: date,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd
    }),
        nextSelection = _calculateRangeChange.nextSelection,
        newRange = _calculateRangeChange.newRange;

    setCurrentlySelectingRangeEnd(nextSelection);
    var isFullRangeSelected = currentlySelectingRangeEnd === 'end' && isRangeValid(utils, newRange);
    onDateChange(newRange, wrapperVariant, isFullRangeSelected ? FORCE_FINISH_PICKER : true);
  }, [currentlySelectingRangeEnd, date, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

  var renderView = function renderView() {
    var sharedCalendarProps = _objectSpread$c(_objectSpread$c({
      date: date,
      isDateDisabled: isDateDisabled,
      changeFocusedDay: changeFocusedDay,
      onChange: handleChange,
      reduceAnimations: reduceAnimations,
      disableHighlightToday: disableHighlightToday,
      onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
      changeMonth: changeMonth,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      disableFuture: disableFuture,
      disablePast: disablePast,
      minDate: minDate,
      maxDate: maxDate
    }, calendarState), other);

    switch (wrapperVariant) {
      case 'desktop':
        {
          return /*#__PURE__*/createElement(DateRangePickerViewDesktop, _extends({
            calendars: calendars
          }, sharedCalendarProps));
        }

      default:
        {
          return /*#__PURE__*/createElement(DateRangePickerViewMobile, sharedCalendarProps);
        }
    }
  };

  return /*#__PURE__*/createElement("div", {
    className: className
  }, toShowToolbar && /*#__PURE__*/createElement(DateRangePickerToolbar, {
    date: date,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd,
    setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
    startText: startText,
    endText: endText
  }), isMobileKeyboardViewOpen ? /*#__PURE__*/createElement(MobileKeyboardInputView, null, /*#__PURE__*/createElement(DateRangePickerInput, _extends({
    disableOpenPicker: true,
    ignoreInvalidInputs: true
  }, DateInputProps))) : renderView());
};
process.env.NODE_ENV !== "production" ? DateRangePickerView.propTypes = {
  disableAutoMonthSwitching: bool,
  calendars: oneOf([1, 2, 3])
} : void 0;

var DateRangeDelimiter = withDefaultProps({
  name: 'MuiPickersDateRangeDelimiter'
}, styled(Typography)({
  margin: '0 16px'
}));

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useDateRangeValidation = makeValidationHook(validateDateRange, {
  defaultValidationError: [null, null],
  isSameError: function isSameError(a, b) {
    return a[1] === b[1] && a[0] === b[0];
  }
});
function makeRangePicker(name, Wrapper) {
  var WrapperComponent = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: DateRangePickerInput,
    PureDateInputComponent: DateRangePickerInput
  });
  var rangePickerValueManager = {
    emptyValue: [null, null],
    parseInput: parseRangeInputValue,
    areValuesEqual: function areValuesEqual(utils, a, b) {
      return utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1]);
    }
  };

  function RangePickerWithStateAndWrapper(_ref) {
    var calendars = _ref.calendars,
        value = _ref.value,
        onChange = _ref.onChange,
        _ref$mask = _ref.mask,
        mask = _ref$mask === void 0 ? '__/__/____' : _ref$mask,
        _ref$startText = _ref.startText,
        startText = _ref$startText === void 0 ? 'Start' : _ref$startText,
        _ref$endText = _ref.endText,
        endText = _ref$endText === void 0 ? 'End' : _ref$endText,
        passedInputFormat = _ref.inputFormat,
        _ref$minDate = _ref.minDate,
        __minDate = _ref$minDate === void 0 ? defaultMinDate : _ref$minDate,
        _ref$maxDate = _ref.maxDate,
        __maxDate = _ref$maxDate === void 0 ? defaultMaxDate : _ref$maxDate,
        other = _objectWithoutProperties(_ref, ["calendars", "value", "onChange", "mask", "startText", "endText", "inputFormat", "minDate", "maxDate"]);

    var utils = useUtils();
    var minDate = useParsedDate(__minDate);
    var maxDate = useParsedDate(__maxDate);

    var _React$useState = useState('start'),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        currentlySelectingRangeEnd = _React$useState2[0],
        setCurrentlySelectingRangeEnd = _React$useState2[1];

    var pickerStateProps = _objectSpread$d(_objectSpread$d({}, other), {}, {
      value: value,
      onChange: onChange,
      inputFormat: passedInputFormat || utils.formats.keyboardDate
    });

    var restProps = _objectSpread$d(_objectSpread$d({}, other), {}, {
      minDate: minDate,
      maxDate: maxDate
    });

    var _usePickerState = usePickerState(pickerStateProps, rangePickerValueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps;

    var validationError = useDateRangeValidation(value, restProps);

    var DateInputProps = _objectSpread$d(_objectSpread$d(_objectSpread$d({}, inputProps), restProps), {}, {
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText,
      mask: mask,
      validationError: validationError
    });

    return /*#__PURE__*/createElement(WrapperComponent, _extends({
      wrapperProps: wrapperProps,
      DateInputProps: DateInputProps
    }, restProps), /*#__PURE__*/createElement(DateRangePickerView, _extends({
      open: wrapperProps.open,
      DateInputProps: DateInputProps,
      calendars: calendars,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText
    }, pickerProps, restProps)));
  }

  process.env.NODE_ENV !== "production" ? RangePickerWithStateAndWrapper.propTypes = {
    value: arrayOf(date).isRequired,
    onChange: func.isRequired,
    startText: node,
    endText: node
  } : void 0;
  var FinalPickerComponent = withDefaultProps({
    name: name
  }, withDateAdapterProp(RangePickerWithStateAndWrapper));
  return forwardRef(function (props, ref) {
    return /*#__PURE__*/createElement(FinalPickerComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  });
} // TODO replace with new export type syntax

var DateRangePicker = makeRangePicker('MuiPickersDateRangePicker', ResponsivePopperWrapper);
var DesktopDateRangePicker = makeRangePicker('MuiPickersDesktopDateRangePicker', DesktopPopperWrapper);
var MobileDateRangePicker = makeRangePicker('MuiPickersMobileDateRangePicker', MobileWrapper);
var StaticDateRangePicker = makeRangePicker('MuiPickersStaticDateRangePicker', StaticWrapper);

export { Calendar, CalendarView, Clock, ClockView, DatePicker, DatePickerToolbar, DateRangeDelimiter, DateRangePicker, DateRangePickerToolbar, DateTimePicker, DateTimePickerToolbar, Day, DesktopDatePicker, DesktopDateRangePicker, DesktopDateTimePicker, DesktopTimePicker, LocalizationProvider$1 as LocalizationProvider, MobileDatePicker, MobileDateRangePicker, MobileDateTimePicker, MobileTimePicker, Month, MuiPickersAdapterContext as MuiPickersContext, Picker$1 as Picker, StaticDatePicker, StaticDateRangePicker, StaticDateTimePicker, StaticTimePicker, TimePicker, TimePickerToolbar, getTextFieldAriaText$1 as getTextFieldAriaText, makeRangePicker, useDateRangeValidation, usePickerState, useUtils };
//# sourceMappingURL=material-ui-pickers.esm.js.map

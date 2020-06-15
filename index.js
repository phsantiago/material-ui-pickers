import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { createElement, memo, Fragment, useRef, useContext, useEffect, useCallback, useState, useMemo, forwardRef } from 'react';
import { instanceOf, func, string, object, node, bool, oneOf, arrayOf } from 'prop-types';
import _extends from '@babel/runtime/helpers/esm/extends';
import '@material-ui/styles/getThemeProps';
import { makeStyles, fade, styled } from '@material-ui/core/styles';
import { w as withDefaultProps } from './LocalizationProvider-f54087c1.js';
export { L as LocalizationProvider, M as MuiPickersContext } from './LocalizationProvider-f54087c1.js';
import { u as useUtils, D as DAY_MARGIN, a as useNow } from './dimensions-e4844aed.js';
export { u as useUtils } from './dimensions-e4844aed.js';
import clsx from 'clsx';
import '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '@material-ui/core/IconButton';
import '@material-ui/core/Toolbar';
import '@material-ui/core/utils';
import { P as PickerToolbar, T as ToolbarButton, A as ArrowSwitcher } from './ClockView-f3ec4839.js';
export { C as ClockView, a as TimePickerToolbar } from './ClockView-f3ec4839.js';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import '@babel/runtime/helpers/esm/typeof';
import { e as executeInTheNextEventLoopTick, m as mergeRefs, F as FORCE_FINISH_PICKER, u as usePickerState } from './usePickerState-c86d9d51.js';
export { u as usePickerState } from './usePickerState-c86d9d51.js';
import { d as defaultMinDate, a as defaultMaxDate, C as CalendarHeader, i as isWithinRange, b as isStartOfRange, c as isEndOfRange, u as useMaskedInput, e as useNextMonthDisabled, f as usePreviousMonthDisabled, g as useParsedDate, h as useCalendarState, j as isRangeValid, M as MobileKeyboardInputView, k as defaultReduceAnimations, v as validateDateRange, l as date, p as parseRangeInputValue } from './Picker-c02f4174.js';
export { m as CalendarView, n as Month, P as Picker } from './Picker-c02f4174.js';
export { a as DatePicker, D as DatePickerToolbar, b as DesktopDatePicker, M as MobileDatePicker, S as StaticDatePicker } from './DatePicker-e4ae29a4.js';
import '@material-ui/core/useMediaQuery';
import { m as makeValidationHook, a as makeWrapperComponent, w as withDateAdapterProp, R as ResponsivePopperWrapper, D as DesktopPopperWrapper, M as MobileWrapper, S as StaticWrapper } from './makePickerWithState-40b006ed.js';
import { W as WrapperVariantContext } from './Clock-02343301.js';
export { C as Clock } from './Clock-02343301.js';
import '@material-ui/core/Button';
import '@material-ui/core/DialogActions';
import '@material-ui/core/DialogContent';
import '@material-ui/core/Dialog';
import '@material-ui/core/Popover';
import '@material-ui/core/InputAdornment';
import 'rifm';
import '@material-ui/core/Grow';
import '@material-ui/core/Paper';
import '@material-ui/core/Unstable_TrapFocus';
import '@material-ui/core/Popper';
import './useKeyDown-e9a6112c.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@material-ui/core/ButtonBase';
import 'react-transition-group';
import { areDayPropsEqual, Day } from './Day.js';
export { Day } from './Day.js';
import { Calendar } from './Calendar.js';
export { Calendar } from './Calendar.js';
import '@material-ui/core/Fade';
export { D as DesktopTimePicker, M as MobileTimePicker, S as StaticTimePicker, T as TimePicker, g as getTextFieldAriaText } from './TimePicker-a3d92719.js';
import '@material-ui/core/Tab';
import '@material-ui/core/Tabs';
export { a as DateTimePicker, D as DateTimePickerToolbar, b as DesktopDateTimePicker, M as MobileDateTimePicker, S as StaticDateTimePicker } from './DateTimePicker-6e86d91b.js';

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

var muiComponentConfig = {
  name: 'MuiPickersDateRangePickerToolbarProps'
};
var useStyles = makeStyles({
  penIcon: {
    position: 'relative',
    top: 4
  },
  dateTextContainer: {
    display: 'flex'
  }
}, muiComponentConfig);
var DateRangePickerToolbar = withDefaultProps(muiComponentConfig, function (_ref) {
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
  var classes = useStyles();
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var endBorderStyle = {
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%'
};
var startBorderStyle = {
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%'
};
var useStyles$1 = makeStyles(function (theme) {
  return {
    rangeIntervalDay: {
      '&:first-child $rangeIntervalDayPreview': _objectSpread(_objectSpread({}, startBorderStyle), {}, {
        borderLeftColor: theme.palette.divider
      }),
      '&:last-child $rangeIntervalDayPreview': _objectSpread(_objectSpread({}, endBorderStyle), {}, {
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
    rangeIntervalDayHighlightStart: _objectSpread(_objectSpread({}, startBorderStyle), {}, {
      paddingLeft: 0,
      marginLeft: DAY_MARGIN / 2
    }),
    rangeIntervalDayHighlightEnd: _objectSpread(_objectSpread({}, endBorderStyle), {}, {
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
      '&$rangeIntervalDayPreviewStart': _objectSpread({
        borderLeftColor: theme.palette.divider
      }, startBorderStyle),
      '&$rangeIntervalDayPreviewEnd': _objectSpread({
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
  var classes = useStyles$1();
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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useStyles$2 = makeStyles(function (theme) {
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
  var classes = useStyles$2();
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
  var startInputProps = useMaskedInput(_objectSpread$1(_objectSpread$1({}, other), {}, {
    readOnly: readOnly,
    rawValue: start,
    onChange: handleStartChange,
    label: startText,
    validationError: startValidationError !== null,
    TextFieldProps: _objectSpread$1(_objectSpread$1({}, TextFieldProps), {}, {
      ref: startRef,
      variant: 'outlined',
      focused: open && currentlySelectingRangeEnd === 'start'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeStartSelection : undefined,
      onFocus: openOnFocus ? openRangeStartSelection : undefined
    }
  }));
  var endInputProps = useMaskedInput(_objectSpread$1(_objectSpread$1({}, other), {}, {
    readOnly: readOnly,
    label: endText,
    rawValue: end,
    onChange: handleEndChange,
    validationError: endValidationError !== null,
    TextFieldProps: _objectSpread$1(_objectSpread$1({}, TextFieldProps), {}, {
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

var useStyles$3 = makeStyles(function (theme) {
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
  var classes = useStyles$3();

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

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
    var sharedCalendarProps = _objectSpread$2(_objectSpread$2({
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

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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

    var pickerStateProps = _objectSpread$3(_objectSpread$3({}, other), {}, {
      value: value,
      onChange: onChange,
      inputFormat: passedInputFormat || utils.formats.keyboardDate
    });

    var restProps = _objectSpread$3(_objectSpread$3({}, other), {}, {
      minDate: minDate,
      maxDate: maxDate
    });

    var _usePickerState = usePickerState(pickerStateProps, rangePickerValueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps;

    var validationError = useDateRangeValidation(value, restProps);

    var DateInputProps = _objectSpread$3(_objectSpread$3(_objectSpread$3({}, inputProps), restProps), {}, {
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

export { DateRangeDelimiter, DateRangePicker, DateRangePickerToolbar, DesktopDateRangePicker, MobileDateRangePicker, StaticDateRangePicker, makeRangePicker, useDateRangeValidation };
//# sourceMappingURL=index.js.map

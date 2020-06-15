import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { createElement, Fragment, useContext, useMemo } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { w as withDefaultProps } from './LocalizationProvider-f54087c1.js';
import { u as useUtils } from './dimensions-e4844aed.js';
import clsx from 'clsx';
import { createSvgIcon } from '@material-ui/core/utils';
import { P as PickerToolbar, T as ToolbarButton, b as ToolbarText } from './ClockView-f3ec4839.js';
import { s as validateDate, g as useParsedDate, t as pick12hOr24hFormat, d as defaultMinDate, a as defaultMaxDate } from './Picker-c02f4174.js';
import { m as makeValidationHook, b as makePickerWithStateAndWrapper, c as ResponsiveWrapper, d as DesktopWrapper, M as MobileWrapper, S as StaticWrapper } from './makePickerWithState-40b006ed.js';
import { W as WrapperVariantContext, v as validateTime } from './Clock-02343301.js';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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

var useStyles = makeStyles(function (theme) {
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
  var classes = useStyles();
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

var muiComponentConfig = {
  name: 'MuiPickersDateTimePickerToolbar'
};
var useStyles$1 = makeStyles({
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
}, muiComponentConfig);
var DateTimePickerToolbar = withDefaultProps(muiComponentConfig, function (_ref) {
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
  var classes = useStyles$1();
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useInterceptProps(_ref) {
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

  return _objectSpread({
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
  useInterceptProps: useInterceptProps,
  useValidation: useValidation,
  DefaultToolbarComponent: DateTimePickerToolbar
};
var DateTimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, _objectSpread({
  name: 'MuiPickersDateTimePicker'
}, dateTimePickerConfig));
var DesktopDateTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, _objectSpread({
  name: 'MuiPickersDesktopDateTimePicker'
}, dateTimePickerConfig));
var MobileDateTimePicker = makePickerWithStateAndWrapper(MobileWrapper, _objectSpread({
  name: 'MuiPickersMobileDateTimePicker'
}, dateTimePickerConfig));
var StaticDateTimePicker = makePickerWithStateAndWrapper(StaticWrapper, _objectSpread({
  name: 'MuiPickersStaticDateTimePicker'
}, dateTimePickerConfig));

export { DateTimePickerToolbar as D, MobileDateTimePicker as M, StaticDateTimePicker as S, DateTimePicker as a, DesktopDateTimePicker as b };
//# sourceMappingURL=DateTimePicker-6e86d91b.js.map

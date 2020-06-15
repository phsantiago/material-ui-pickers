import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { useMemo, createElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { w as withDefaultProps } from './LocalizationProvider-f54087c1.js';
import { u as useUtils } from './dimensions-e4844aed.js';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { P as PickerToolbar } from './ClockView-f3ec4839.js';
import { o as isYearOnlyView, q as isYearAndMonthViews, g as useParsedDate, r as getFormatByViews, s as validateDate, a as defaultMaxDate, d as defaultMinDate } from './Picker-c02f4174.js';
import { m as makeValidationHook, b as makePickerWithStateAndWrapper, c as ResponsiveWrapper, M as MobileWrapper, d as DesktopWrapper, S as StaticWrapper } from './makePickerWithState-40b006ed.js';

var muiPickersComponentConfig = {
  name: 'MuiPickersDatePickerToolbar'
};
var useStyles = makeStyles({
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
  var classes = useStyles();
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
    return _objectSpread({
      views: views,
      openTo: openTo,
      minDate: minDate,
      maxDate: maxDate,
      mask: '__/__/____',
      inputFormat: getFormatByViews(views, utils)
    }, other);
  }
};
var DatePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, _objectSpread({
  name: 'MuiPickersDatePicker'
}, datePickerConfig));
var MobileDatePicker = makePickerWithStateAndWrapper(MobileWrapper, _objectSpread({
  name: 'MuiPickersMobileDatePicker'
}, datePickerConfig));
var DesktopDatePicker = makePickerWithStateAndWrapper(DesktopWrapper, _objectSpread({
  name: 'MuiPickersDesktopDatePicker'
}, datePickerConfig));
var StaticDatePicker = makePickerWithStateAndWrapper(StaticWrapper, _objectSpread({
  name: 'MuiPickersStaticDatePicker'
}, datePickerConfig));

export { DatePickerToolbar as D, MobileDatePicker as M, StaticDatePicker as S, DatePicker as a, DesktopDatePicker as b };
//# sourceMappingURL=DatePicker-e4ae29a4.js.map

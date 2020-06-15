import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { memo, useRef, useEffect, createElement } from 'react';
import { bool } from 'prop-types';
import _extends from '@babel/runtime/helpers/esm/extends';
import '@material-ui/styles/getThemeProps';
import { makeStyles, fade } from '@material-ui/core/styles';
import { w as withDefaultProps } from './LocalizationProvider-f54087c1.js';
import { b as DAY_SIZE, D as DAY_MARGIN, u as useUtils } from './dimensions-e4844aed.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@babel/runtime/helpers/esm/typeof';
import { o as onSpaceOrEnter, F as FORCE_FINISH_PICKER } from './usePickerState-c86d9d51.js';
import ButtonBase from '@material-ui/core/ButtonBase';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var muiComponentConfig = {
  name: 'MuiPickersDay'
};
var useStyles = makeStyles(function (theme) {
  return {
    day: _objectSpread(_objectSpread({}, theme.typography.caption), {}, {
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
}, muiComponentConfig);

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
  var classes = useStyles();
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
var Day = withDefaultProps(muiComponentConfig, memo(PureDay, areDayPropsEqual));
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

export { Day, areDayPropsEqual, useStyles };
//# sourceMappingURL=Day.js.map

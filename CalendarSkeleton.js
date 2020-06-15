import '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { createElement } from 'react';
import 'prop-types';
import _extends from '@babel/runtime/helpers/esm/extends';
import '@material-ui/styles/getThemeProps';
import '@material-ui/core/styles';
import { w as withDefaultProps } from './LocalizationProvider-f54087c1.js';
import { D as DAY_MARGIN, b as DAY_SIZE } from './dimensions-e4844aed.js';
import clsx from 'clsx';
import '@material-ui/core/Typography';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@babel/runtime/helpers/esm/typeof';
import './usePickerState-c86d9d51.js';
import './useKeyDown-e9a6112c.js';
import '@material-ui/core/ButtonBase';
import 'react-transition-group';
import './Day.js';
import { useStyles as useStyles$1 } from './Calendar.js';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';

var muiComponentConfig = {
  name: 'MuiPickersCalendarSkeleton'
};
var useStyles = makeStyles({
  root: {
    alignSelf: 'start'
  },
  daySkeleton: {
    margin: "0 ".concat(DAY_MARGIN, "px")
  },
  hidden: {
    visibility: 'hidden'
  }
}, muiComponentConfig);
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
var CalendarSkeleton = withDefaultProps(muiComponentConfig, function (_ref) {
  var className = _ref.className,
      other = _objectWithoutProperties(_ref, ["className"]);

  var classes = useStyles();
  var calendarClasses = useStyles$1();
  return /*#__PURE__*/createElement("div", _extends({
    className: clsx(classes.root, className)
  }, other), monthMap.map(function (week, i) {
    return /*#__PURE__*/createElement("div", {
      key: i,
      className: calendarClasses.week
    }, week.map(function (day, i) {
      return /*#__PURE__*/createElement(Skeleton, {
        key: i,
        variant: "circle",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: clsx(classes.daySkeleton, day === 0 && classes.hidden)
      });
    }));
  }));
});

export default CalendarSkeleton;
export { CalendarSkeleton, useStyles };
//# sourceMappingURL=CalendarSkeleton.js.map

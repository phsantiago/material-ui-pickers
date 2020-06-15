import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React__default, { useMemo, createElement, useRef, useEffect, forwardRef } from 'react';
import { instanceOf, func, string, object, node, bool } from 'prop-types';
import _extends from '@babel/runtime/helpers/esm/extends';
import { makeStyles } from '@material-ui/core/styles';
import { M as MuiPickersAdapterContext, w as withDefaultProps } from './LocalizationProvider-f54087c1.js';
import { u as useUtils, c as DIALOG_WIDTH, d as DIALOG_WIDTH_WIDER, I as IS_TOUCH_DEVICE_MEDIA } from './dimensions-e4844aed.js';
import clsx from 'clsx';
import { o as onSpaceOrEnter, e as executeInTheNextEventLoopTick, u as usePickerState } from './usePickerState-c86d9d51.js';
import { x as getDisplayDate, y as getTextFieldAriaText, K as KeyboardDateInput, P as Picker, z as parsePickerInputValue } from './Picker-c02f4174.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { W as WrapperVariantContext, I as IsStaticVariantContext } from './Clock-02343301.js';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Popover from '@material-ui/core/Popover';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import TrapFocus from '@material-ui/core/Unstable_TrapFocus';
import Popper from '@material-ui/core/Popper';
import { u as useGlobalKeyDown, k as keycode } from './useKeyDown-e9a6112c.js';

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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useStyles = makeStyles({
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

  var classes = useStyles();
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

var useStyles$1 = makeStyles({
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
  var classes = useStyles$1();
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

var useStyles$2 = makeStyles(function (theme) {
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
  var classes = useStyles$2();
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

var useStyles$3 = makeStyles(function (theme) {
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
  var classes = useStyles$3();
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

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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

    var AllDateInputProps = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, inputProps), other), {}, {
      validationError: validationError
    });

    return /*#__PURE__*/createElement(PickerWrapper, _extends({
      wrapperProps: wrapperProps,
      DateInputProps: AllDateInputProps
    }, other), /*#__PURE__*/createElement(Picker, _extends({}, pickerProps, {
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

export { DesktopPopperWrapper as D, MobileWrapper as M, ResponsivePopperWrapper as R, StaticWrapper as S, makeWrapperComponent as a, makePickerWithStateAndWrapper as b, ResponsiveWrapper as c, DesktopWrapper as d, makeValidationHook as m, withDateAdapterProp as w };
//# sourceMappingURL=makePickerWithState-40b006ed.js.map

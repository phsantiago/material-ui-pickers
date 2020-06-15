import { createElement, createContext, useMemo } from 'react';
import { func, oneOfType, object, string, node } from 'prop-types';
import _extends from '@babel/runtime/helpers/esm/extends';
import getThemeProps from '@material-ui/styles/getThemeProps';
import { useTheme } from '@material-ui/core/styles';

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

export { LocalizationProvider$1 as L, MuiPickersAdapterContext as M, LocalizationProvider as a, withDefaultProps as w };
//# sourceMappingURL=LocalizationProvider-f54087c1.js.map

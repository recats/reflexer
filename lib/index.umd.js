(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'styled-components'], factory) :
  (factory((global.reflexer = {}),global.styled));
}(this, (function (exports,styled) { 'use strict';

  var styled__default = 'default' in styled ? styled['default'] : styled;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n      @media ", " { ", " }\n    "]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["", ""]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n        @media (min-width: ", "em) { ", " }\n      "]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n      @media ", " { ", " }\n    "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n      @media (", ": ", "", ") { ", " }\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var generateMediaQuery = (function (value, args) {
    var getObj = function getObj(data) {
      return _objectSpread({
        querie: 'min-width',
        unit: 'em'
      }, data);
    };

    var style = styled.css.apply(void 0, _toConsumableArray(args));

    if (isObject(value)) {
      var obj = getObj(value);
      return styled.css(_templateObject(), obj.querie, obj.size, obj.unit, style);
    } else if (Array.isArray(value)) {
      var query = value.map(function (e) {
        var obj = getObj(e);
        return "(".concat(obj.querie, ": ").concat(obj.size).concat(obj.unit, ")");
      });
      return styled.css(_templateObject2(), query.join(' and '), style);
    } else if (typeof value === 'number') {
      if (value > 0) {
        return styled.css(_templateObject3(), value, style);
      }

      return styled.css(_templateObject4(), style);
    } else if (typeof value === 'string') {
      return styled.css(_templateObject5(), value, style);
    }

    return style;
  });

  //      
  var flexWrap = {
    wrap: 'wrap',
    nowrap: 'nowrap',
    wrapReverse: 'wrap-reverse'
  };
  var flexDirection = {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse'
  };
  var justifyContent = {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    spaceAround: 'space-around',
    spaceBetween: 'space-between'
  };
  var alignItems = {
    stretch: 'stretch',
    baseline: 'baseline',
    center: 'center',
    flexStart: 'flex-start',
    flexEnd: 'flex-end'
  };
  var alignContent = {
    stretch: 'stretch',
    center: 'center',
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    spaceAround: 'space-around',
    spaceBetween: 'space-between'
  };
   //

  var name = "reflexer";
  var version = "2.5.0";
  var description = "React flexbox grid library";
  var main = "lib/index.js";
  var repository = "git@github.com:stk-dmitry/reflexer.git";
  var author = "Dmitry Strelkov <stkdmitry@ya.ru>";
  var license = "MIT";
  var scripts = {
  	build: "rm -rf lib && yarn build-cjs && yarn build-umd && yarn build-esm",
  	"build-cjs": "./node_modules/.bin/rollup src/index.js --config --file lib/index.js",
  	"build-umd": "./node_modules/.bin/rollup src/index.js --config --format umd --file lib/index.umd.js",
  	"build-esm": "./node_modules/.bin/rollup src/index.js --config --format esm --file lib/index.esm.js",
  	flow: "./node_modules/.bin/flow",
  	"flow:build": "bash ./flow.sh",
  	"lint:js": "./node_modules/.bin/eslint ./src --ext=js,jsx",
  	test: "yarn lint:js && yarn flow:build && yarn flow"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "yarn test"
  	}
  };
  var keywords = [
  	"flexbox",
  	"grid",
  	"react",
  	"styled-components",
  	"react-component"
  ];
  var devDependencies = {
  	"@babel/core": "^7.1.6",
  	"@babel/preset-env": "^7.1.6",
  	"babel-eslint": "^10.0.1",
  	eslint: "^5.9.0",
  	"eslint-config-airbnb": "^17.1.0",
  	"eslint-plugin-flowtype": "^3.2.0",
  	"eslint-plugin-import": "^2.14.0",
  	"eslint-plugin-jsx-a11y": "^6.1.2",
  	"eslint-plugin-react": "^7.11.1",
  	"flow-bin": "^0.86.0",
  	"flow-typed": "^2.5.1",
  	husky: "^1.2.0",
  	rollup: "^0.67.3",
  	"rollup-plugin-babel": "^4.0.3",
  	"rollup-plugin-flow": "^1.1.1",
  	"rollup-plugin-json": "^3.1.0",
  	"rollup-plugin-node-resolve": "^3.4.0"
  };
  var peerDependencies = {
  	"styled-components": ">= 4"
  };
  var pck = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	repository: repository,
  	author: author,
  	license: license,
  	scripts: scripts,
  	husky: husky,
  	keywords: keywords,
  	devDependencies: devDependencies,
  	peerDependencies: peerDependencies
  };

  function _templateObject4$1() {
    var data = _taggedTemplateLiteral(["\n      ", ": ", ";\n    "]);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["\n        ", ": ", ";\n      "]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n      flex-basis: ", ";\n      max-width: ", ";\n    "]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n        flex-grow: 1;\n        flex-basis: 0;\n        max-width: 100%;\n      "]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var lib = "@@".concat(pck.name, " - ").concat(pck.version);
  var theme = {
    reflexer: {
      gridFluid: '2rem',
      rowGutter: '-0.5rem',
      colGutter: '0.5rem',
      column: 12,
      size: {
        xl: 75,
        lg: 64,
        md: 48,
        sm: 30,
        xs: 0
      }
    }
  };
  var isObject = function isObject(object) {
    return _typeof(object) === 'object' && object.constructor === Object;
  };
  var propsChecker = function propsChecker(props, entity) {
    var newProps = _objectSpread({}, props, {
      theme: _objectSpread({}, props.theme, {
        reflexer: _objectSpread({}, theme.reflexer, props.theme.reflexer)
      })
    });

    return newProps.theme.reflexer[entity];
  };

  var getMediSize = function getMediSize(props) {
    return _objectSpread({
      xs: 0
    }, propsChecker(props, 'size'));
  };

  var checkPercent = function checkPercent(props, size) {
    return "".concat(100 / (+propsChecker(props, 'column') / size), "%");
  };
  var media = function media(props, key) {
    var sizeMedia = getMediSize(props);
    var acm = Object.keys(sizeMedia).reduce(function (accumulator, label) {
      var accum = accumulator;

      accum[label] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return generateMediaQuery(sizeMedia[label], args);
      };

      return accum;
    }, {});

    if (!Object.prototype.hasOwnProperty.call(sizeMedia, key)) {
      console.error("".concat(lib, " in ").concat(JSON.stringify(sizeMedia), " no '").concat(key, "'"));
    }

    return acm[key];
  };

  var checkTypeParams = function checkTypeParams(props, params) {
    var values = {};

    if (typeof params === 'string' || typeof params === 'number') {
      values = {
        xs: params
      };
    } else if (_typeof(params) === 'object') {
      values = params;
    }

    return values;
  };

  var checkWidth = function checkWidth(props, params) {
    var object = checkTypeParams(props, params);
    var countColumn = +propsChecker(props, 'column');
    return Object.keys(object).map(function (key) {
      if (object[key] === 'auto') {
        return media(props, key)(_templateObject$1());
      }

      if (typeof object[key] === 'string') {
        console.warn("".concat(lib, " value must be a number"), object[key]);
      }

      var $size = object[key] <= countColumn ? object[key] : countColumn;

      if (object[key] > countColumn) {
        console.warn("".concat(lib, " The ->").concat(key, "<- must be <= ").concat(countColumn, " for the <Col /> component"));
      }

      if (key !== undefined && key === 'xs' && !object[key]) {
        console.warn("".concat(lib, " The 'xs' is not specified for the <Col /> component"));
        $size = countColumn;
      }

      var percent = checkPercent(props, $size);
      return media(props, key)(_templateObject2$1(), percent, percent);
    });
  };
  var mediaProperty = function mediaProperty(props, params, paramsKey, isCheckPercent) {
    var object = checkTypeParams(props, params);
    return Object.keys(object).map(function (key) {
      if (isCheckPercent) {
        return media(props, key)(_templateObject3$1(), paramsKey, isCheckPercent ? checkPercent(props, object[key]) : object[key]);
      }

      return media(props, key)(_templateObject4$1(), paramsKey, object[key]);
    });
  };

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var index = styled__default.div(_templateObject$2(), function (props) {
    return mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-left');
  }, function (props) {
    return mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-right');
  }, function (props) {
    return props.order && mediaProperty(props, props.order, 'order');
  }, function (props) {
    return props.offset && mediaProperty(props, props.offset, 'margin-left', true);
  }, function (props) {
    return props.basis && checkWidth(props, props.basis);
  });

  //      
  var defaultParams = {
    flexWrap: {
      xs: flexWrap.wrap
    },
    flexDirection: {
      xs: flexDirection.row
    },
    justifyContent: {
      xs: justifyContent.flexStart
    },
    alignItems: {
      xs: alignItems.stretch
    },
    alignContent: {
      xs: alignContent.stretch
    }
  };
  var safeMediaPropertyCheck = (function (props, valueKey, paramsKey, isCheckPecent) {
    if (Object.prototype.hasOwnProperty.call(props, valueKey)) {
      return mediaProperty(props, props[valueKey], paramsKey, isCheckPecent);
    }

    return mediaProperty(props, defaultParams[valueKey], paramsKey, isCheckPecent);
  });

  function _templateObject$3() {
    var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var index$1 = styled__default.div(_templateObject$3(), function (props) {
    return mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-left');
  }, function (props) {
    return mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-right');
  }, function (props) {
    return safeMediaPropertyCheck(props, 'flexDirection', 'flex-direction');
  }, function (props) {
    return safeMediaPropertyCheck(props, 'flexWrap', 'flex-wrap');
  }, function (props) {
    return safeMediaPropertyCheck(props, 'justifyContent', 'justify-content');
  }, function (props) {
    return safeMediaPropertyCheck(props, 'alignItems', 'align-items');
  }, function (props) {
    return safeMediaPropertyCheck(props, 'alignContent', 'align-content');
  });

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral(["\n    ", ";\n    ", ";\n  "]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$4() {
    var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  margin-right: auto;\n  ", "\n"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var index$2 = styled__default.div(_templateObject$4(), function (props) {
    return props.fluid && styled.css(_templateObject2$2(), mediaProperty(props, propsChecker(props, 'gridFluid'), 'padding-left'), mediaProperty(props, propsChecker(props, 'gridFluid'), 'padding-right'));
  });

  exports.Col = index;
  exports.Row = index$1;
  exports.Grid = index$2;
  exports.media = media;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

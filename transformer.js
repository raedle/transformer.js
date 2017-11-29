window["Transformer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The matrix class provides convenient functions for affine transformations, e.g., translate, rotate,
 * and scale. It also offers functions like matrix multiplication or creating an inverse matrix.
 * 
 * @class Matrix
 */
var Matrix =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Matrix. The matrix needs to be a two-dimensional array. The first index will
   * be rows and the second index will be columns. The array needs to be in a n x m format. For example,
   * an array [[1, 2, 3], [4, 5, 6], [7, 8 ,9]] will result in the following matrix:
   * 
   * 1   2   3
   * 4   5   6
   * 7   8   9
   * 
   * @param {any} M A two-dimensional array.
   * 
   * @memberOf Matrix
   */
  function Matrix(M) {
    _classCallCheck(this, Matrix);

    if (typeof M === 'undefined' || !Array.isArray(M)) {
      throw new Error("first parameter needs to be a two-dimensional array");
    }

    this.matrix = M;
  }
  /**
   * Sets the matrix. The matrix needs to be a two-dimensional array. The first index will be rows and
   * the second index will be columns. The array needs to be in a n x m format.
   * 
   * @memberOf Matrix
   */


  _createClass(Matrix, [{
    key: "translate",

    /**
     * Translates the matrix by tx and ty.
     * 
     * @param {Number} tx The translation value in x.
     * @param {Number} ty The translation value in y.
     * 
     * @memberOf Matrix
     */
    value: function translate(tx, ty) {
      var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var M = this.multiply(new Matrix([[1, 0, tx], [0, 1, ty], [0, 0, 1]]), truncate).matrix;
      this.matrix = M;
    }
    /**
     * Rotates the matrix by angle. The rotation value has to be in degrees.
     * 
     * @param {Number} angle The rotation value in degrees.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "rotate",
    value: function rotate(angle) {
      var truncate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var rad = angle * (Math.PI / 180);
      var costheta = Math.cos(rad);
      var sintheta = Math.sin(rad);
      var M = this.multiply(new Matrix([[costheta, -sintheta, 0], [sintheta, costheta, 0], [0, 0, 1]]), truncate).matrix;
      this.matrix = M;
    }
    /**
     * Scales the matrix by sx and sy.
     * 
     * @param {Number} sx The scale value in x.
     * @param {Number} sy The scale value in y.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "scale",
    value: function scale(sx, sy) {
      var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var M = this.multiply(new Matrix([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]), truncate).matrix;
      this.matrix = M;
    }
    /**
     * Skwes the matrix in degX and degY.
     * 
     * @param {Number} degX The skew value in x in degrees.
     * @param {Number} degY The skew value in y in degrees.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "skew",
    value: function skew(degX, degY) {
      var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var radX = degX * (Math.PI / 180);
      var radY = degY * (Math.PI / 180);
      var x = Math.tan(radX);
      var y = Math.tan(radY);
      var M = this.multiply(new Matrix([[1, x, 0], [y, 1, 0], [0, 0, 1]]), truncate).matrix;
      this.matrix = M;
    }
    /**
     * Multiplies a given matrix with this matrix and returns the result as new matrix instance. In order
     * to perform the matrix multiplication, rows of matrix M1 need to match columns of matrix M2 as well
     * as columns of matrix M1 need to match rows of matrix M2.
     * 
     * @param {any} M The matrix used to multiply with this matrix.
     * @returns The multipied matrix.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "multiply",
    value: function multiply(M) {
      var truncate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.rows !== M.columns || this.columns !== M.rows) {
        throw new Error("cannot multiply because matrix dimensions do not match (n*m !== m*n)");
      }

      var m = [];
      var m1 = this.matrix;
      var m2 = M.matrix;

      for (var i = 0; i < m1.length; i++) {
        m[i] = [];

        for (var j = 0; j < m2[0].length; j++) {
          var sum = 0;

          for (var k = 0; k < m1[0].length; k++) {
            sum += m1[i][k] * m2[k][j];
          } // m[i][j] = sum;


          m[i][j] = truncate ? parseFloat(sum.toFixed(3)) : sum;
        }
      }

      return new Matrix(m);
    }
    /**
     * Multiplies this matrix by the given matrix and replaces this matrix by the resulting matrix.
     * 
     * @param {any} The matrix used to multiply with this matrix.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "multiplyBy",
    value: function multiplyBy(M) {
      // const m = this.multiply(M).matrix;
      var m = M.multiply(this).matrix;
      this.matrix = m;
    }
    /**
     * Creates a copy of the matrix.
     * 
     * @returns The copy of this matrix.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "copy",
    value: function copy() {
      var m = this.matrix;
      var copyM = JSON.parse(JSON.stringify(m));
      return new Matrix(copyM);
    }
    /**
     * Returns the inverse matrix of this matrix.
     * 
     * http://blog.acipo.com/matrix-inversion-in-javascript/
     * 
     * @readonly
     * 
     * @memberOf Matrix
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return JSON.stringify(this.matrix);
    }
  }, {
    key: "toCss",

    /**
     * Converts the matrix to a CSS matrix transform. It respects whether the matrix should be a
     * CSS matrix() or CSS matrix3d().
     * 
     * @returns The CSS transform.
     * 
     * @memberOf Matrix
     */
    value: function toCss() {
      var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var M = this.matrix;

      var getFixedValue = function getFixedValue(row, column) {
        if (fixed) {
          return parseFloat(M[row][column].toFixed(3));
        }

        return M[row][column];
      };

      if (this.rows === 3 && this.columns === 3) {
        if (this.equals(Matrix.identity(3))) {
          return "none";
        }

        var a = getFixedValue(0, 0);
        var b = getFixedValue(1, 0);
        var c = getFixedValue(0, 1);
        var d = getFixedValue(1, 1);
        var tx = getFixedValue(0, 2);
        var ty = getFixedValue(1, 2);
        return "matrix(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ", ").concat(tx, ", ").concat(ty, ")");
      }

      if (this.equals(Matrix.identity(4))) {
        return "none";
      }

      var a1 = getFixedValue(0, 0);
      var b1 = getFixedValue(1, 0);
      var c1 = getFixedValue(2, 0);
      var d1 = getFixedValue(3, 0);
      var a2 = getFixedValue(0, 1);
      var b2 = getFixedValue(1, 1);
      var c2 = getFixedValue(2, 1);
      var d2 = getFixedValue(3, 1);
      var a3 = getFixedValue(0, 2);
      var b3 = getFixedValue(1, 2);
      var c3 = getFixedValue(2, 2);
      var d3 = getFixedValue(3, 2);
      var a4 = getFixedValue(0, 3);
      var b4 = getFixedValue(1, 3);
      var c4 = getFixedValue(2, 3);
      var d4 = getFixedValue(3, 3);
      return "matrix3d(".concat(a1, ", ").concat(b1, ", ").concat(c1, ", ").concat(d1, ", ").concat(a2, ", ").concat(b2, ", ").concat(c2, ", ").concat(d2, ", ").concat(a3, ", ").concat(b3, ", ").concat(c3, ", ").concat(d3, ", ").concat(a4, ", ").concat(b4, ", ").concat(c4, ", ").concat(d4, ")");
    }
    /**
     * Returns true if matrix M equals to this matrix.
     * 
     * @param {any} M A matrix to compare to.
     * @returns True if this matrix and matrix M are equal.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "equals",
    value: function equals(M) {
      return Matrix.equals(this, M);
    }
    /**
     * Returns true if both matrix have the same matrix values, false otherwise.
     * 
     * @static
     * @param {any} M1 Matrix 1.
     * @param {any} M2 Matrix 2.
     * @returns True if matrix M1 and M2 are equal.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "toString",

    /**
     * Returns the matrix in a human readable format. 
     * 
     * @returns The matrix in string format.
     * 
     * @memberOf Matrix
     */
    value: function toString() {
      return "Matrix [rows=".concat(this.rows, ",columns=").concat(this.columns, ",matrix=").concat(JSON.stringify(this.matrix), "]");
    }
  }, {
    key: "matrix",
    set: function set(matrix) {
      this._matrix = matrix;
      this._rows = matrix.length;
      this._columns = matrix[0].length;
    }
    /**
     * Returns the matrix as a two-dimensional array.
     * 
     * @memberOf Matrix
     */
    ,
    get: function get() {
      return this._matrix;
    }
    /**
     * Returns number of rows of matrix.
     * 
     * @readonly
     * 
     * @memberOf Matrix
     */

  }, {
    key: "rows",
    get: function get() {
      return this._rows;
    }
    /**
     * Returns number of columns of matrix.
     * 
     * @readonly
     * 
     * @memberOf Matrix
     */

  }, {
    key: "columns",
    get: function get() {
      return this._columns;
    }
  }, {
    key: "a",
    get: function get() {
      return this.matrix[0][0];
    }
  }, {
    key: "b",
    get: function get() {
      return this.matrix[1][0];
    }
  }, {
    key: "c",
    get: function get() {
      return this.matrix[0][1];
    }
  }, {
    key: "d",
    get: function get() {
      return this.matrix[1][1];
    }
  }, {
    key: "tx",
    get: function get() {
      return this.matrix[0][2];
    }
  }, {
    key: "ty",
    get: function get() {
      return this.matrix[1][2];
    }
  }, {
    key: "angle",
    get: function get() {
      var rad = Math.atan2(this.b, this.a);
      return rad * 180 / Math.PI;
    }
  }, {
    key: "scaleX",
    get: function get() {
      return this.a;
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this.d;
    }
  }, {
    key: "inverse",
    get: function get() {
      // I use Guassian Elimination to calculate the inverse:
      // (1) 'augment' the matrix (left) by the identity (on the right)
      // (2) Turn the matrix on the left into the identity by elemetry row ops
      // (3) The matrix on the right is the inverse (was the identity matrix)
      // There are 3 elemtary row ops: (I combine b and c in my code)
      // (a) Swap 2 rows
      // (b) Multiply a row by a scalar
      // (c) Add 2 rows
      var M = this.matrix; //if the matrix isn't square: exit (error)

      if (M.length !== M[0].length) {
        throw new Error("matrix is not squared");
      } //create the identity matrix (I), and a copy (C) of the original


      var i = 0,
          ii = 0,
          j = 0,
          dim = M.length,
          e = 0; // t = 0;

      var I = [],
          C = [];

      for (i = 0; i < dim; i += 1) {
        // Create the row
        I[I.length] = [];
        C[C.length] = [];

        for (j = 0; j < dim; j += 1) {
          //if we're on the diagonal, put a 1 (for identity)
          if (i == j) {
            I[i][j] = 1;
          } else {
            I[i][j] = 0;
          } // Also, make the copy of the original


          C[i][j] = M[i][j];
        }
      } // Perform elementary row operations


      for (i = 0; i < dim; i += 1) {
        // get the element e on the diagonal
        e = C[i][i]; // if we have a 0 on the diagonal (we'll need to swap with a lower row)

        if (e == 0) {
          //look through every row below the i'th row
          for (ii = i + 1; ii < dim; ii += 1) {
            //if the ii'th row has a non-0 in the i'th col
            if (C[ii][i] != 0) {
              //it would make the diagonal have a non-0 so swap it
              for (j = 0; j < dim; j++) {
                e = C[i][j]; //temp store i'th row

                C[i][j] = C[ii][j]; //replace i'th row by ii'th

                C[ii][j] = e; //repace ii'th by temp

                e = I[i][j]; //temp store i'th row

                I[i][j] = I[ii][j]; //replace i'th row by ii'th

                I[ii][j] = e; //repace ii'th by temp
              } //don't bother checking other rows since we've swapped


              break;
            }
          } //get the new diagonal


          e = C[i][i]; //if it's still 0, not invertable (error)

          if (e == 0) {
            throw new Error("matrix is not invertable");
          }
        } // Scale this row down by e (so we have a 1 on the diagonal)


        for (j = 0; j < dim; j++) {
          C[i][j] = C[i][j] / e; //apply to original matrix

          I[i][j] = I[i][j] / e; //apply to identity
        } // Subtract this row (scaled appropriately for each row) from ALL of
        // the other rows so that there will be 0's in this column in the
        // rows above and below this one


        for (ii = 0; ii < dim; ii++) {
          // Only apply to other rows (we want a 1 on the diagonal)
          if (ii == i) {
            continue;
          } // We want to change this element to 0


          e = C[ii][i]; // Subtract (the row above(or below) scaled by e) from (the
          // current row) but start at the i'th column and assume all the
          // stuff left of diagonal is 0 (which it should be if we made this
          // algorithm correctly)

          for (j = 0; j < dim; j++) {
            C[ii][j] -= e * C[i][j]; //apply to original matrix

            I[ii][j] -= e * I[i][j]; //apply to identity
          }
        }
      } //we've done all operations, C should be the identity
      //matrix I should be the inverse:


      return new Matrix(I);
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var matrix = JSON.parse(json);
      return new Matrix(matrix);
    }
  }, {
    key: "equals",
    value: function equals(M1, M2) {
      return JSON.stringify(M1.matrix) === JSON.stringify(M2.matrix);
    }
    /**
     * Creates an n x n identity matrix.
     * 
     * @static
     * @param {any} n The number of rows and columns to create this n x n identity matrix.
     * @returns The identity matrix.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "identity",
    value: function identity(n) {
      var m = [];

      for (var row = 0; row < n; row++) {
        var mRow = m[row] = [];

        for (var col = 0; col < n; col++) {
          mRow[col] = col === row ? 1 : 0;
        }
      }

      return new Matrix(m);
    }
    /**
     * Creates a matrix from a DOM element (e.g., a HTMLElement or a SVGElement).
     * 
     * @static
     * @param {any} element A DOM element from which the matrix is created from.
     * @returns The matrix.
     * 
     * @memberOf Matrix
     */

  }, {
    key: "from",
    value: function from(element) {
      var rawTransform = "none";

      if (element instanceof SVGElement) {
        rawTransform = element.getAttribute("transform"); // SAFARI does not return a proper transform with window.getComputedStyle for SVGElement.
        // TODO This is a nasty workaround.

        if (!rawTransform || rawTransform === "") {
          rawTransform = element.style.transform;
        }
      } else if (element.nodeType === 1) {
        rawTransform = window.getComputedStyle(element).transform;
      }

      if (rawTransform === "" || rawTransform === "none") {
        return Matrix.identity(3);
      } else {
        var regEx = /([-+]?[\d\.]+)/g; // console.log('rawTransform %o', rawTransform);

        if (rawTransform.indexOf("matrix3d") > -1) {
          // throw new Error(`matrix3d transformation not yet supported`);
          // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
          var a1 = parseFloat(regEx.exec(rawTransform)[0]);
          var b1 = parseFloat(regEx.exec(rawTransform)[0]);
          var c1 = parseFloat(regEx.exec(rawTransform)[0]);
          var d1 = parseFloat(regEx.exec(rawTransform)[0]);
          var a2 = parseFloat(regEx.exec(rawTransform)[0]);
          var b2 = parseFloat(regEx.exec(rawTransform)[0]);
          var c2 = parseFloat(regEx.exec(rawTransform)[0]);
          var d2 = parseFloat(regEx.exec(rawTransform)[0]);
          var a3 = parseFloat(regEx.exec(rawTransform)[0]);
          var b3 = parseFloat(regEx.exec(rawTransform)[0]);
          var c3 = parseFloat(regEx.exec(rawTransform)[0]);
          var d3 = parseFloat(regEx.exec(rawTransform)[0]);
          var a4 = parseFloat(regEx.exec(rawTransform)[0]);
          var b4 = parseFloat(regEx.exec(rawTransform)[0]);
          var c4 = parseFloat(regEx.exec(rawTransform)[0]);
          var d4 = parseFloat(regEx.exec(rawTransform)[0]);
          return new Matrix([[a1, a2, a3, a4], [b1, b2, b3, b4], [c1, c2, c3, c4], [d1, d2, d3, d4]]);
        } else {
          // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
          var a = parseFloat(regEx.exec(rawTransform)[0]);
          var b = parseFloat(regEx.exec(rawTransform)[0]);
          var c = parseFloat(regEx.exec(rawTransform)[0]);
          var d = parseFloat(regEx.exec(rawTransform)[0]);
          var tx = parseFloat(regEx.exec(rawTransform)[0]);
          var ty = parseFloat(regEx.exec(rawTransform)[0]);
          return new Matrix([[a, c, tx], [b, d, ty], [0, 0, 1]]);
        }
      }
    }
  }]);

  return Matrix;
}();

exports.default = Matrix;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A simple point class.
 * 
 * @class Point
 */
var Point =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Point.
   * 
   * @param {any} x The x value.
   * @param {any} y The y value.
   * 
   * @memberOf Point
   */
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }
  /**
   * Returns the string representation of the point.
   * 
   * @returns The string representation of the point.
   * 
   * @memberOf Point
   */


  _createClass(Point, [{
    key: "toString",
    value: function toString() {
      return "".concat(Point.name, " [x=").concat(this.x, ",y=").concat(this.y, "]");
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _point = _interopRequireDefault(__webpack_require__(1));

var _matrix = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The base class for a transforms.
 * 
 * @class Transform
 */
var Transform =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Transform. It will create an instance with a default identity matrix.
   * 
   * @memberOf Transform
   */
  function Transform() {
    _classCallCheck(this, Transform);

    this.matrix = _matrix.default.identity(3);
    this._centerPoint = new _point.default(0, 0);
  }

  _createClass(Transform, [{
    key: "apply",

    /**
     * Applies this transform to the matrix given as parameter.
     * 
     * @param {any} matrix The matrix to which this transform will be applied.
     * 
     * @memberOf Transform
     */
    value: function apply(matrix) {
      var centerPointMatrix = _matrix.default.identity(3);

      centerPointMatrix.translate(this._centerPoint.x, this._centerPoint.y);
      matrix.multiplyBy(centerPointMatrix.inverse);
      matrix.multiplyBy(this.matrix);
      matrix.multiplyBy(centerPointMatrix);
    }
    /**
     * Unapplies this transformation from the matrix given as paramter.
     * 
     * @param {any} matrix The matrix from which this transform will be unapplied.
     * 
     * @memberOf Transform
     */

  }, {
    key: "unapply",
    value: function unapply(matrix) {
      var centerPointMatrix = _matrix.default.identity(3);

      centerPointMatrix.translate(this._centerPoint.x, this._centerPoint.y);
      matrix.multiplyBy(centerPointMatrix.inverse); // console.log('matrix1 %o', this.matrix.toString());

      matrix.multiplyBy(this.matrix.inverse); // console.log('matrix2 %o', this.matrix.toString());

      matrix.multiplyBy(centerPointMatrix);
    }
  }, {
    key: "reset",
    value: function reset() {
      this._centerPoint.x = 0;
      this._centerPoint.y = 0;
    }
    /* jshint ignore:start */

  }, {
    key: "centerPoint",
    get: function get() {
      return this._centerPoint;
    }
  }, {
    key: "inverse",
    get: function get() {
      throw new Error("inverse not implemented for ".concat(this.constructor.name));
    }
  }], [{
    key: "from",
    value: function from(matrix) {
      throw new Error("inverse not implemented for transform");
    }
    /* jshint ignore:end */

  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _matrix = _interopRequireDefault(__webpack_require__(0));

var _transform = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The translate transform.
 * 
 * @class TranslateTransform
 * @extends {Transform}
 */
var TranslateTransform =
/*#__PURE__*/
function (_Transform) {
  _inherits(TranslateTransform, _Transform);

  /**
   * Creates an instance of TranslateTransform. It will translate a matrix by tx and ty.
   * 
   * @param {any} tx The translate value in x.
   * @param {any} ty The translate value in y.
   * 
   * @memberOf TranslateTransform
   */
  function TranslateTransform() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, TranslateTransform);

    _this = _possibleConstructorReturn(this, (TranslateTransform.__proto__ || Object.getPrototypeOf(TranslateTransform)).call(this));

    _this.set(x, y);

    return _this;
  }

  _createClass(TranslateTransform, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      this.matrix = new _matrix.default([[1, 0, x], [0, 1, y], [0, 0, 1]]);
    }
  }, {
    key: "update",
    value: function update(matrix) {
      if (!(matrix instanceof _matrix.default)) {
        throw new Error("matrix needs to be of type ".concat(_matrix.default.name));
      }

      var M = matrix; // http://math.stackexchange.com/questions/13150/extracting-rotation-scale-values-from-2d-transformation-matrix

      var tx = M.tx;
      var ty = M.ty;
      this.set(tx, ty);
    }
    /**
     * Reset translate transform.
     * 
     * @memberOf TranslateTransform
     */

  }, {
    key: "reset",
    value: function reset() {
      this.set(0, 0);

      _get(TranslateTransform.prototype.__proto__ || Object.getPrototypeOf(TranslateTransform.prototype), "reset", this).call(this);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, " [x=").concat(this.x, ",y=").concat(this.y, "]");
    }
  }, {
    key: "inverse",
    get: function get() {
      return TranslateTransform.from(this.matrix.inverse);
    }
  }], [{
    key: "from",
    value: function from(matrix) {
      var transform = new TranslateTransform();
      transform.update(matrix);
      return transform;
    }
  }]);

  return TranslateTransform;
}(_transform.default);

exports.default = TranslateTransform;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _matrix = _interopRequireDefault(__webpack_require__(0));

var _transform = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The rotate transform.
 * 
 * @class RotateTransform
 * @extends {Transform}
 */
var RotateTransform =
/*#__PURE__*/
function (_Transform) {
  _inherits(RotateTransform, _Transform);

  /**
   * Creates an instance of RotateTransform. It will rotate a matrix by an angle [in degrees].
   * 
   * @param {any} deg The rotate value in degrees.
   * 
   * @memberOf RotateTransform
   */
  function RotateTransform() {
    var _this;

    var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, RotateTransform);

    _this = _possibleConstructorReturn(this, (RotateTransform.__proto__ || Object.getPrototypeOf(RotateTransform)).call(this));

    _this.set(angle);

    return _this;
  }

  _createClass(RotateTransform, [{
    key: "set",
    value: function set(angle) {
      this.angle = angle;
      var rad = angle * (Math.PI / 180);
      var costheta = Math.cos(rad);
      var sintheta = Math.sin(rad);
      this.matrix = new _matrix.default([[costheta, -sintheta, 0], [sintheta, costheta, 0], [0, 0, 1]]);
    }
  }, {
    key: "update",
    value: function update(matrix) {
      if (!(matrix instanceof _matrix.default)) {
        throw new Error("matrix needs to be of type ".concat(_matrix.default.name));
      }

      var M = matrix; // http://math.stackexchange.com/questions/13150/extracting-rotation-scale-values-from-2d-transformation-matrix
      // const psi1 = Math.atan2(-M.b, M.a);
      // const psi2 = Math.atan2(M.c, M.d);
      // if (psi1 !== psi2) {
      //     throw new Error(`matrix error ${psi1} !== ${psi2}`);
      // }
      // const angle = (psi2 * 180) / Math.PI;

      var rad = Math.atan2(M.b, M.a);
      var angle = rad * 180 / Math.PI;
      this.set(angle);
    }
    /**
     * Reset rotate transform.
     * 
     * @memberOf RotateTransform
     */

  }, {
    key: "reset",
    value: function reset() {
      this.set(0);

      _get(RotateTransform.prototype.__proto__ || Object.getPrototypeOf(RotateTransform.prototype), "reset", this).call(this);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, " [angle=").concat(this.angle, "]");
    }
  }, {
    key: "inverse",
    get: function get() {
      return RotateTransform.from(this.matrix.inverse);
    }
  }], [{
    key: "from",
    value: function from(matrix) {
      var transform = new RotateTransform();
      transform.update(matrix);
      return transform;
    }
  }]);

  return RotateTransform;
}(_transform.default);

exports.default = RotateTransform;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _matrix = _interopRequireDefault(__webpack_require__(0));

var _transform = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The scale transform.
 * 
 * @class ScaleTransform
 * @extends {Transform}
 */
var ScaleTransform =
/*#__PURE__*/
function (_Transform) {
  _inherits(ScaleTransform, _Transform);

  /**
   * Creates an instance of ScaleTransform. It will scale a matrix by x and y.
   * 
   * @param {any} x The scale factor in x.
   * @param {any} y The scale factor in y.
   * 
   * @memberOf ScaleTransform
   */
  function ScaleTransform() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;

    _classCallCheck(this, ScaleTransform);

    _this = _possibleConstructorReturn(this, (ScaleTransform.__proto__ || Object.getPrototypeOf(ScaleTransform)).call(this));

    _this.set(x, y);

    return _this;
  }

  _createClass(ScaleTransform, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      this.matrix = new _matrix.default([[x, 0, 0], [0, y, 0], [0, 0, 1]]);
    }
  }, {
    key: "update",
    value: function update(matrix) {
      if (!(matrix instanceof _matrix.default)) {
        throw new Error("matrix needs to be of type ".concat(_matrix.default.name));
      }

      var M = matrix; // http://math.stackexchange.com/questions/13150/extracting-rotation-scale-values-from-2d-transformation-matrix
      // const sx = Math.sign(M.a) * Math.sqrt(Math.pow(M.a, 2) + Math.pow(M.b, 2));
      // const sy = Math.sign(M.d) * Math.sqrt(Math.pow(M.c, 2) + Math.pow(M.d, 2));

      var sx = Math.sqrt(Math.pow(M.a, 2) + Math.pow(M.b, 2));
      var sy = Math.sqrt(Math.pow(M.c, 2) + Math.pow(M.d, 2));
      this.set(sx, sy);
    }
    /**
     * Reset scale transform.
     * 
     * @memberOf ScaleTransform
     */

  }, {
    key: "reset",
    value: function reset() {
      this.set(1, 1);

      _get(ScaleTransform.prototype.__proto__ || Object.getPrototypeOf(ScaleTransform.prototype), "reset", this).call(this);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, " [x=").concat(this.x, ",y=").concat(this.y, "]");
    }
  }, {
    key: "inverse",
    get: function get() {
      return ScaleTransform.from(this.matrix.inverse);
    }
  }], [{
    key: "from",
    value: function from(matrix) {
      var transform = new ScaleTransform();
      transform.update(matrix);
      return transform;
    }
  }]);

  return ScaleTransform;
}(_transform.default);

exports.default = ScaleTransform;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transform = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The transform group can hold multiple transform of type TranslateTransform, RotateTransform,
 * ScaleTransform, or even another TransformGroup. When the apply function is called, it will apply all
 * added transform in the exact order in which they have been added to the transform group. The unapply
 * function will unapply all transform in the reverse order in which they have been added to the
 * transform group.
 * 
 * @class TransformGroup
 * @extends {Transform}
 */
var TransformGroup =
/*#__PURE__*/
function (_Transform) {
  _inherits(TransformGroup, _Transform);

  /**
   * Creates an instance of TransformGroup.
   * 
   * @memberOf TransformGroup
   */
  function TransformGroup() {
    var _this;

    _classCallCheck(this, TransformGroup);

    _this = _possibleConstructorReturn(this, (TransformGroup.__proto__ || Object.getPrototypeOf(TransformGroup)).call(this));
    _this.transforms = [];
    return _this;
  }
  /**
   * Add a transform (e.g., TranslateTransform, RotateTransform, or ScaleTransform) to the transform
   * group. All transforms will be applied in the order they were added to the transform group. If a
   * transform group is unapplied, it will unapply all transforms in reverse order.
   * 
   * @param {Transform} transform A transform of type Transform (e.g., TranslateTransform, RotateTransform,
   * or ScaleTransform). Eventually, a TransformGroup can also be added.
   * 
   * @throws {Error} Throws an error if transform is not of type Transform.
   * 
   * @memberOf TransformGroup
   */


  _createClass(TransformGroup, [{
    key: "add",
    value: function add(transform) {
      var inverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Check if transform is of proper type.
      if (!(transform instanceof _transform.default)) {
        throw new Error("transform needs to be of type ".concat(_transform.default.name));
      } // Add transform to transforms.


      this.transforms.push({
        inverse: inverse,
        transform: transform
      });
    }
    /**
     * Remove a transform from this transform group. The transform has to be part of the transform group,
     * otherwise an error will be thrown.
     * 
     * @param {Transform} transform
     * 
     * @throws {Error} Throws an error if transform is not of type Transform and if transform is not part
     * of transform group.
     * 
     * @memberOf TransformGroup
     */

  }, {
    key: "remove",
    value: function remove(transform) {
      // Check if transform is of proper type.
      if (!(transform instanceof _transform.default)) {
        throw new Error("transform needs to be of type ".concat(_transform.default.name));
      } // Check if transform is part of transform group.


      if (!this.transforms.contains(transform)) {
        throw new Error("transform is not part of this transform group");
      } // Remove transform from transform group.


      var idx = this.transforms.indexOf(transform);
      this.transforms.splice(idx, 1);
    }
    /**
     * Applies all transforms in the order in which they have been added to this transform group. The
     * TransformGroup#apply function is specified in Transform ({@see Transform#apply}).
     * 
     * @param {any} matrix The matrix to which transforms are applied.
     * 
     * @memberOf TransformGroup
     */

  }, {
    key: "apply",
    value: function apply(matrix) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Apply each transform to the matrix.
      this.transforms.forEach(function (_ref) {
        var transform = _ref.transform,
            inverse = _ref.inverse;

        if (type && !(transform instanceof type) && !(transform instanceof TransformGroup)) {
          return;
        } // console.log('apply inverse=%o transform=%o', inverse, transform.toString());


        inverse ? transform.unapply(matrix, type) : transform.apply(matrix, type);
      });
    }
    /**
     * Unapplies all transforms in reverse order in which they have been added to this transform group. The
     * TransformGroup#unapply function is specified in Transform ({@see Transform#unapply}).
     * 
     * @param {any} matrix The matrix from which the transforms are unapplied.
     * 
     * @memberOf TransformGroup
     */

  }, {
    key: "unapply",
    value: function unapply(matrix) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Unapply each transform from the matrix in reverse order.
      this.transforms.slice().reverse().forEach(function (_ref2) {
        var transform = _ref2.transform,
            inverse = _ref2.inverse;

        if (type && !(transform instanceof type) && !(transform instanceof TransformGroup)) {
          return;
        } // console.log('unapply inverse=%o transform=%o', inverse, transform.toString());


        inverse ? transform.apply(matrix, type) : transform.unapply(matrix, type);
      });
    }
    /**
     * Reset transform group.
     * 
     * @memberOf TransformGroup
     */

  }, {
    key: "reset",
    value: function reset() {
      this.transforms.forEach(function (_ref3) {
        var transform = _ref3.transform;
        transform.reset();
      });
    }
    /**
     * Transform group to string.
     * 
     * @returns Transform group in string representation.
     * 
     * @memberOf TransformGroup
     */

  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, " [transforms=[").concat(this.transforms.map(function (_ref4) {
        var transform = _ref4.transform,
            inverse = _ref4.inverse;
        return inverse ? transform.inverse.toString() : transform.toString();
      }).join(", "), "]]");
    }
  }]);

  return TransformGroup;
}(_transform.default);

exports.default = TransformGroup;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _point = _interopRequireDefault(__webpack_require__(1));

var _matrix = _interopRequireDefault(__webpack_require__(0));

var _translateTransform = _interopRequireDefault(__webpack_require__(3));

var _rotateTransform = _interopRequireDefault(__webpack_require__(4));

var _scaleTransform = _interopRequireDefault(__webpack_require__(5));

var _transformGroup = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The transform stack builds the base object responsible for transforming a DOM element. It takes an
 * element as constructor parameter and binds itself to this element. The transform stack allows push
 * and pop of transforms. A transform is immediately applied on the element and poping will immediately
 * unapply the transform from the element.
 * 
 * @class Transformer
 */
var Transformer =
/*#__PURE__*/
function () {
  _createClass(Transformer, null, [{
    key: "version",

    /**
     * @private
     * @const {string}
     */
    get: function get() {
      return '{{PKG_VERSION}}';
    }
  }]);

  /**
   * Creates an instance of Transformer. It takes a DOM element as contstructor parameter to which
   * this transform stack will bind itself. The transform stack will receive the elements current 
   * transform as matrix, which will be used to apply transforms.
   * 
   * @param {any} element A DOM element to which transforms will be applied. 
   * 
   * @memberOf Transformer
   */
  function Transformer(element, callback) {
    var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Transformer);

    // Element needs to be in DOM to get its clientWidth and clientHeight.
    if (!element.parentElement) {
      throw new Error("Element has no parent element. Is the element in the DOM?");
    } // Check if callback is set and if it is a function.


    if (callback && typeof callback !== "function") {
      throw new Error("callback needs to be a function");
    }

    this.element = element;
    this.element.transformer = this;
    this.callback = callback;
    this.updateInProgress = false;
    var matrix = this.getTransformMatrix();
    this._scaleTransform = _scaleTransform.default.from(matrix);
    this._rotateTransform = _rotateTransform.default.from(matrix);
    this._translateTransform = _translateTransform.default.from(matrix);
    var transformGroup = new _transformGroup.default();
    transformGroup.add(this._rotateTransform);
    transformGroup.add(this._scaleTransform);
    transformGroup.add(this._translateTransform);
    this._transforms = transformGroup;

    if (debug) {
      var visualTransformOrigin = this.element.querySelector(':scope > .transform-origin-point');

      if (!visualTransformOrigin) {
        // Create visual transform origin
        visualTransformOrigin = document.createElement("transient");
        visualTransformOrigin.setAttribute("class", "transform-origin-point"); // append debug element as first child of element

        element.insertBefore(visualTransformOrigin, element.firstElementChild);
      }
    }
  }
  /**
   * Get transform matrix from element transform.
   * 
   * @returns Element transform matrix.
   * 
   * @memberOf Transformer
   */


  _createClass(Transformer, [{
    key: "getTransformMatrix",
    value: function getTransformMatrix() {
      return _matrix.default.from(this.element);
    }
    /**
     * Refresh transfroms from element transform.
     * 
     * @memberOf Transformer
     */

  }, {
    key: "refreshTransforms",
    value: function refreshTransforms() {
      var matrix = this.getTransformMatrix();

      this._translateTransform.update(matrix);

      this._rotateTransform.update(matrix);

      this._scaleTransform.update(matrix);
    }
    /**
     * Reapplies all transforms again. This function should be used when any of the transforms in the transform
     * chain changed.
     * 
     * @memberOf TransformStack
     */

  }, {
    key: "reapplyTransforms",
    value: function reapplyTransforms() {
      var updateElementsTransform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var matrix = _matrix.default.identity(3);

      if (this.element.renderTransform) {
        this.element.renderTransform.apply(matrix);
      }

      this._transforms.apply(matrix);

      this.elementMatrix = matrix;

      if (updateElementsTransform) {
        // Update element transform.
        return this.updateElement();
      } else {
        return new Promise(function (resolve, reject) {
          resolve();
        });
      }
    }
    /**
     * Merge render transform to main transform and reset
     * render transform on success.
     * 
     * @memberOf Transformer
     */

  }, {
    key: "complete",
    value: function complete() {
      if (this.element.renderTransform) {
        this.refreshTransforms();
        this.element.renderTransform.reset();
      }
    }
    /**
     * Updates the element's transform matrix.
     * 
     * @returns A promise resolved when element updated successfully.
     * 
     * @memberOf TransformStack
     */

  }, {
    key: "updateElement",
    value: function updateElement() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.updateInProgress) {
          // reject(`update already in progress`);
          // resolve(this.elementMatrix);
          return;
        }

        window.requestAnimationFrame(function () {
          var updateElementTransform = function updateElementTransform() {
            var elementTransform = _this.elementMatrix.toCss();

            _this.setCssTransform(elementTransform);
          };

          if (_this.callback) {
            if (_this.callback.call(_this, _this.elementMatrix)) {
              updateElementTransform();
            }
          } else {
            updateElementTransform();
          }

          _this.updateInProgress = false;
          resolve(_this.elementMatrix);
        });
        _this.updateInProgress = true;
      });
    }
    /**
     * Sets the element's transform also compensating for various vendor prefixes.
     * 
     * @param {any} cssTansform The CSS transform.
     * 
     * @memberOf TransformStack
     */

  }, {
    key: "setCssTransform",
    value: function setCssTransform(cssTransform) {
      // Make sure the element is positioned absolute and its origin is at point (0, 0, 0).
      this.element.style.position = "absolute";
      this.element.style.transformOrigin = "0 0 0";

      if (this.element instanceof SVGElement) {
        cssTransform === "none" ? this.element.removeAttribute("transform") : this.element.setAttribute("transform", cssTransform);
      } else if (this.element.nodeType === 1) {
        this.element.style.webkitTransform = cssTransform;
        this.element.style.mozTransform = cssTransform;
        this.element.style.msTransform = cssTransform;
        this.element.style.oTransform = cssTransform;
        this.element.style.transform = cssTransform;
      }
    }
    /**
     * tbd.
     * 
     * @returns
     * 
     * @memberOf Transformer
     */

  }, {
    key: "getTransformHierarchy",
    value: function getTransformHierarchy() {
      var allTransformers = []; // Also collect transforms of parents.

      var parent = this.element;

      do {
        if (parent.transformer) {
          allTransformers.push({
            transformer: parent.transformer,
            renderTransform: parent.renderTransform
          });
        }
      } while ((parent = parent.parentElement) !== null); // Reverse transform order to start with root transform.


      allTransformers.reverse();
      return allTransformers;
    }
    /**
     * tbd.
     * 
     * @returns
     *
     * @memberOf Transformer
     */

  }, {
    key: "getAncesterElementWithoutTransformer",
    value: function getAncesterElementWithoutTransformer() {
      var parent = this.element;

      do {
        if (!parent.transformer) {
          return parent;
        }
      } while ((parent = parent.parentElement) !== null);

      return window.document.body;
    }
    /**
     * tbd.
     * 
     * @param {any} m
     * 
     * @memberOf Transformer
     */

  }, {
    key: "applyToLocalTransform",
    value: function applyToLocalTransform(m) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._transforms.apply(m, type);

      if (this.element.renderTransform) {
        this.element.renderTransform.apply(m, type);
      }
    }
    /**
     * tbd.
     * 
     * @param {any} m
     * 
     * @memberOf Transformer
     */

  }, {
    key: "applyToGlobalTransform",
    value: function applyToGlobalTransform(m) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var allTransformers = this.getTransformHierarchy();
      allTransformers.forEach(function (_ref) {
        var transformer = _ref.transformer,
            renderTransform = _ref.renderTransform;

        // Undo main transforms.
        if (transformer) {
          transformer._transforms.unapply(m, type);
        } // Undo render transforms.


        if (renderTransform) {
          renderTransform.unapply(m, type);
        }
      });
    }
    /**
     * tbd.
     * 
     * @param {any} m
     * 
     * @memberOf Transformer
     */

  }, {
    key: "unapplyFromGlobalTransform",
    value: function unapplyFromGlobalTransform(m) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var allTransformers = this.getTransformHierarchy();
      allTransformers.forEach(function (_ref2) {
        var transformer = _ref2.transformer,
            renderTransform = _ref2.renderTransform;

        // Apply render transforms.
        if (renderTransform) {
          renderTransform.apply(m, type);
        } // Apply main transforms.


        if (transformer) {
          transformer._transforms.apply(m, type);
        }
      });
    }
    /**
     * Converts a point from global coordinates to local coordinates.
     * 
     * @param {Point} point The point with global x- and y-coordinates.
     * @returns The point with local x- and y-coordinates.
     * 
     * @memberOf TransformStack
     */

  }, {
    key: "fromGlobalToLocal",
    value: function fromGlobalToLocal(point) {
      if (!(point instanceof _point.default)) {
        throw new Error("point needs to be of instance ".concat(_point.default.name));
      } // adjust x and y according to ancestor element offset


      var ancestor = this.getAncesterElementWithoutTransformer();

      var _ancestor$getBounding = ancestor.getBoundingClientRect(),
          left = _ancestor$getBounding.left,
          top = _ancestor$getBounding.top;

      var x = left ? point.x - left : point.x;
      var y = top ? point.y - top : point.y;

      var m = _matrix.default.identity(3);

      m.translate(x, y);
      this.applyToGlobalTransform(m);
      return new _point.default(m.tx, m.ty);
    }
    /**
     * Converts a point from local coordinates to global coordinates.
     * 
     * @param {any} point The point with local x- and y-coordinates.
     * @returns The point with global x- and y-coordinates.
     * 
     * @memberOf TransformStack
     */

  }, {
    key: "fromLocalToGlobal",
    value: function fromLocalToGlobal(point) {
      if (!(point instanceof _point.default)) {
        throw new Error("point needs to be of instance ".concat(_point.default.name));
      }

      var m = _matrix.default.identity(3);

      m.translate(point.x, point.y);
      this.unapplyFromGlobalTransform(m); // adjust x and y according to ancestor element offset

      var ancestor = this.getAncesterElementWithoutTransformer();

      var _ancestor$getBounding2 = ancestor.getBoundingClientRect(),
          left = _ancestor$getBounding2.left,
          top = _ancestor$getBounding2.top;

      var x = left ? m.tx + left : m.tx;
      var y = top ? m.ty + top : m.ty;
      return new _point.default(x, y);
    }
    /**
     * Converts a delta point from global coordinates to local coordinates.
     * 
     * @param {any} point The delta point with global x- and y-coordinates.
     * @returns The delta point with local x- and y-coordinates.
     * 
     * @memberOf TransformStack
     * 
     * @see TransformStack#fromGlobalToLocal
     */

  }, {
    key: "fromGlobalToLocalDelta",
    value: function fromGlobalToLocalDelta(deltaPoint) {
      if (!(deltaPoint instanceof _point.default)) {
        throw new Error("delta point needs to be of instance ".concat(_point.default.name));
      }

      var allTransforms = this.getTransformHierarchy();

      var m = _matrix.default.identity(3);

      m.translate(deltaPoint.x, deltaPoint.y);
      allTransforms.forEach(function (_ref3) {
        var transformer = _ref3.transformer,
            renderTransform = _ref3.renderTransform;

        // Undo main transforms.
        if (transformer) {
          transformer._transforms.unapply(m, _scaleTransform.default);

          transformer._transforms.unapply(m, _rotateTransform.default);
        }
      });
      return new _point.default(m.tx, m.ty);
    }
    /**
     * tbd.
     * 
     * @readonly
     * 
     * @memberOf Transformer
     */

  }, {
    key: "destroy",

    /**
     * tbd.
     * 
     * @memberOf Transformer
     */
    value: function destroy() {
      delete this._scaleTransform;
      delete this._rotateTransform;
      delete this._translateTransform;
      delete this._transforms;
    }
  }, {
    key: "localRotation",
    get: function get() {
      var m = _matrix.default.identity(3);

      this.applyToLocalTransform(m, _rotateTransform.default);
      return m.angle;
    }
    /**
     * tbd.
     * 
     * @readonly
     * 
     * @memberOf Transformer
     */

  }, {
    key: "globalRotation",
    get: function get() {
      var m = _matrix.default.identity(3);

      this.applyToGlobalTransform(m, _rotateTransform.default);
      return m.angle;
    }
    /**
     * tbd.
     * 
     * @readonly
     * 
     * @memberOf Transformer
     */

  }, {
    key: "localScale",
    get: function get() {
      var m = _matrix.default.identity(3);

      this.applyToLocalTransform(m, _scaleTransform.default);
      return new _point.default(m.scaleX, m.scaleY);
    }
    /**
     * tbd.
     * 
     * @readonly
     * 
     * @memberOf Transformer
     */

  }, {
    key: "globalScale",
    get: function get() {
      var m = _matrix.default.identity(3);

      this.applyToGlobalTransform(m, _scaleTransform.default);
      return new _point.default(m.scaleX, m.scaleY);
    }
    /**
     * tbd.
     * 
     * @readonly
     * 
     * @memberOf Transformer
     */

  }, {
    key: "globalScaleTest",
    get: function get() {
      var m = _matrix.default.identity(3);

      m.scale(1, 1);
      var allTransformers = []; // Also collect transforms of parents.

      var parent = this.element;

      do {
        if (parent.transformer) {
          allTransformers.push({
            transformer: parent.transformer,
            renderTransform: parent.renderTransform
          });
        }
      } while ((parent = parent.parentElement) !== null); // Apply all transforms in reverse order.


      allTransformers.reverse().forEach(function (_ref4) {
        var transformer = _ref4.transformer,
            renderTransform = _ref4.renderTransform;

        // Undo main transforms.
        if (transformer) {
          transformer._transforms.apply(m, _scaleTransform.default);
        } // Undo render transforms.


        if (renderTransform) {
          renderTransform.apply(m, _scaleTransform.default);
        }
      });
      var scaleX = m.a;
      var scaleY = m.d;
      return new _point.default(scaleX, scaleY);
    }
  }]);

  return Transformer;
}();

exports.default = Transformer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind = void 0;

var _transformer = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bind = function bind(element, callback, debug) {
  // check for Promise support
  if (!("Promise" in window)) {
    throw new Error("transformer.js requires Promise");
  }

  return new Promise(function (resolve, reject) {
    // return immediately if element already has transformer object
    if (element.transformer) {
      return resolve(element.transformer);
    } // create transformer in next tick to make sure that all styles have been applied to
    // the receiving element, e.g., wait till width and height of the element are set
    // correctly


    setTimeout(function () {
      var transformer = new _transformer.default(element, callback, debug);
      transformer.reapplyTransforms().then(function () {
        resolve(transformer);
      });
    }, 0);
  });
};

exports.bind = bind;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Point", {
  enumerable: true,
  get: function get() {
    return _point.default;
  }
});
Object.defineProperty(exports, "Matrix", {
  enumerable: true,
  get: function get() {
    return _matrix.default;
  }
});
Object.defineProperty(exports, "TranslateTransform", {
  enumerable: true,
  get: function get() {
    return _translateTransform.default;
  }
});
Object.defineProperty(exports, "RotateTransform", {
  enumerable: true,
  get: function get() {
    return _rotateTransform.default;
  }
});
Object.defineProperty(exports, "ScaleTransform", {
  enumerable: true,
  get: function get() {
    return _scaleTransform.default;
  }
});
Object.defineProperty(exports, "TransformGroup", {
  enumerable: true,
  get: function get() {
    return _transformGroup.default;
  }
});
Object.defineProperty(exports, "bind", {
  enumerable: true,
  get: function get() {
    return _bind.bind;
  }
});
Object.defineProperty(exports, "hammerize", {
  enumerable: true,
  get: function get() {
    return _hammerize.hammerize;
  }
});

var _point = _interopRequireDefault(__webpack_require__(1));

var _matrix = _interopRequireDefault(__webpack_require__(0));

var _translateTransform = _interopRequireDefault(__webpack_require__(3));

var _rotateTransform = _interopRequireDefault(__webpack_require__(4));

var _scaleTransform = _interopRequireDefault(__webpack_require__(5));

var _transformGroup = _interopRequireDefault(__webpack_require__(6));

var _transformer = _interopRequireDefault(__webpack_require__(7));

var _bind = __webpack_require__(8);

var _hammerize = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hammerize = void 0;

var _point = _interopRequireDefault(__webpack_require__(1));

var _translateTransform = _interopRequireDefault(__webpack_require__(3));

var _rotateTransform = _interopRequireDefault(__webpack_require__(4));

var _scaleTransform = _interopRequireDefault(__webpack_require__(5));

var _transformGroup = _interopRequireDefault(__webpack_require__(6));

var _bind = __webpack_require__(8);

var _hammerjs = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hammerize = function hammerize(obj, options) {
  var Hammer = window.Hammer;
  options = Object.assign({
    pan: true,
    rotate: true,
    pinch: true,
    callback: undefined,
    debug: false
  }, options);
  (0, _bind.bind)(obj, options.callback, options.debug).then(function (transformer) {
    // // Alternatively, the transformer API binds the transformer object to the element.
    // const transformer = obj.transformer;
    var hammerManager = new Hammer.Manager(obj); // Details on hammer.js can be found here: http://hammerjs.github.io

    hammerManager.add(new Hammer.Pan({
      threshold: 0,
      pointers: 0
    }));
    hammerManager.add(new Hammer.Rotate({
      threshold: 0
    })).recognizeWith(hammerManager.get('pan'));
    hammerManager.add(new Hammer.Pinch({
      threshold: 0
    })).recognizeWith([hammerManager.get('pan'), hammerManager.get('rotate')]); // Create custom render transform for element.
    // !!! Changing any of this code or re-order will effect rendering of element after manipulation.

    var renderTransform = new _transformGroup.default();
    var scaleTransform = obj.scaleTransform = new _scaleTransform.default();
    var rotateTransform = obj.rotateTransform = new _rotateTransform.default();
    var translateTransform = obj.translateTransform = new _translateTransform.default();
    renderTransform.add(scaleTransform);
    renderTransform.add(rotateTransform);
    renderTransform.add(translateTransform);
    obj.renderTransform = renderTransform;
    /**
     * Check if event is a valid event.
     *
     * @param {any} event
     * @returns
     */

    var isValidEvent = function isValidEvent(event) {
      var parent = event.target;

      do {
        if (parent.transformer) {
          return parent === obj;
        }
      } while ((parent = parent.parentElement) !== null);

      return false;
    }; // Consume event, so it does not get further propagated.


    var consumeEvent = function consumeEvent(event) {
      event.srcEvent.stopPropagation();
    }; // The center point, which is returned by hammer.js, is in screen coordinates. The following function
    // will transform these screen coordinates to canvas coordinates and with respect to an element's transform
    // and if necessary according to an element's transform hierarchy.


    var adjustCenterPoint = function adjustCenterPoint(point) {
      var p = new _point.default(point.x, point.y);
      return obj.transformer.fromGlobalToLocal(p);
    }; // Temporary variables.


    var prevPoint = {
      x: 0,
      y: 0
    };
    var prevScale = 1.0;
    var angleOffset = 0;
    var prevAngle = 0;
    hammerManager.on("hammer.input", function (event) {
      if (!isValidEvent(event)) return;
      consumeEvent(event);

      if (event.isFinal) {
        transformer.complete();
      }
    }); // pan handler

    hammerManager.on('panstart panmove', function (event) {
      if (!options.pan) return;

      if (event.type === "panstart") {
        prevPoint.x = 0;
        prevPoint.y = 0;
        return;
      }

      var deltaPoint = new _point.default(event.deltaX, event.deltaY);
      deltaPoint = transformer.fromGlobalToLocalDelta(deltaPoint);
      var newX = translateTransform.x - prevPoint.x + deltaPoint.x;
      var newY = translateTransform.y - prevPoint.y + deltaPoint.y;
      translateTransform.set(newX, newY);
      transformer.reapplyTransforms(); // update previous point for next panmove

      prevPoint.x = deltaPoint.x;
      prevPoint.y = deltaPoint.y;
    }); // rotate handler

    hammerManager.on("rotatestart rotatemove", function (event) {
      if (!options.rotate) return;

      if (event.type === "rotatestart") {
        angleOffset = event.rotation;
        prevAngle = 0;
        var centerPoint = adjustCenterPoint(event.center);
        rotateTransform.centerPoint.x = centerPoint.x;
        rotateTransform.centerPoint.y = centerPoint.y;
        return;
      } // correct angle offset


      event.rotation -= angleOffset;
      var deltaAngle = rotateTransform.angle - prevAngle + event.rotation;
      prevAngle = event.rotation;
      rotateTransform.set(deltaAngle);
      transformer.reapplyTransforms();
    }); // scale handler

    hammerManager.on("pinchstart pinchmove", function (event) {
      if (!options.pinch) return;

      if (event.type === "pinchstart") {
        prevScale = event.scale;
        var centerPoint = adjustCenterPoint(event.center);
        scaleTransform.centerPoint.x = centerPoint.x;
        scaleTransform.centerPoint.y = centerPoint.y;
        return;
      }

      var scaleX = scaleTransform.x / prevScale * event.scale;
      var scaleY = scaleTransform.y / prevScale * event.scale;
      prevScale = event.scale;
      scaleTransform.set(scaleX, scaleY);
      transformer.reapplyTransforms();
    });
    var mouseWheelManipulated = false; // This is a workaround to complete last transform started by a mousewheel interaction.

    obj.addEventListener("mousemove", function () {
      if (mouseWheelManipulated) {
        transformer.complete();
        mouseWheelManipulated = false;
      }
    }); // Also allow object manipulation using mousewheel interaction. Hold down the ctrl key to
    // scale an element and hold down the alt/option key to rotate an element.

    obj.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      mouseWheelManipulated = true; // Normalize wheel to +1 or -1.

      var wheel = event.wheelDelta / 120; // Manipulation factor.

      var manipulationFactor = Math.exp(wheel * 0.02); // Adjust translate transform to fit zoom point.

      var centerPoint = {
        x: event.clientX,
        y: event.clientY
      };
      centerPoint = adjustCenterPoint(centerPoint);

      if (event.ctrlKey) {
        if (!options.rotate) return;
        var deltaAngle = -(manipulationFactor - 1) * 50;
        var angle = (rotateTransform.angle - deltaAngle) % 360;
        rotateTransform.set(angle);
        rotateTransform.centerPoint.x = centerPoint.x;
        rotateTransform.centerPoint.y = centerPoint.y;
        transformer.reapplyTransforms();
        return;
      }

      if (!options.pinch) return;
      var newScale = scaleTransform.x * manipulationFactor;
      scaleTransform.set(newScale, newScale);
      scaleTransform.centerPoint.x = centerPoint.x;
      scaleTransform.centerPoint.y = centerPoint.y;
      transformer.reapplyTransforms();
    }, false);
  });
};

exports.hammerize = hammerize;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function() { module.exports = window["hammerjs"]; }());

/***/ })
/******/ ]);
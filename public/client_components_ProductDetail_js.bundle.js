"use strict";
(self["webpackChunkblack_market"] = self["webpackChunkblack_market"] || []).push([["client_components_ProductDetail_js"],{

/***/ "./client/components/ProductDetail.js":
/*!********************************************!*\
  !*** ./client/components/ProductDetail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetail": () => (/* binding */ ProductDetail),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_singleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/singleProduct */ "./client/store/singleProduct.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/cart */ "./client/store/cart.js");







const useStyles = theme => ({
  image: {
    width: "auto",
    maxHeight: 400,
    margin: theme.spacing(3)
  },
  description: {
    maxHeight: 300,
    margin: "auto",
    margin: theme.spacing(5)
  },
  price: {
    color: "#B12765",
    margin: theme.spacing(3)
  },
  buttonBox: {
    display: "flex",
    alignItems: "end",
    justifyContent: "end"
  }
});

class ProductDetail extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.setSingleProductThunk(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearProductFromProps();
  }

  handleSubmit() {
    const {
      id: productId
    } = this.props.product;
    const userId = this.props.user.id;
    const quantity = 1;
    const product = {
      productId,
      userId,
      quantity
    };
    console.log(product);
    this.props.addToCart(product);
  }

  render() {
    const {
      classes,
      product: {
        id: productId,
        name,
        description,
        price,
        stock,
        imageUrl
      }
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: imageUrl,
      alt: "product image",
      className: classes.image
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      item: true,
      xs: 12,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 6,
      md: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h4"
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 6,
      md: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "p",
      className: classes.price
    }, "$", price))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      className: classes.description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "p"
    }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: true,
      className: classes.buttonBox
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      onSubmit: evt => {
        evt.preventDefault();
        this.props.addProductToCart(this.props.product);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary"
    }, "Add to Cart"))))
    /* 
    <div className="product-detail">
      <h1> name: {name}</h1>
      <img src={imageUrl} />
      <p> description: {description}</p>
      <p> price: {price}</p>
      <p> stock: {stock}</p>
    </div>
    */
    ;
  }

}

const mapState = state => ({
  product: state.product,
  user: state.auth
});

const mapDispatch = dispatch => ({
  setSingleProductThunk: id => dispatch((0,_store_singleProduct__WEBPACK_IMPORTED_MODULE_2__.setSingleProductThunk)(id)),
  clearProductFromProps: () => dispatch((0,_store_singleProduct__WEBPACK_IMPORTED_MODULE_2__.clearSingleProduct)()),
  addProductToCart: product => dispatch((0,_store_cart__WEBPACK_IMPORTED_MODULE_3__.addToCartThunk)(product))
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapState, mapDispatch)((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(useStyles)(ProductDetail)));

/***/ })

}]);
//# sourceMappingURL=client_components_ProductDetail_js.bundle.js.map
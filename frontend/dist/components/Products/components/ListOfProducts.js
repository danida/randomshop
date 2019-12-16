"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Product_1 = require("./Product");
const productRestService = require("../../../axios/product");
class ListOfProducts extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        productRestService.getProducts();
    }
    render() {
        let className = "listOfProducts";
        return (React.createElement("div", { className: className }, this.props.products.map((product) => {
            return React.createElement(Product_1.default, Object.assign({}, { item: product }));
        })));
    }
}
exports.ListOfProducts = ListOfProducts;
ListOfProducts.defaultProps = {
    products: [{ id: 1, price: 4 }, { id: 2, price: 5 }]
};
exports.default = ListOfProducts;
//# sourceMappingURL=ListOfProducts.js.map
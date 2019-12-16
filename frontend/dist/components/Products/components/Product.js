"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Product extends React.Component {
    render() {
        let className = "product";
        return (React.createElement("div", { className: className },
            "id:",
            this.props.item.id));
    }
}
exports.default = Product;
//# sourceMappingURL=Product.js.map
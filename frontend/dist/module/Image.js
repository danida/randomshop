"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Product extends React.Component {
    render() {
        let className = "image";
        return (React.createElement("img", { className: className, src: this.props.src }));
    }
}
exports.default = Product;
//# sourceMappingURL=Image.js.map
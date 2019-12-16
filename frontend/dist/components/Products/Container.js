"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ListOfProducts_1 = require("./components/ListOfProducts");
require("../../styles/product.scss");
class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = "content";
        return (React.createElement("div", { className: className },
            React.createElement(ListOfProducts_1.default, null)));
    }
}
exports.Container = Container;
exports.default = Container;
//# sourceMappingURL=Container.js.map
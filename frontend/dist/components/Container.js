"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Products_1 = require("./Products");
const Header_1 = require("./Header");
require("../styles/base.scss");
const Image_1 = require("../module/Image");
class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Header_1.default, null),
            React.createElement(Image_1.default, Object.assign({}, { src: ".." + process.env.PUBLIC_URL + "main_page.jpg" })),
            React.createElement(Products_1.default, null)));
    }
}
exports.Container = Container;
exports.default = Container;
//# sourceMappingURL=Container.js.map
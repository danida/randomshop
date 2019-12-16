"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../../../styles/header.scss");
class Header extends React.Component {
    render() {
        let className = "header";
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "header__title" }, "Jutka Boltja"),
            React.createElement("div", { className: "header__menu" },
                React.createElement("button", { className: "header__menu__home" }, "F\u0151oldal"),
                React.createElement("button", { className: "header__menu__shop" }, "Bolt"))));
    }
}
exports.default = Header;
//# sourceMappingURL=Header.js.map
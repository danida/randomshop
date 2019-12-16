"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.getProducts = () => {
    let url = process.env.API_URL.concat('products');
    axios_1.default.get(url)
        .then(response => {
        console.log(response.data);
    })
        .catch(error => {
        console.log(error);
    });
};
//# sourceMappingURL=product.js.map
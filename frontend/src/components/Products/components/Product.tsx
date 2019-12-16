import * as React from "react"
import {ProductType} from "../types/ProductType"

export type ProductProps = {
    item:ProductType
}
 
export type ProductState = {
    
}
 
class Product extends React.Component<ProductProps, ProductState> {
    render() { 
        let className="product"

        return ( <div className={className}>id:{this.props.item.id}</div>  );
    }
}
 
export default Product;
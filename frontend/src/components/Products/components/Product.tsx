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

        return ( <div className={className}>
                <div>price:{this.props.item.price}</div>
                <div>color:{this.props.item.color}</div>
                <div>description:{this.props.item.description}</div>
            </div>  );
    }
}
 
export default Product;
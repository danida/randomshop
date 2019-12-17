import * as React from "react"
import {ProductType} from "../types/ProductType"

export type ProductProps = {
    item:ProductType,
    visible:boolean
}
 
export type ProductState = {
    
}
 
class Product extends React.Component<ProductProps, ProductState> {
    render() { 
        let className="product"
        if (this.props.visible){
            className+="--visible"
        }

        return ( <div className={className}>
                <div>price:{this.props.item.price}</div>
                <div>color:{this.props.item.color}</div>
                <div>description:{this.props.item.description}</div>
            </div>  );
    }
}
 
export default Product;
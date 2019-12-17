import * as React from "react"
import Product from "./Product"
import { ProductType, ProductsType } from "../types/ProductType"


export type ListOfProductsProps = {
    products: ProductsType

}

export type ListOfProductsState = {
}


export class ListOfProducts extends React.Component<ListOfProductsProps, ListOfProductsState> {
  
    constructor(props: ListOfProductsProps) {
        super(props)
    }

  
    public render() {
        let className = "listOfProducts"
        console.log(this.props.products)
        return (<div className={className}>{
            this.props.products.map((product: ProductType) => {
                return <Product {...{ item: product }} />
            })}
        </div>
        );
    }
}

export default ListOfProducts;
import * as React from "react"
import Product from "./Product"
import { ProductType, ProductsType } from "../types/ProductType"


export type ListOfProductsProps = {
    products: ProductsType

}

export type ListOfProductsState = {
}


export class ListOfProducts extends React.Component<ListOfProductsProps, ListOfProductsState> {
    
    public static defaultProps = {
        products: [{ id: 1, price: 4 }, { id: 2, price: 5 }]
    }
    constructor(props: ListOfProductsProps) {
        super(props)
    }

  
    public render() {
        let className = "listOfProducts"

        return (<div className={className}>{
            this.props.products.map((product: ProductType) => {
                return <Product {...{ item: product }} />
            })}
        </div>
        );
    }
}

export default ListOfProducts;
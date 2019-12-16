import * as React from "react"
import ListOfProducts from "./components/ListOfProducts"
import "../../styles/product.scss"
import  *  as productRestService from "../../axios/product"
import { ProductsType } from "./types/ProductType"



export type ContainerProps = {
}
 
export type ContainerState = {
    products:ProductsType,
}

 
export class Container extends React.Component<ContainerProps,ContainerState> {
    public static defaultState = {
        products: [{ id: 1, price: 4 }, { id: 2, price: 5 }]
    }

    constructor(props:ContainerProps){
        super(props)
    }

    componentDidMount(){
        this.setState({
            products:productRestService.getProducts()
        })
    }
    


    public render() { 
        let className = "content"
        console.log(this.state.products)
        return ( <div className={className}>
                <ListOfProducts {...{products:this.state.products}}/>
                </div>
          );
    }
}
 
export default Container;
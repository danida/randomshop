import * as React from "react"
import ListOfProducts from "./components/ListOfProducts"
import "../../styles/product.scss"
import  *  as productRestService from "../../axios/product"
import { ProductsType, ProductType } from "./types/ProductType"



export type ContainerProps = {
}
 
export type ContainerState = {
    products:ProductsType,
}

 
export class Container extends React.Component<ContainerProps,ContainerState> {

    constructor(props:ContainerProps){
        super(props)
        this.state =  {
            products: [{ id: 1, price: 4, name:"asd" }, { id: 2, price: 5,name:"asd" }]
        }
    }

      componentDidMount(){
         productRestService.getProducts().then((data)=>{this.setState({products:data})})
    }
    


    public render() { 
        let className = "content"
        let products:ProductType[] = this.state.products
       
        return ( <div className={className}>
                <ListOfProducts {...{products:products}}/>
                </div>
          );
    }
}
 
export default Container;
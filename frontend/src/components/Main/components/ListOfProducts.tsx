import * as React from "react"
import Product from "./Product"
import { ProductType, ProductsType } from "../types/ProductType"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export type ListOfProductsProps = {
    products: ProductsType

}

export type ListOfProductsState = {
    firstVisible: number,
    lastVisible: number,
}


export class ListOfProducts extends React.Component<ListOfProductsProps, ListOfProductsState> {

    constructor(props: ListOfProductsProps) {
        super(props)
        this.state = (
            {
                firstVisible: 0,
                lastVisible: 4,
            }
        )
    }

    onScrollLeft = () => {
        if (this.state.firstVisible > 0) {
            this.setState({
                firstVisible: this.state.firstVisible - 1,
                lastVisible: this.state.lastVisible - 1,

            })
        }
        console.log(this.state)

    }
    onScrollRight = () => {
        if (this.state.lastVisible <= this.props.products.length - 1) {
            this.setState({
                firstVisible: this.state.firstVisible + 1,
                lastVisible: this.state.lastVisible + 1,
            })
        }
        console.log(this.state)


    }



    public render() {
        let className = "listOfProducts"
        return (<div className={className}>
            <div className="iconWrapper" onClick={this.onScrollLeft}>
                <FontAwesomeIcon className={"fontawesomeicon"} size="2x" icon={faChevronLeft} />
            </div>{
                this.props.products.map((product: ProductType, index: number) => {
                    return <Product {...{ visible: index >= this.state.firstVisible && this.state.lastVisible > index ? true : false, item: product }} />
                })}
            <div className="iconWrapper" onClick={this.onScrollRight}>
                <FontAwesomeIcon className={"fontawesomeicon"} size="2x" icon={faChevronRight} />
            </div>
        </div>
        );
    }
}

export default ListOfProducts;
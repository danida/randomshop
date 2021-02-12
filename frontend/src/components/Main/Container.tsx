import * as React from "react"
import ListOfProducts from "./components/ListOfProducts"
import "../../styles/product.scss"
import *  as productRestService from "../../axios/product"
import { ProductsType, ProductType } from "./types/ProductType"
import Image from "../../module/Image"
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'


export type ContainerProps = {
}

export type ContainerState = {
    products: ProductsType,
}

var productsExamples = [{ id: 1, price: 400, name: "Ablakok", size: 1000, description: "strici", color: "barna" },
{ id: 2, price: 533, name: "Ajtók", size: 1400, description: "strici", color: "barna" },
{ id: 3, price: 512, name: "Orosz rakéta", size: 1400, description: "strici", color: "barna" },
{ id: 4, price: 500, name: "Redőny", size: 1400, description: "strici", color: "barna" },
{ id: 5, price: 4500, name: "Reluxa", size: 1400, description: "strici", color: "fehér" },

]



export class Container extends React.Component<ContainerProps, ContainerState> {

    constructor(props: ContainerProps) {
        super(props)
        this.state = {
            products: productsExamples
        }
    }

    public render() {
        let className = "content"
        let products: ProductType[] = this.state.products

        return (<div className={className}>
                    <ParallaxProvider>
                        <Parallax  y={['-1000px','100px']}>
                            <Image {...{ className: "image", src: ".." + process.env.PUBLIC_URL + "main_page.jpg" }}></Image>
                        </Parallax>
                        <Parallax  x={['-1000px','200px']}>
                            <div className="introductiontext">Bemutatkozó szöveg: LAci imádja az ablakokat blalblblblblblbl lb lbbl bl blbla bla bla bla bla bla bla bla bla lasdlalsda</div>
                        </Parallax>
                    </ParallaxProvider>
                    <ListOfProducts {...{ products: products }} />
            </div>
        );
    }
}

export default Container;
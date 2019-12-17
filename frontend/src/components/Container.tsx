import * as React from "react"
import  Products  from "./Products"
import Header from "./Header"
import "../styles/base.scss"
import Image from "../module/Image"


export type ContainerProps = {
}
 
export type ContainerState = {
}

 
export class Container extends React.Component<ContainerProps,ContainerState> {

    constructor(props:ContainerProps){
        super(props)
    }


    public render() { 
        return (<div>
                <Header />
                <Image {...{src:".."+process.env.PUBLIC_URL+"main_page.jpg"}}></Image>
                <Products/>
                </div> 
          );
    }
}
 
export default Container;
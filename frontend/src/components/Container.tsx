import * as React from "react"
import  Products  from "./Products"
import Header from "./Header"

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
                <Products/>
                </div> 
          );
    }
}
 
export default Container;
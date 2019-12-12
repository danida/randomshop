import * as React from "react"
import ListOfProducts from "./components/ListOfProducts"



export type ContainerProps = {
}
 
export type ContainerState = {
}

 
export class Container extends React.Component<ContainerProps,ContainerState> {

    constructor(props:ContainerProps){
        super(props)
    }


    public render() { 
        let className = "content"
        return ( <div className={className}>
                <ListOfProducts/>
                </div>
          );
    }
}
 
export default Container;
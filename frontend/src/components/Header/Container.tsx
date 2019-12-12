import * as React from "react"
import Header from "./components/Header"


export type ContainerProps = {
}

export type ContainerState = {
}


export class Container extends React.Component<ContainerProps, ContainerState> {

    constructor(props: ContainerProps) {
        super(props)
    }


    public render() {

        return (
            <Header></Header>
        );
    }
}

export default Container;
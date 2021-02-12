import * as React from "react"
import Products from "./Main"
import References from "./References"
import Header from "./Header"
import "../styles/base.scss"
import { Switch, Route, HashRouter as Router } from 'react-router-dom';


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

            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Products} />
                        <Route exact path="/references" component={References} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Container;
import * as React from "react"
import '../../../styles/header.scss'


export type HeaderProps = {
}
 
export type HeaderState = {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    render() { 
        let className="header"
        return (<div className={className}>
            <div className="header__title">
                Jutka Boltja
            </div>
            <div className="header__menu">
                <button className="header__menu__home">
                    Főoldal
                </button>    
                <button className="header__menu__shop">
                    Bolt
                </button>  
            </div>
        </div>)
    }
}
 
export default Header;
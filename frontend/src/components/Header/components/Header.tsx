import * as React from "react"
import Image from "../../../module/Image" 
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
            <Image {...{src:".."+process.env.PUBLIC_URL+"door-closed.svg"}}></Image>
                Laci Boltja
            </div>
            <div className="header__menu">
                <div className="header__menu__home">
                    Főoldal
                </div>    
                <div className="header__menu__shop">
                    Bolt
                </div>  
                <div className="header__menu__contacts">
                    Kapcsolat
                </div>  
            </div>
        </div>)
    }
}
 
export default Header;
import * as React from "react"
import Image from "../../../module/Image"
const dotenv = require('dotenv');

export type HeaderProps = {
}
 
export type HeaderState = {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    render() { 
        const env = dotenv.config().parsed;        
       // console.log(env.NODE_ENV)

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
                <Image {...{src:"main_page.jpg"}}></Image>
            </div>
            
        </div>)

    }
}
 
export default Header;
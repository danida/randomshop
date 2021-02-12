import * as React from "react"
import Image from "../../../module/Image"
import '../../../styles/header.scss'
import {
    Link
} from 'react-router-dom';

export type HeaderProps = {
}

export type HeaderState = {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        let className = "header"
        return (<div className={className}>
            <div className="header__title">
                <Image {...{ className: "icon", src: ".." + process.env.PUBLIC_URL + "door-closed.svg" }}></Image>
                Laci Boltja
            </div>
            <div className={"header__menuitems"}>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <div className="header__menuitems__home">Főoldal</div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/contact">
                        <div className="header__menuitems__contacts">Kapcsolat</div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/references">
                        <div className="header__menuitems__contacts">Referenciák</div>
                    </Link>
            </div>
        </div >)
    }
}

export default Header;
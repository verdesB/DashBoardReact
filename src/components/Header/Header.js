import './header.scss'
import { Logo } from "./Logo/Logo"
import { Nav } from "./Nav/Nav"


export const Header = () => {
    return (
        <header className="header">
            <Logo />
            
            <Nav/>
        </header>



    )

}
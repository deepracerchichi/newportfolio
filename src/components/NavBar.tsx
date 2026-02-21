import {navLinks} from "../../public/constants";


const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="logo"/>

                <ul>
                    {navLinks.map(({name, link}) => (
                        <li key={name}>
                            <a href={link}>{name}</a>
                        </li>
                    ))}
                </ul>

                <div className="nav-btn">
                    <button>Resume</button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;

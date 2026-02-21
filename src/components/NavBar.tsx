import {navLinks} from "../../public/constants";


const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a>Chinyere Ukpong</a>
                    </li>
                </ul>

                <ul className="mx-auto">
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

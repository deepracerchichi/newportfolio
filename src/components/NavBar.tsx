import {navLinks} from "../../public/constants";
import resume from "../../public/pdf/CHINYERE-UKPONG.pdf";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const NavBar = () => {
    useGSAP(()=> {
        gsap.to(".pointer", {
            opacity: 0.3,
            // yoyo: true,
            duration: 1,
            repeat: -1,
            ease: "expo"
        })
    })
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        Chinyere Ukpong
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
                    <button className="flex flex-row items-center gap-1 mx-6">
                        <div className="bg-white rounded-full size-1.5 pointer"/>
                        <a href={resume} download="CHINYERE-UKPONG" className="hover:text-white text-[13px]">
                            Resume
                        </a>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;

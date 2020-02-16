import Link from 'next/link';

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a className="nav-link">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                        <a className="nav-link">Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <a className="nav-link">Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
);}

export default Navbar;
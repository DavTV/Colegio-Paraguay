import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link href="/" > <Image className="social" src="/colegioLogo.jpeg" alt="LogoColegio"  width={50} height={50} /> </Link>
                    {/* <a class="navbar-brand" href="#"></a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/news">Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/matricula">Matrículas 2023</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Talleres</a>
                                <div className="dropdown-menu bg-secondary">
                                    <Link className="dropdown-item" href="/taller/dance">Danzas</Link>
                                    <Link className="dropdown-item" href="/taller/futbol">Futbol</Link>
                                    <Link className="dropdown-item" href="/taller/paint">Taller de pintura</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/services">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contáctanos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
     );
}
 
export default Header;
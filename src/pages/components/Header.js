import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <Link href="/" className="me-2"> <Image src="/colegioLogo.jpeg"  width={50} height={50} /> </Link>
                    {/* <a class="navbar-brand" href="#"></a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            
                            <li class="nav-item">
                                <Link className="nav-link" href="/taller/about">Nosotros</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" href="/taller/matricula">Matrículas 2023</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" href="/taller/news">Noticias</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Talleres</a>
                                <div class="dropdown-menu bg-secondary">
                                    <Link className="dropdown-item" href="/taller/dance">Danzas</Link>
                                    <Link className="dropdown-item" href="/taller/futbol">Futbol</Link>
                                    <Link className="dropdown-item" href="/taller/swimming">Natación</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
     );
}
 
export default Header;
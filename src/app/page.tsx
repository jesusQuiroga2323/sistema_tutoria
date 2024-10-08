import Image from "next/image";
import Logo from './img/Logos12Aniversario.jpg';
import a from '../app/img/263115.png';
import b from '../app/img/4697948.png';
import c from '../app/img/35.png';
import d from '../app/img/lupa.png';
import e from '../app/img/docu.png';
import f from '../app/img/docuPerfil.png';
import g from '../app/img/docuCarpeta.png';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
       <header>
        <div className="logo">
        <Image
            src={Logo}
            alt="Logo universidad"
            className="logo img"
          />
        </div>
        <nav>
            <ul>
                <li><a href="#">
                    <div className="container">
                        <Image 
                        src={a}
                        alt="a"
                         />
                        <span>Inicio</span>
                    </div>
                </a></li>
                <li><a href="#">
                    <div className="container">
                        <Image src={b} alt="b"/>
                        <span>Cierre</span>
                    </div>
                </a></li>
                <li><a href="#">
                    <div className="container">
                        <Image src={c} alt="c"/>
                        <span>Perfil</span>
                    </div>
                </a></li>
            </ul>
        </nav>
    </header>
    <main>
        <div className="BienvenidosRect">
            <h1>Bienvenidos</h1>
        </div>
        <div className="card-container">
            <Link href="/Formulario"><div className="card">
            <Image src={d} alt="d"/>
                <p>Registro de Canalización</p>
            </div></Link>
            <a href="#"><div className="card">
            <Image src={e} alt="e"/>
                <p>Programa Acción Tutoria</p>
            </div></a>
            <a href="#"><div className="card">
            <Image src={f} alt="f"/>
                <p>Registro General de Tutoría Individual</p>
            </div></a>
        </div>
        <div className="cardAb">
            <a href="#"><div className="card">
            <Image src={g} alt="g"/>
                <p>Registro de Estudiantes</p>
            </div></a>
        </div>
    </main>
    <footer>
    </footer>
    </div>
  );
}

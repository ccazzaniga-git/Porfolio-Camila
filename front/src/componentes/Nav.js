'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function Nav() {

    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    return (
        <nav>
            <ul className="holder">
                <li><Link className={isActive('/') ? 'activo' : ''} href="/"> Home </Link></li>

                <li><Link className={isActive('/nosotros') ? 'activo' : ''} href="/nosotros"> Nosotros </Link></li>

                <li><Link className={isActive('/productos') ? 'activo' : ''} href="/productos"> Productos </Link></li>

                <li><Link className={isActive('/contacto') ? 'activo' : ''} href="/contacto"> Contacto </Link></li>
            </ul>
        </nav>
    );
}


{/*import Link from "next/link";

export default function Nav () {
    
    return (
        <nav>
            <ul className= "holder">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/nosotros">Nosotros</Link></li>
                <li><Link href="/productos">Productos</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}*/}

import Link from "next/link";

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
}
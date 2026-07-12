import Image from "next/image";
import ProductoItem from "@/componentes/ProductoItem";

export const metadata = {
    title: "Portfolio Camila :: Productos",
    description: "Portfolio y trabajo final",
};

export default function Novedades() {
    return (
        <div className="">
            <section className="holder">
                <h3> Info que sale de base de datos por los precios </h3>
                < ProductoItem titulo="este es el nombre titulo de un producto" subtitulo="este es el subtitulo" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY1hG177dZZYJalrQl8tsZBSEk-TOQPMYemetti7JFw&s=10" body="<p>Esta es la descripción del producto.</p>" />
                < ProductoItem titulo="este es el nombre titulo de otro producto" subtitulo="este es el subtitulo" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY1hG177dZZYJalrQl8tsZBSEk-TOQPMYemetti7JFw&s=10" body="<p>Esta es la descripción del producto.</p>" />
                < ProductoItem titulo="este es el nombre titulo de un tercer producto" subtitulo="este es el subtitulo" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY1hG177dZZYJalrQl8tsZBSEk-TOQPMYemetti7JFw&s=10" body="<p>Esta es la descripción del producto.</p>" />
            </section>
            <footer>
                <p> Diseñador por Camila Cazzaniga &copy;2026 </p>
            </footer>
        </div >
    );
}

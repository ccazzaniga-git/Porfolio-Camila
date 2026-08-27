
import "@/styles/contacto.css";

import ContactoForm from "@/componentes/contactoForm";

export const metadata = {
    title: "Contacto",
    description: "Portfolio y trabajo final",
};

export default function Contacto() {

    return (
        <main className="holder contacto">
            <div className="columna">
                <h2> Dejame tu consulta </h2>

            <ContactoForm postUrl="http://localhost:4000/api/contacto" />
            
            </div>
            <div className="columna">
                <h2> Contame tu proyecto </h2>
                <p> Podemos trabajar en conjunto para desarrollar soluciones innovadoras que impulsen tu idea.</p>
                <ul>
                    <li> Mejorando la comunicación </li>
                    <li> Generando identidad </li>
                    <li> Creando su espacio en la web </li>
                </ul>
            </div>
        </main>
    )
};
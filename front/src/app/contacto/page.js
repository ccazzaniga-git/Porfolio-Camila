
import "@/styles/contacto.css";

import ContactoForm from "@/componentes/ContactoForm";

export const metadata = {
    title: "Contacto",
    description: "Portfolio y trabajo final",
};

export default function Contacto() {    

    return (
        <main className="holder contacto">
            <div className="columna">
                <h2>Completa el siguiente formulario</h2>
                
               <ContactoForm/>

            </div>
            <div className="columna">
                <h2>Otra manera de contactarnos</h2>
                <p>A través de los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 123456789</li>
                    <li>Email: </li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </main>
    );
}
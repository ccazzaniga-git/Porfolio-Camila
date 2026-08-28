import "@/styles/nosotros.css";
import Image from "next/image";

export const metadata = {
    title: "Portfolio Camila :: Nosotros",
    description: "Portfolio y trabajo final",
};

export default function Nosotros() {

    return (
        <section className="holder">
            <div className="historia">
                    <h2> Un poco más de mi</h2>
                    <div>
                        <p> Tengo 28 años y desde pequeña, siempre me ha apasionado el arte y la creatividad, lo que me llevó a estudiar diseño gráfico en la universidad.
                        Durante mi carrera, tuve la oportunidad de trabajar en diversos proyectos que me han permitido desarrollar mis habilidades y ampliar mi conocimiento en el campo del diseño.</p>
                    </div>
            </div>    
                
          <section className="staff">
                <h2> Camino profesional </h2>
                <div className="personas">
                    <div className="persona">
                        <div className="personainfo">
                            <h3> DISEÑADORA GRÁFICA</h3>
                            <h4>2018 / 2022</h4>
                            <p>Estudie la carrera y trabaje en proyectos pequeños</p>
                        </div>

                        <img src="/estrella.png" alt="Trabajo 1" />

                    </div>


                    <div className="persona">
                        <div className="personainfo">
                             <h3> DOCENTE </h3>
                              <h4>2020 / Actualidad </h4>
                              <p> Luego de 2 años de adscripción comencé a trabajar como docente. </p>
                        </div>

                        <img src="/cafe.png" alt="Trabajo 2" />

                    </div>

                    <div className="persona">
                        <div className="personainfo">
                            <h3> ESPECIALISTA UX</h3>
                            <h4> 2023 / 2025 </h4>
                            <p> Me especialicé en la experiencia del usuario y el diseño de productos digitales. </p>
                        </div>

                        <img src="/gato.png" alt="Trabajo 3" />
                    </div>

                    <div className="persona">
                        <div className="personainfo">
                            <h3> DESARROLLADORA FULL STACK </h3>
                            <h4> 2025 / Actualidad </h4>
                            <p> Me metí en el mundo del desarrollo web.</p>
                        </div>

                        <img src="/ke.png" alt="Trabajo 3" />
                    </div>

                </div>
            </section>
        </section>
    );


    <footer>
        <p> Diseñador por Camila Cazzaniga &copy;2026 </p>
    </footer>

}

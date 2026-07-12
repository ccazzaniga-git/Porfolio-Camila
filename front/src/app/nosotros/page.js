import Image from "next/image";

export default function Home() {
    return (
        <div className="">
            <main className="holder">
                <div className="historia">
                    <h2>Historia</h2>
                    <p>Mi nombre es Camilictucs, tengo 28 años y soy diseñadora gráfica. Desde pequeña, siempre me ha
                        apasionado el arte y la creatividad, lo que me llevó a estudiar diseño gráfico en la universidad.
                        Durante mi carrera, he tenido la oportunidad de trabajar en diversos proyectos que me han permitido
                        desarrollar mis habilidades y ampliar mi conocimiento en el campo del diseño.</p>
                </div>
                <section className="staff">
                    <h2> Perfil profesional </h2>
                    <div className="personas">
                        <div className="persona">
                            <div className="personainfo">
                                <h3>Camilictucs</h3>
                                <h4>Diseñadora Gráfica</h4>
                                <p> Un poco de mi trabajo es este que te estoy contando acá </p>
                            </div>
                            <img src="/nosotros1.jpg" alt="Trabajo 1" />
                        </div>
                        <div className="persona">
                            <div className="personainfo">
                                <h3>Juan Pérez</h3>
                                <h4>Desarrollador Web</h4>
                                <p> Un poco de mi trabajo es este que te estoy contando acá </p>
                            </div>
                            <img src="/nosotros2.jpg" alt="Trabajo 2" />
                        </div>
                        <div className="persona">
                            <div className="personainfo">
                                <h3>María Gómez</h3>
                                <h4>Especialista en Marketing Digital</h4>
                                <p> Un poco de mi trabajo es este que te estoy contando acá </p>
                            </div>
                            <img src="/nosotros3.jpg" alt="Trabajo 3" />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p> Diseñador por Camila Cazzaniga &copy;2026 </p>
            </footer>
        </div >
    );
}

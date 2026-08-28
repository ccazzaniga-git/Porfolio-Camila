import "@/styles/home.css";
import Image from "next/image";



export default function Home() {
  return (
    <div className="">
      <main className="holder">
        <div className="Homeimg">
        </div>
        <div className="columnas">
          <div className="bienvenidos">
            <h2> Me presento mejor </h2>
            <p> Soy diseñadora gráfica, docente en FAU UNNE y Desarrolladora Full Stack. Disfruto de crear identidades, experiencias y productos digitales que no solo se vean bien, sino que tengan sentido.</p>
            <p> Antes de pensar en colores, formas o pantallas, me interesa entender qué necesita cada proyecto, para quién está pensado y qué queremos comunicar.</p>
          </div>
          <div className="testimonios">
            <h2> •  •  • </h2>
            <div className="testimonio">
              <span className="cita"> Para lograr un buen diseño, es fundamental comprender las necesidades del usuario y el contexto. </span>
              <span className="autor"> invertí bien tu tiempo </span>
            </div>
          </div>
        </div>

      </main>
    </div >
  );
}

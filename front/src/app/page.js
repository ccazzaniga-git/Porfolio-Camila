import "@/styles/home.css";
import Image from "next/image";



export default function Home() {
  return (
    <div className="">
      <main className="holder">
        <div className="Homeimg">
          <img src="//estrellita.gif" alt="Homeimagen" />
        </div>
        <div className="columnas">
          <div className="bienvenidos">
            <h2> Primer Título </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque vel? Qui similique animi facilis error, aut nesciunt eveniet laudantium ad, dicta minima tempore vero voluptas, dolores sed aliquid fuga! </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque vel? Qui similique animi facilis error, aut nesciunt eveniet laudantium ad, dicta minima tempore vero voluptas, dolores sed aliquid fuga! </p>
          </div>
          <div className="testimonios">
            <h2> Segundo Título </h2>
            <div className="testimonio">
              <span className="cita"> Comentario de alquien </span>
              <span className="autor"> Persona que - comentó </span>
            </div>
          </div>
        </div>

      </main>
    </div >
  );
}

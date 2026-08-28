import "@/styles/globals.css";
import Nav from "@/componentes/Nav";


export const metadata = {
  title: "Portfolio Camila",
  description: "Portfolio y trabajo final",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="holder">
            <div className="logo">
              <img src="/logopeque.svg" alt="Logo" />
              <h1>Hola! Soy Camila</h1>
            </div>
          </div>
        </header>

        <Nav />


        {children}

        <footer>
          <p> Diseñado por Camila Cazzaniga &copy;2026 </p>
        </footer>
      </body>
    </html>
  )
}

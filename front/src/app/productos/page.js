import ProductoItem from "@/componentes/productoItem";


export const metadata = {
    title: "Productos",
    description: "Portfolio",
};

export default async function Productos() {

    const data = await fetch(
        `${process.env.API_BASE_URL}/api/productos`,
        { cache: 'no-store' });

    const productos = await data.json();

    return (
        <section className="holder">
            <h3> Productos </h3>
            {
                productos.map(item => <ProductoItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            }

        </section>

    )
};



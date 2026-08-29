import ProductoItem from "@/componentes/ProductoItem";


export const metadata = {
    title: "Productos",
    description: "Portfolio",
};

export default async function Productos() {

    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/productos`,
        { cache: 'no-store' });

    const productos = await data.json();

    return (
        <section className="holder">
            <h2> • • • </h2>
            {
                productos.map(item => <ProductoItem key={item.id}
                    title={item.titulo} imagen={item.imagen} subtitle={item.subtitulo}
                    body={item.cuerpo} />)
            }

        </section>

    )
};



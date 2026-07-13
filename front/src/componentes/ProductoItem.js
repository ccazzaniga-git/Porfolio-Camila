export default async function ProductoItem (props) {


    const {titulo, subtitulo, imagen, body} = props;

    return (
        <div className="productos">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <img src={imagen} alt={titulo} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}
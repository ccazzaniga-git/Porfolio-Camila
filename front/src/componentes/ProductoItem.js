export default async function ProductoItem (props) {


    const {title, subtitle, imagen, body} = props;

    return (
        <div className="productos">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} alt={title} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}
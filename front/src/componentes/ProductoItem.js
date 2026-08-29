export default async function ProductoItem (props) {


    const {title, subtitle, imagen, body} = props;

    return (
        <div className="productos">
            <h1>{title}</h1>
            <img src={imagen || null } alt={title} />
            <h3>{subtitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}
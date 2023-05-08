import Item from "../Item"

export default function ItemList(props) {
    return (
        <div className="row justify-content-center">
            {props.data.map((cerv) =>
                <div key={cerv.id} className="col" align="center">
                    <Item id={cerv.id} texto={cerv.nombre} src={cerv.img} stock={cerv.stock} category={cerv.category} desc={cerv.descripcion}></Item>
                </div>
            )}
        </div>
    )
}
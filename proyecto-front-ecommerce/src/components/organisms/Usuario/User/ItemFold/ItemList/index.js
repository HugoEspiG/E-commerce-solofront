import Item from "../Item"
import ItemCrearPreg from "../ItemCrearPreg"

export default function ItemList(props) {
    return (
        <div className="row row-cols-3 justify-content-center">
            {props.data.tests.map((cerv) =>
                <div key={cerv.id} className="col ItemListOrder" align="center">
                    <Item id={cerv.id} nombre={cerv.nombre} img={cerv.img} tema={cerv.tema}></Item>
                </div>
            )}
            <div className="col ItemListOrder" align='center'>
                <ItemCrearPreg></ItemCrearPreg>
            </div>
        </div>
    )
}
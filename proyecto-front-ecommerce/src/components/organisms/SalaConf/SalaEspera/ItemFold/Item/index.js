import PItem from "../../../../../atoms/PItem";


function Item(props) {
    return (
        <div>
            <PItem variant={"fs-5"} color={"light"} className={"my-2 bg-primary"}>{props.nombre}</PItem>
        </div>
    )
}

export default Item;
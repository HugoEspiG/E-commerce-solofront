import { useNavigate } from "react-router-dom";
import Button from "../../../../../atoms/button";
import PItem from "../../../../../atoms/PItem";

function Item(props) {

    const navigateFn = useNavigate();

    const loadTest = () => {
        navigateFn(`/Game/${Math.floor(Math.random() * 999999)}`)
    }

    return (
        <div>
            <div className="card">
                <img src={props.img} className="card-img itemImg" alt="" />
                <div className="card-img-overlay content">
                    <PItem variant={"fs-5"} color={"light"} className={"my-2 bg-primary"}>{props.nombre}</PItem>
                    <Button variant={"primary"} size={"md"} className={"my-4 add-shadow"} onClick={loadTest}>Test</Button>
                </div>
            </div>
        </div>
    )
}

export default Item;
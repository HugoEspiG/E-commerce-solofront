import React from 'react';
import Button from '../../../../../atoms/button';
import PItem from '../../../../../atoms/PItem';
import { useNavigate } from "react-router-dom";

const ItemCrearPreg = () => {
    const navigateFn = useNavigate();

    const createTest = () => {
        navigateFn(`/Questions`)
    }

    return (
        <div>
            <Button variant={"primary"} size={"md"} className={"my-4 add-shadow"}  onClick={createTest}>
                <PItem variant={'fs-1'} color={'light'} className={'bi bi-plus-square'}></PItem>
                <PItem variant={"fs-6"} color={"light"} className={"my-2 bg-primary"}> Craer nuevo</PItem>
            </Button>
        </div>
    );
};

export default ItemCrearPreg;
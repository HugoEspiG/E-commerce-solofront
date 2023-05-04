import React from 'react';
import { envioDatos } from '../../../../api/envioDatos';
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import Input from '../../../atoms/input';
import Button from '../../../atoms/button';
import PItem from '../../../atoms/PItem';

const Gamelog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();


    const customSubmit = (data) => {
        // async function verify() {
        //     try {
        //         const resp = await envioDatos.Login(data)
        //         const parseJson = await resp.json();
        //         console.log(parseJson)
        //         if (parseJson) {
        //             addUser(parseJson)
        //             navigateFn(`/Game/${data.Nsala}`)
        //         }
        //         else {
        //             alert("El numero de sala no existe")
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // verify();
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(customSubmit)} id='form-gamelog'>
                <Input
                    placeholder={"Codigo"}
                    type={'text'}
                    classNameDiv={"form-floating my-4"}
                    classNameInput={""}
                    {...register('Nsala', { required: true })}
                    autoComplete="off"
                    label={"Codigo"}
                >
                    {errors.Nsala && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"Nombre"}
                    type={'text'}
                    classNameDiv={"form-floating my-4"}
                    classNameInput={""}
                    {...register('nombre', { required: true })}
                    autoComplete="on"
                    label={"Nombre"}
                >
                    {errors.nombre && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
            </form>
            <Button variant={"primary"} size={"lg"} className={"my-4"} type="submit" form="form-gamelog">Empezar</Button>
            <PItem variant={"fs-5"} color={"light"} className={"my-2 "}>
                Quieres crear una sala?  <NavLink to='/login'>Logueate</NavLink>
            </PItem>
        </>
    );
};

export default Gamelog;
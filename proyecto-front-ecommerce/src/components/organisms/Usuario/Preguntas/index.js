import React from 'react';
import { envioDatos } from '../../../../api/envioDatos';
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import Input from '../../../atoms/input';
import Button from '../../../atoms/button';
import PItem from '../../../atoms/PItem';

const Preguntas = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();
    const { addUser } = useContext(UserContext)

    const customSubmit = (data) => {
        // async function verify() {
        //     try {
        //         const resp = await envioDatos.Login(data)
        //         const parseJson = await resp.json();
        //         console.log(parseJson)
        //         if (parseJson) {
        //             addUser(parseJson)
        //             navigateFn("/Home")
        //         }
        //         else {
        //             alert("Usuario o email incorrectos")
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
            <form onSubmit={handleSubmit(customSubmit)} id="form-reg-reg">
                <Input
                    placeholder={"Usuario"}
                    type={'email'}
                    classNameDiv={"form-floating my-4"}
                    classNameInput={""}
                    {...register('email', { required: true })}
                    autoComplete="on"
                    label={"email"}
                >
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"Contraseña"}
                    type={'password'}
                    classNameDiv={"form-floating my-4"}
                    classNameInput={""}
                    {...register('password', { required: true })}
                    autoComplete="off"
                    label={"Contraseña"}
                >
                    {errors.password && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
            </form>
            <Button variant={"primary"} size={"lg"} className={"my-4"} type="submit" form="form-log">Empezar</Button>
            <PItem variant={"fs-5"} color={"light"} className={"my-2 "}>
                No estas logueado?  <NavLink to='/register'>Registrate</NavLink>
            </PItem>
        </>
    );
};

export default Preguntas;
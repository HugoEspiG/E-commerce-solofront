import React from 'react';
import { envioDatos } from '../../../api/envioDatos';
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";



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
            <img src='https://raw.githubusercontent.com/HugoEspiG/E-commerce-solofront/main/Create%20a%20logo%20for%20a%20virtual%20bolirana%20game.%20The%20log.jpg' className='rounded mx-auto d-block sizeImg rounded-pill' alt=""></img>
            <form onSubmit={handleSubmit(customSubmit)}>
                <div className="col-md-6 form-floating sizing">
                    <input
                        type='text'
                        {...register('nombre', { required: true })}
                        placeholder="Nombre"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.nombre && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">Numbre</label>
                </div>
                <div className="col-md-6 form-floating sizing">
                    <input
                        type='text'
                        {...register('Nsala', { required: true })}
                        placeholder="Nsala"
                        autoComplete="off"
                        className='form-control'
                    ></input>
                    {errors.Nsala && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">Numero de sala</label>
                </div>
                <div align="col-12">
                    <button className="btn btn-dark" type="submit">Ingresar</button>
                </div>
                <p>
                    Quieres crear una sala?  <NavLink to='/login'>Logueate</NavLink>
                </p>
            </form>
        </>
    );
};

export default Gamelog;
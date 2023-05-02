import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import React from "react";

export default function Login() {

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
            <img src='https://raw.githubusercontent.com/HugoEspiG/E-commerce-solofront/main/Create%20a%20logo%20for%20a%20virtual%20bolirana%20game.%20The%20log.jpg' className='rounded mx-auto d-block sizeImg rounded-pill' alt=""></img>
            <form onSubmit={handleSubmit(customSubmit)}>
                <div className="col-md-6 form-floating sizing">
                    <input
                        type='email'
                        {...register('email', { required: true })}
                        placeholder="Usuario"
                        autoComplete="on"
                        className='form-control'
                    ></input>
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">Usuario</label>
                </div>
                <div className="col-md-6 form-floating sizing">
                    <input
                        type='password'
                        {...register('password', { required: true })}
                        placeholder="contraseña"
                        autoComplete="off"
                        className='form-control'
                    ></input>
                    {errors.password && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    <label htmlFor="floatingInputGrid">contraseña</label>
                </div>
                <div align="col-12">
                    <button className="btn btn-dark" type="submit">Loguearse</button>
                </div>
                <p>
                    No estas registrado? <NavLink to='/register'>Registrate</NavLink>
                </p>
            </form>
        </>
    )
}
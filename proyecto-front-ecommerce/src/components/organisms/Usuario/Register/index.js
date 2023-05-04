import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../../../atoms/input';
import Button from '../../../atoms/button';
import PItem from '../../../atoms/PItem';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigateFn = useNavigate();

    const customSubmit = (data) => {
        if (data.email === data.email2 && data.password==data.password2) {
            // async function datos() {
            //     try {
            //         const resp = await envioDatos.Register(data)
            //         const parseJson = await resp.json();
            //         console.log(parseJson);
            //         if (resp.ok) {
            //             alert("Registrado con exito")
            //             navigateFn('/')
            //         } else {
            //             alert("Fallo en el registro")
            //         }
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
            // datos();
            alert("Registrado")
        } else {
            alert("El email no coinciden con la confirmacion")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(customSubmit)} className='flex-row' id='form-reg'>
                <Input
                    placeholder={"Nombre"}
                    type={'text'}
                    classNameDiv={"form-floating my-4 mx-4 col-md-4"}
                    classNameInput={""}
                    {...register('nombre', { required: true })}
                    autoComplete="on"
                    label={"nombre"}
                >
                    {errors.nombre && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"Apellido"}
                    type={'text'}
                    classNameDiv={"form-floating my-4 mx-4 col-md-4"}
                    classNameInput={""}
                    {...register('apellido', { required: true })}
                    autoComplete="on"
                    label={"Apellido"}
                >
                    {errors.apellido && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"email"}
                    type={'email'}
                    classNameDiv={"form-floating my-4 mx-4 col-md-4"}
                    classNameInput={""}
                    {...register('email', { required: true })}
                    autoComplete="on"
                    label={"email"}
                >
                    {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"Confirmar email"}
                    type={'email'}
                    classNameDiv={"form-floating my-4 mx-4 col-md-4"}
                    classNameInput={""}
                    {...register('email2', { required: true })}
                    autoComplete="off"
                    label={"conormación email"}
                >
                    {errors.email2 && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"Contraseña"}
                    type={'password'}
                    classNameDiv={"form-floating my-4 mx-4 col-md-4"}
                    classNameInput={""}
                    {...register('password', { required: true })}
                    autoComplete="on"
                    label={"Contraseña"}
                >
                    {errors.password && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
                <Input
                    placeholder={"Confirmar contraseña"}
                    type={'password'}
                    classNameDiv={"form-floating my-4 mx-4 col-md-4"}
                    classNameInput={""}
                    {...register('password2', { required: true })}
                    autoComplete="off"
                    label={"Confirmación contraseña"}
                >
                    {errors.password2 && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                </Input>
            </form>
            <Button variant={"primary"} size={"lg"} className={"my-4"} type="submit" form="form-reg">Registrarse</Button>
        </>
    );
};

export default Register;
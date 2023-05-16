// import React, { useEffect, useState } from 'react';
// import { envioDatos } from '../../../../api/envioDatos';
// import { NavLink, useNavigate } from "react-router-dom";
// import { useForm, useFieldArray } from "react-hook-form"
// import { useContext } from "react";
// import { UserContext } from "../../../../context/UserContext";
// import Input from '../../../atoms/input';
// import Button from '../../../atoms/button';
// import PItem from '../../../atoms/PItem';


// const Preguntas = () => {
//     const { register, handleSubmit, formState: { errors }, control } = useForm();
//     const { fields, append } = useFieldArray({
//         control,
//         name: "respuestas",
//     });

//     const customSubmit = (data) => {
//         console.log(data);
//     };

//     const addQuestion = () => {
//         append({ respuesta: "" });
//     };



//     return (
//         <>
//             <form onSubmit={handleSubmit(customSubmit)} className='flex-row' id="form-create-q">
//                 <Input
//                     placeholder={"Pregunta"}
//                     type={'text'}
//                     classNameDiv={"form-floating my-4 col-md-8"}
//                     classNameInput={""}
//                     {...register('pregunta', { required: true })}
//                     autoComplete="off"
//                     label={"Ingrese la pregunta"}
//                 >
//                     {errors.pregunta && (
//                         <small className="text-danger fw-bold">El campo no puede estar vacío</small>
//                     )}
//                 </Input>
//                 <div className='row'>
//                     <div className='flex-row'>
//                         {fields.length > 0 ? (
//                             fields.map((pregunta, index) => (
//                                 <div key={pregunta.id} className='d-flex'>
//                                     <Input
//                                         placeholder={"Respuesta"}
//                                         type={'text'}
//                                         classNameDiv={"form-floating col-md-8 m-2"}
//                                         classNameInput={""}
//                                         {...register(`respuestas.${index}.respuesta`, { required: true })}
//                                         autoComplete="off"
//                                         label={`Añadir respuesta ${index + 1}`}
//                                     >
//                                         {errors.respuestas?.[index]?.respuesta && (
//                                             <small className="text-danger fw-bold">El campo no puede estar vacío</small>
//                                         )}
//                                     </Input>
//                                     <Input
//                                         classNameInput={"form-check-input"}
//                                         classNameDiv={'col-md-4 m-2'}
//                                         type="checkbox"
//                                         {...register(`respuestas.${index}.isChecked`)}
//                                     />
//                                 </div>
//                             ))) :
//                             (<></>)}
//                     </div>
//                     <Button
//                         variant={'secondary'}
//                         size={"lg"}
//                         className={"m-4 bi bi-plus-square add-shadow2"}
//                         onClick={addQuestion}
//                     >
//                     </Button>
//                 </div>
//             </form>
//             <Button variant={"primary"} size={"lg"} className={"my-4 add-shadow"} type="submit" form="form-create-q">
//                 Guardar
//             </Button>
//         </>
//     );
// };

// export default Preguntas;

import React, { useRef } from 'react';

const Componente = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      const { left } = sectionRef.current.getBoundingClientRect();
      window.scrollTo({ left, behavior: 'smooth' });
    }
  };

  return (
    <>
      <button onClick={scrollToSection}>Ir a la sección</button>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          width: '100%',
          scrollBehavior: 'smooth',
        }}
      >
        <div
          ref={sectionRef}
          style={{
            width: '200%',
            height: '200px',
            background: 'blue',
          }}
        ></div>
      </div>
    </>
  );
};

export default Componente;



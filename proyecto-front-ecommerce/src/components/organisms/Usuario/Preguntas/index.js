import React from 'react';
import { envioDatos } from '../../../../api/envioDatos';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import Input from '../../../atoms/input';
import Button from '../../../atoms/button';


const Preguntas = () => {
  const { register, handleSubmit, formState: { errors }, control, setValue, watch } = useForm();
  const preguntas = watch('preguntas', []); // Observa los cambios en el array de preguntas
  const { addQuest} = useContext(UserContext)
  const navigateFn = useNavigate();

  const customSubmit = (data) => {
    console.log(data);
    addQuest(data)
    navigateFn("/User")
  };

  const addAnswer = (preguntaIndex) => {
    const preguntasCopy = [...preguntas]; // Copiamos el array de preguntas
    preguntasCopy[preguntaIndex].respuestas.push({ respuesta: "" }); // Agregamos una nueva respuesta a la pregunta específica
    setValue('preguntas', preguntasCopy); // Actualizamos el valor del array de preguntas usando setValue
  };

  const addQuestion = () => {
    const newQuestion = { pregunta: "", respuestas: [] };
    setValue('preguntas', [...preguntas, newQuestion]); // Agregamos una nueva pregunta al array de preguntas
  };

  return (
    <>
      {preguntas.map((pregunta, preguntaIndex) => (
        <React.Fragment key={preguntaIndex}>
          <form onSubmit={handleSubmit(customSubmit)} className='flex-row' id={`form-create-q-${preguntaIndex}`}>
            <Input
              placeholder={"Pregunta"}
              type={'text'}
              classNameDiv={"form-floating my-4 col-md-8"}
              classNameInput={""}
              {...register(`preguntas[${preguntaIndex}].pregunta`, { required: true })}
              autoComplete="off"
              label={"Ingrese la pregunta"}
            >
              {errors.preguntas?.[preguntaIndex]?.pregunta && (
                <small className="text-danger fw-bold">El campo no puede estar vacío</small>
              )}
            </Input>
            <div className='row'>
              <div className='flex-row'>
                {pregunta.respuestas.map((respuesta, respuestaIndex) => (
                  <div key={respuestaIndex} className='d-flex'>
                    <Input
                      placeholder={"Respuesta"}
                      type={'text'}
                      classNameDiv={"form-floating col-md-8 m-2"}
                      classNameInput={""}
                      {...register(`preguntas[${preguntaIndex}].respuestas[${respuestaIndex}].respuesta`, { required: true })}
                      autoComplete="off"
                      label={`Añadir respuesta ${respuestaIndex + 1}`}
                    >
                      {errors.preguntas?.[preguntaIndex]?.respuestas?.[respuestaIndex]?.respuesta && (
                        <small className="text-danger fw-bold">El campo no puede estar vacío</small>
                      )}
                    </Input>
                    <Input
                      classNameInput={"form-check-input"}
                      classNameDiv={'col-md-4 m-2'}
                      type="checkbox"
                      {...register(`preguntas[${preguntaIndex}].respuestas[${respuestaIndex}].isChecked`)}
                    />
                  </div>
                ))}
              </div>
              <Button
                variant={'secondary'}
                size={"lg"}
                className={"m-4 bi bi-plus-square add-shadow2"}
                onClick={() => addAnswer(preguntaIndex)}
              >
              </Button>
            </div>
          </form>
        </React.Fragment>
      ))}
      <Button variant={"primary"} size={"lg"} className={"m-4 add-shadow"} onClick={addQuestion}>
        Añadir Pregunta
      </Button>
      {preguntas.length > 0 && (
        <Button variant={"primary"} size={"lg"} className={"m-4 add-shadow"} type="submit" form={`form-create-q-${preguntas.length - 1}`}>
          Guardar
        </Button>
      )}
    </>
  );
};

export default Preguntas;

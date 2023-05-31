import React, { useState } from "react";

export const UserContext = React.createContext([]);

export default function UserCustomContext({ children }) {
    const [data, setData] = useState({})
    const [sala, setSala] = useState({})

    const addUser = (info) => {
        setData(info)
    }

    const createSale = (Nsala) =>{
        setSala(Nsala)
    }

    const addQuest = (questions) => {
        const newTest = {id:data.tests.length+1,
                        nombre: `Test${data.tests.length+1}`,
                        preguntas: questions,
                        tema: "Tupu tamadre",
                        img: 'https://www.highrollertransportation.com/wp-content/uploads/2017/11/Test-button-800x800.png'
                    }
        const newData = { ...data, tests: [...data.tests,newTest] };
        setData(newData);
    };
    return (
        <UserContext.Provider value={{ userData: data, sala, createSale, addUser , addQuest}}>
            {children}
        </UserContext.Provider>
    )
}
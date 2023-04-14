import React, { useEffect, useState } from 'react';

export const ClockF = () => {

    const [state, setState] = useState({
        fecha: new Date(),
        edad:0,
        nombre: 'Miguel',
        apellido: 'Torres'
    });

    useEffect(() => {
        //ComponentDidMount: Comportamiento antes de que el componente sea añadido al DOM (renderice)
        const tick = () =>{
            setState((prevState) => {
               let edad = prevState.edad +1;
               return {
                  ...prevState,
                  fecha: new Date(),
                  edad
               }
            });
         }

         const timerID = setInterval (
            () => tick(), 1000
         );

        return () => {
            //ComponentWillUnMount: Comportamiento antes de que el componente desaparezca
            clearInterval (timerID);
        };
    }, []);
    

    return (
        <div>
            <h2>
            Hora Actual:
            {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
}

/* export default ClockF; */

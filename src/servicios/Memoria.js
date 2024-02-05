import { createContext, useReducer } from 'react';


const listaMock = [
    {
    "id":"1",
    "detalles":"Correr durante 30 min.",
    "periodo":"dia",
    "eventos":1,
    "icono":"🏃🏼",
    "meta":365,
    "plazo":"01-01-2030",
    "completado":215
},

{
    "id":"2",
    "detalles":"Hacer curso Academia X",
    "periodo":"dia",
    "eventos":1,
    "icono":"🖥️",
    "meta":30,
    "plazo":"01-01-2030",
    "completado":4
},

{
    "id":"3",
    "detalles":"Ir al GYM 5 veces por semana",
    "periodo":"dia",
    "eventos":1,
    "icono":"🏋🏼",
    "meta":5,
    "plazo":"01-01-2030",
    "completado":2
}

];


const estadoInicial ={
    orden:[],
    objetos:{}
};

function reductor(estado, accion){
    switch (accion.tipo){
        case 'colocar':{
            const metas = accion.metas;
            const nuevoEstado ={
                orden: metas.map(meta=>meta.id),
                objetos:metas.reduce((objeto,meta)=> ({...objeto, [meta.id]:meta}), {} )
            };
            return nuevoEstado;
        };
        case 'crear':{
            const id = Math.random(); //accion.meta.id;
            const nuevoEstado ={
                orden: [...estado.orden, id],
                objetos:{
                    ...estado.objetos,
                    [id]:accion.meta
                }
            };

            return nuevoEstado;

        };
        case 'actualizar':{
            const id = accion.meta.id;
            estado.objetos[id] ={
                ...estado.objetos[id],
                ...accion.meta
            };
            const nuevoEstado = {...estado};
            return nuevoEstado
            };

            case 'borrar':{
                const id = accion.id;
                const nuevoOrden = estado.orden.filter(item=>item !==id);
                delete estado.objetos[id];
                const nuevoEstado = {
                    orden:nuevoOrden,
                    objetos: estado.objetos
                };
                return nuevoEstado;
            }

        default:{
            return estado
        }
    }
}

const metas = reductor(estadoInicial, {tipo:'colocar', metas:listaMock});

export const Contexto = createContext(null);
function Memoria({children}) {
    const[estado, enviar] = useReducer(reductor, metas);
    return ( 
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
     );
}

export default Memoria;
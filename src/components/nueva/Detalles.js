import {useEffect, useState, useContext} from 'react'
import { useNavigate, useParams } from 'react-router';
import estilos from "./Detalles.module.css";
import { Contexto } from '../../servicios/Memoria';

function Detalles(){

    const { id } = useParams();
   
    const [form, setForm] = useState({
        detalles:"",
        eventos:1,
        periodo:'Diario',
        icono:"🏃🏼",
        meta:52,
        plazo:"2024-02-10",
        completado:0
    });

    const [estado, enviar] = useContext(Contexto);

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop)=>{
        setForm(estado=> ({ ...estado, [prop]: event.target.value}))
    }

    const navegar = useNavigate();

    useEffect(()=>{
        const metaMemoria = estado.objetos[id];
        if(!id) return;
        if(!metaMemoria){
            return navegar('/404');
        }
        setForm(estado.objetos[id]);
    }, [id] );


    const crear = ()=>{
        enviar({tipo:'crear', meta: form});
        navegar('/lista');
    }

    const actualizar = ()=>{
        enviar({tipo:'actualizar', meta: form});
        navegar('/lista');
    }

    const borrar = ()=>{
        enviar({tipo:'borrar', id});
        navegar('/lista');
    }

    const cancelar = ()=>{
        navegar('/lista');
    }

    const frecuencias = ["Diario", "Semanal", "Mensual", "Anual"];
    const iconoMeta = ["🏃🏼","🏋🏼","🖥️","🥳","🤓","🚲","🏊🏼‍♂️","💅🏼"]

    return(
        <div className="tarjeta">
            <form className="p-4">

                <label className="label">
                    Describe tu meta
                    <input 
                    value={detalles} 
                    onChange={e=>onChange(e,'detalles')} className="input" 
                    placeholder="Ej: Salir a caminar" />
                </label>


                <label className="label">
                    Con que frecuencia cumplira su meta? <span>(Ej: una vez a la semana.</span>
                    <div className="flex mb-6">
                        
                        <input 
                        value={eventos} 
                        type="number" 
                        className="input mr-6" 
                        onChange={e=>onChange(e, "eventos")} />

                        <select 
                        value={periodo} 
                        className="input"
                        onChange={e=>onChange(e, "periodo")}>
                            {frecuencias.map((opcion) => 
                            (<option key={opcion} value={opcion}>{opcion}</option>
                                ))}
                        </select>

                    </div>
                </label>


                <label className="label">
                    Cuantas veces deseas completar la meta?
                    <input 
                    value={meta} 
                    type="number" 
                    className="input"
                    onChange={e=>onChange(e, "meta")}/>
                </label>


                <label className="label">
                    Cual es la fecha limite?
                    <input 
                    value={plazo} 
                    type="date" 
                    className="input" 
                    onChange={e=>onChange(e, "plazo")}/>
                </label>


                <label className="label">
                    Cuantas veces ya completaste esta meta?
                    <input 
                    value={completado} 
                    type="number" 
                    className="input" 
                    onChange={e=>onChange(e, "completado")}/>
                </label>


                <label className="label">
                    Escoje un Icono para tu meta:
                    <select 
                    value={icono} 
                    className="input"
                    onChange={e=>onChange(e, "icono")}>
                    {iconoMeta.map((icono)=> (<option key={icono} value={icono}>{icono} </option>))}
                    </select>
                    
                </label>


            </form>
            <div className={estilos.botones}> 
                {!id && 
                <button className="boton boton--negro" onClick={crear}>Crear</button> }

                {id &&
                <button className="boton boton--negro" onClick={actualizar}>Actualizar</button>}

                {id &&
                <button className='boton boton--rojo'
                onClick={borrar}>
                    Borrar
                </button>
                }
                <button className="boton boton--gris"
                onClick={cancelar}>Cancelar</button>
            </div>

        </div>
    )
}

export default Detalles;
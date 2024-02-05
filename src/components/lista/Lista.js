import { useContext } from "react";
import Metas from "./Metas";
import { Contexto } from "../../servicios/Memoria";
import { Outlet } from "react-router-dom";



function Lista() {

    const [estado, enviar] = useContext(Contexto);
    
    return (  
        <>
         {estado.orden.map (id => <Metas key={id} {...estado.objetos[id]}></Metas>)}
         <Outlet />
        </>
       
    );
}

export default Lista;
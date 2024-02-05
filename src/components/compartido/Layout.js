import { Outlet } from "react-router-dom";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import Cuerpo from "./Cuerpo";



function Layout(){
    return(
        <>
        <Encabezado />

        <Cuerpo>
            <Outlet>

            </Outlet>
          {/* <Lista />
          <Detalles /> */}
        </Cuerpo>


        <Pie />

      </>
    )
}

export default Layout;
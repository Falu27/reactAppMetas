import estilos from './Cuerpo.module.css'
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG } from '../../img/lista.svg';
import { ReactComponent as NuevaSVG } from '../../img/nueva.svg';

function Cuerpo({children}) {
    return (
      <div className={estilos.cuerpo}>
        <aside className={estilos.aside}>
          <Vinculo 
          href='/lista' 
          texto='Mis Metas'
          Icono={ListaSVG}/>
          

          <Vinculo 
          href='/crear' 
          texto='Nueva Meta'
          Icono={NuevaSVG}/>
          
          
          
        </aside>
        <main className='main'>
          {children}
        </main>
      </div>
    );
  }
  
  export default Cuerpo;
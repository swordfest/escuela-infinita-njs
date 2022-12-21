import { useState } from 'react';
import MenuItem from './menuItem'

export default function MenuNavbar () {
    // const [items, setItems] = useState([{item: <MenuItem/>}]);
    return (
        <div className=' w-auto h-auto flex gap-8 '>
            <MenuItem name={'INICIO'} link={'#'} />
            <MenuItem name={'LIBRO'} link={'#sumario'} />
            <MenuItem name={'RESEÑAS'} link={'#reviews'} />
            <MenuItem name={'BLOG'} link={'/blog'} />
            <MenuItem name={'AUTORES'} link={'#autors'} />
            <MenuItem name={'CURSOS'} link={'#courses'} />
            <MenuItem name={'EDITORIAL'} link={'#sponsors'} />
            {/* Hay que hacer la seccion de subscripcion de newsletter */}
            <MenuItem name={'SUBSCRIPCION'} link={'#sub'} /> 
        </div>
    )
}
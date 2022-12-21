import { useState } from 'react';
import MenuItem from './menuItem'

export default function MenuNavbar () {
    // const [items, setItems] = useState([{item: <MenuItem/>}]);
    return (
        <div className=' w-auto h-auto flex gap-8 '>
            <MenuItem name={'INICIO'} />
            <MenuItem name={'LIBRO'} />
            <MenuItem name={'CURSOS'} />
            <MenuItem name={'ARTICULOS'} />
            <MenuItem name={'AUTORES'} />
            <MenuItem name={'CONTACTO'} />

        </div>
    )
}
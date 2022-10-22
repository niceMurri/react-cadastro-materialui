import {Routes, Route, Navigate} from 'react-router-dom';

import {Button} from '@mui/material';

const AppRoutes = () => {
    return(
        <Routes>
            <Route  path='/pagina-inicial' element={<Button color="primary" variant='contained'>OK</Button>}/>
            <Route  path='*' element={<Navigate to='/pagina-inicial' />}/>
        </Routes>
    )
}



export default AppRoutes;   
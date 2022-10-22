import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider} from '@mui/material'

import AppRoutes from './routes';


//theme
import {LightTheme} from './shared/themes';

export function App() {


  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}


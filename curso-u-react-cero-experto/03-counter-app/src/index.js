import { createRoot } from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

import './index.css';

const root = createRoot( document.getElementById('root') );

// const componenteRender = PrimeraApp();
// root.render( componenteRender );

// root.render(<PrimeraApp saludoProp="Hola, Soy Goku" />);
root.render(<PrimeraApp />);

// root.render(<CounterApp value={ 12345 } />);
import { createRoot } from "react-dom/client";
import PrimeraApp from "./PrimeraApp";

import './index.css';

const root = createRoot( document.getElementById('root') );

const componenteRender = PrimeraApp();
root.render( componenteRender );

// Otro modo de hacer lo mismo
// root.render(<PrimeraApp />);
import React from 'react';
import { createRoot } from "react-dom/client";

const saludo = <h1>Hola Mundo</h1>;
const root = createRoot( document.getElementById('root') );

root.render(saludo);
import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
import './styles.css'
// import FirstApp from './FirstApp'
// import HelloWorldApp from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >
        {/* <FirstApp title='Hola, soy Goku' subTitle='Este subtitulo es un subtitulo ' /> */}
        {/* <FirstApp /> */}
        <CounterApp value={ 0 }/>
    </React.StrictMode>
)
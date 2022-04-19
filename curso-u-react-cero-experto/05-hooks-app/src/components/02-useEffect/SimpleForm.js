import { useEffect, useState } from 'react';

import { Message } from './Message';

import './useEffect.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name, email } = formState;

    useEffect( () =>{ 
        // console.log('Solo se ejecuta al cargar el componente por primera vez');
    }, []);
    
    useEffect( () =>{ 
        // console.log('formState');
    }, [ formState ] );
    
    useEffect( () =>{ 
        // console.log('email');
    }, [ email ] );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]:target.value
        });
    };

  return (
    <>
        <h1>SimpleForm</h1>
        <hr />

        <div className='form-group'>
            <input className='form-control' type='text' name='name' placeholder='Tu nombre' autoComplete='off' value={ name } onChange={ handleInputChange } />
        </div>

        <div className='form-group mt-3'>
            <input className='form-control' type='text' name='email' placeholder='mail@mail.com' autoComplete='off' value={ email } onChange={ handleInputChange } />
        </div>

       { (name === '123') && <Message /> }
    </>
  )
}

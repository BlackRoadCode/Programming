import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './useEffect.css';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name:'',
        email:'',
        password:''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
      console.log('email cambió');
    }, [email]);

    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log(formValues);
    }
    

  return (
    <form onSubmit={ handleSubmit } >
        <h1>FormWithCustomHook</h1>
        <hr />

        <div className='form-group'>
            <input className='form-control' type='text' name='name' placeholder='Tu nombre' autoComplete='off' value={ name } onChange={ handleInputChange } />
        </div>

        <div className='form-group mt-3'>
            <input className='form-control' type='text' name='email' placeholder='mail@mail.com' autoComplete='off' value={ email } onChange={ handleInputChange } />
        </div>
        
        <div className='form-group mt-3'>
            <input className='form-control' type='password' name='password' placeholder='*****' value={ password } onChange={ handleInputChange } />
        </div>

        <button className='btn btn-success mt-3' type='submit' >Submit</button>

    </form>
  )
}

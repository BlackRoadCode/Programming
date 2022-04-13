import { useState } from "react";

export const GiftExpertApp = () => {

    // const categories = ['Hector Lavoe', 'Ruben Blades', 'Willie Colon'];

    const [categories, setCategories] = useState(['Hector Lavoe', 'Ruben Blades', 'Willie Colon']);

    const handleAdd = ( ) => {
        // setCategories( [... categories, 'Fania all stars'] );
        setCategories( cats => [...cats, 'Fania'] );
    }

    return (
        <>
            <h2>Gift Expert App</h2>
            <hr />

            {/* <button onClick={ handleAdd('nueva categoria') } >Añadir Categoría</button> */}
            <button onClick={ handleAdd } >Añadir Categoría</button>

            <ol>
                { 
                    categories.map( cat => {
                        return <li key={ cat }>{ cat }</li>;
                    })
                }
            </ol>
        </>
    )

}
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Hector Lavoe', 'Ruben Blades', 'Willie Colon']);

    return (
        <>
            <h2>Gift Expert App</h2>

            <AddCategory setCategories={ setCategories } />

            <hr />

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
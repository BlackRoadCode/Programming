// import { useEffect, useState } from "react";

// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ( { category } ) => {

    // const [images, setimages] = useState([]);

    const { loading } = useFetchGifs();

    // useEffect( () => {    
    //     getGifs( category ).then( ( images ) => { setimages( images ) })
    // }, [ category ]);

  return (
      <>
        <h3>{ category }</h3>

        

        { loading ? 'Cargando...' : 'Data cargada' }

        {/* <div className="card-grid">
                {
                    // images.map( ( { id, title } ) => <li key={ id } >{ title }</li> )
                    images.map( ( img ) => <GifGridItem key={ img.id } { ...img } /> )
                }
        </div> */}
      </>
  )
}

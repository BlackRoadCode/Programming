
export const GifGridItem = ( { id, title, url } ) => {

    // console.log(img);

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{title}</p>
    </div>
  )
}

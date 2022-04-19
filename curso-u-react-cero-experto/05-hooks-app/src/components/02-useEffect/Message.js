import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      
        console.log('Componente montado');
    
      return () => {
        console.log('Componente desmontado');
      }
    }, [])
    

  return (
    <h1 className="mt-4">Eres Genial!!</h1>
  )
}

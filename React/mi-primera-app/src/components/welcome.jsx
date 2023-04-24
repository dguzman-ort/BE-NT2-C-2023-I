const Welcome = ({ nombre, otraProp}) => {
    
    return (
        <>
            {
                (nombre) ?
                <h1>Hola {nombre}!!!</h1>
                :
                <h1>Hola clase de Belgrano!!!</h1>
            }
        </>
        
        
    )
}

export default Welcome
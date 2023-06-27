const UserCard = ( { data } ) => {

    //const {data} = props

    return(
        <article className="container">
        <div className="org">
        <div className="heartbeat" >
        <h1  >Galletas de la fortuna</h1>
        </div>
        </div>   
            
            <div className="frase">
            <p className="frass">{data.phrase}  </p>
            <div>
               
             </div>
             
             </div>
             <br />

             <div className="autor">
            
             <p>{data.author}</p>
             </div>


        </article>
    )
}

export default UserCard
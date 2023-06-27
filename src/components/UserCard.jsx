const UserCard = ( { data } ) => {

    //const {data} = props

    return(
        <article className="article">
            <h1>{data.phrase} </h1>
           
            
            <div className="user-information">
                <p>{data.phrase}  </p>

                <div>
                <p>{data.author}</p>
               </div>

               </div>
            
        </article>
    )
}

export default UserCard
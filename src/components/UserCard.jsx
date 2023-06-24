const UserCard = ( { data, textColor } ) => {

    //const {data} = props

    return(
        <article className="user-card" style={{color: textColor}}>
            <h1>{data.name.title} {data.name.first} {data.name.last}</h1>
            <img src={data.picture.large} alt="" />
            
            <div className="user-information">
                <p><i className='bx bx-envelope bx-sm bx-fw'></i>{data.email}  </p>
                <p><i className='bx bx-phone bx-sm bx-fw'></i>{data.phone}</p>
                <p><i className='bx bx-map-pin bx-sm bx-fw'></i>{data.location.city} {data.location.state} {data.location.country}</p>
            </div>
            
        </article>
    )
}

export default UserCard
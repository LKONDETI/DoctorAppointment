const HospitalCard =({hospitals}) => {
    return(
        <div>
            <div class="card bg-success text-white" style={{"width":"18rem"}}>
            <h3>hospitals list</h3>
            <h3>{hospitals.name}</h3>
            <p>{hospitals.description}</p>
            <p>{hospitals.address}</p>
            <p>{hospitals.phoneNo}</p></div>
        </div>
    )
}

export default HospitalCard;
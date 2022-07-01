// import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect, useState } from 'react';


function Fetchapi() {

    const [user, setUser] = useState([]);

    const fetchdata = () => {
        fetch("https://randomuser.me/api/?nat=us&results=20&page=1")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let darshan = data.results;
                console.log(darshan);
                // setUser(data.results);
                setUser(darshan);
            })
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <>
            <div>Hi Kirit and viren </div>
            <div className='container'>
                <div className='row'>
                    {user.map(data => (
                        <div className='col-lg-4' key={data.id.value}>
                            <div><img src={data.picture.large} alt="..." /> </div>
                            <div>Name:{data.name.first}</div>
                            <div>Date:{data.dob.date}</div>
                            <div>Age:{data.dob.age}</div>
                            <div>Number:{data.phone}</div>
                            <div>Gender:{data.gender}</div>
                            <div>Email:{data.email}</div>
                            <div>Location:{data.location.city}</div>
                            <div>Postcode:{data.location.postcode}</div>
                            {/* <div>Longitude:{data.location.coordinates.longitude}</div> */}
                            {/* <div>Street Name:{data.location.street.name}</div> */}
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Fetchapi
import React, { useEffect, useState } from "react";
import { TD, Table } from "../StyledComponents/Table";

interface APIState {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}


const FetchData = ()=>{
    const [users,setusers] = useState<APIState[]>([])
    const getAPIData = async ()=>{
        const res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
        setusers(res)
    }
    useEffect(()=>{
        getAPIData()
    })
    return (
        <>
            <div className="container">
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADDRESS</th>
                            <th>PHONE NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                const {id,name,email,phone} = user;
                                const {street,city,zipcode} = user.address
                                return (
                                    <tr key={id}>
                                        <TD>{id}</TD>
                                        <TD>{name}</TD>
                                        <TD>{email}</TD>
                                        <TD>{`${street}, ${city} ${zipcode} }`}</TD>
                                        <TD>{phone}</TD>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default FetchData;
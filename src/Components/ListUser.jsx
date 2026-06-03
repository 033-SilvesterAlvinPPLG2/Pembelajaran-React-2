/**
 * apa itu useEffcet?
 * useEffect adalah React hook yang digunakan untuk 
 * memberikan side effect atau efek samping 
 * ke dalam komponen kita
 */

/**
 * 
 */

// import { useEffect } from "react";

//https://jsonplaceholder.typicode.com/users#

// export default function ListUser() {
//     useEffect(() => {
//         console.log("Komponen List User di Render");
//     }, [])
//     return (
//         <div>
//             <h1>Chek console</h1>
//         </div>
//     )
// }

import { useEffect, useState } from "react";

export default function ListUser() {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUser() {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users#")
    
            if(!response.ok){
                throw new Error("gagal mengambil data");
            }
    
            const data = await response.json();
            setUsers(data);
            console.log(setUsers);
            }
    
            catch(err) {
                setError(err.message);
            }
    
            finally{
                setloading(false)
            }
        }

        fetchUser()

        if (loading) {
            return <p>Loading...</p>
        }
        if(error){
            return <p>{error}</p>
        }

        return(
            <div>
                <h2>Daftar User: </h2>
                {
                    users.map((user)=>(
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.address.city}</p>
                        </div>
                    ))
                }
            </div>
        )
    })
}
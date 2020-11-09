import Axios from "axios";
import React, { useEffect, useState } from "react";



const Users = () => {

    const [usersData, setUserData] = useState();

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const data = response.data;
                setUserData(data)
            })
            .then(json => console.log(json))
    }, [])



    return (
        <div>
            This is Users
            {usersData !== undefined
                ? usersData.map((data, index) => {
                    return (
                        <div class="row">
                            <div class="column">
                                <h2>{data.name}</h2>
                                <p>Some text..</p>
                            </div>
                        </div>
                    );
                })
                : null}

        </div>
    );
}
export default Users;
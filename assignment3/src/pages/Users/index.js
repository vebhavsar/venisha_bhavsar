import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PostData from "../Posts/Postdata";
import './Styleuser.css'


const Users = () => {

    const [usersData, setUserData] = useState();

    const History = useHistory();


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
                        <div class="row" key = {index}>
                            <div class="column">
                                <table>
                                    <tr>

                                        <th onClick={ () => History.push("/posts",{item:data.id})} >{data.name} </th>
                                        <th>{data.username}</th>
                                        <th>{data.email}</th>
                                        {console.log(data.id," Id" )};
                                    </tr>
                                    <tr>Click on the above userName</tr>
                                </table>
                                <p>Some text..</p>
                                <PostData />
                            </div>
                        </div>
                    );
                })
                : null}

        </div >
    );
}
export default Users;
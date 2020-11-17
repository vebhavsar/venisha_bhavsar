import Axios from "axios";
import React, { useEffect, useState } from "react";
import PostData from "./Postdata";
import { useHistory } from "react-router-dom";




const Posts = (props) => {
    //console.log(props.location.state.item,"Props");
    const [usersData, setUserData] = useState();


    const History = useHistory();


    const Id = props.location.state !== undefined ? props.location.state.item : 0;
    useEffect(() => {

        if (Id > 0) {
            Axios.get('https://jsonplaceholder.typicode.com/users/' + Id + '/posts')
                .then(response => {
                    const data = response.data;
                    setUserData(data)
                })
                .then(json => console.log(json))

        }
        else {
            Axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    const data = response.data;
                    setUserData(data)
                })
                .then(json => console.log(json))
        }

    }, [])

    const Delete = (id) => {
        console.log(id)
        Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const data = response.data;
                console.log(response);
                setUserData(
                    usersData.filter((data) => {
                        if (data.id !== id) {
                            return data;
                        }
                    }
                    )
                )
            });
    }



    return (
        <div>
            This is Posts
            
            {usersData !== undefined
                ? usersData.map((data, index) => {
                    return (
                        <div class="row">
                            <div class="column">
                                <table>
                                    <tr>
                                        <th> UserId: {data.userId}</th>
                                        <th> Title : {data.title}</th>
                                        <th><button onClick={() => History.push("/comments", { item: data.id })} > Comments</button></th>
                                        <th> <button onClick={() => Delete(data.id)}>Delete Post</button></th>
                                        <th><PostData /></th>
                                    </tr>
                                    

                                </table>

                                {console.log(data.id, " Id")};
                            </div>
                        </div>
                    )
                })
                : null}


        </div>
    );
}
export default Posts;
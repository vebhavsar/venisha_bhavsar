import Axios from "axios";
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";

const Comments = (props) => {
    const [usersData, setUserData] = useState();


    //  const Id = props.id !== undefined ? props.id : 0;

    useEffect(() => {


        // if (props.id !== undefined) {
        Axios.get('https://jsonplaceholder.typicode.com/comments/1')
            .then(response => {
                const data = response.data;
                setUserData([data])
            })
            .then(json => console.log(json))

        //}
        //else {

        //Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        //  .then(response => {
        //    const data = response.data;
        //  setUserData(data)
        // })
        //.then(json => console.log(json))

        //}


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
            This is Comments
            {usersData !== undefined
                ? usersData.map((data, index) => {
                    return (
                        <div class="row">
                            <div class="column">
                                {console.log(data)}
                                <h2>{data.body}</h2>

                                <tr>

                                    <th><button onClick={() => Delete(data.id)}>Delete Comment</button></th>
                                </tr>

                            </div>

                        </div>

                    );
                })
                : null}
            <AddComment />
        </div>
    );
}
export default Comments;
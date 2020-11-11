import Axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = () => {
    const [usersData, setUserData] = useState();

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => {
                const data = response.data;
                setUserData(data)
            })
            .then(json => console.log(json))
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
                                <p>Some text..</p>
                                <button onClick={() => Delete(data.id)}>Delete Comment</button>
                            </div>
                        </div>
                    );
                })
                : null}

        </div>
    );
}
export default Comments;
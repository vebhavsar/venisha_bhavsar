import React, { Component } from 'react';
import axios from 'axios';


class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ' ',
            body: ' '
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        axios
            .post('https://jsonplaceholder.typicode.com/posts/1/comments', this.state)
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        const { name, body } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit"> Add Comment</button>
                </form>
            </div>
        )
    }
}
export default AddComment;
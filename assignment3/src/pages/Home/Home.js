import React from 'react';
import './Home.css';


const Home = () => {


    return (
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/posts">Posts</a></li>
            <li><a href="/comments">Comments</a></li>
        </ul>
    )
}

export default Home;
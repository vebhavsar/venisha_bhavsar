import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import Comments from "../pages/Comments";

const Routes = () => {
    return (
        <>
            
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/comments" component={Comments} />
        </>
        
    );

}

export default Routes;
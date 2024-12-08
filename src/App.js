import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UsersList from './components/UsersList/UsersList';
import UserPosts from './components/UserPosts/UserPosts';
import PostComments from './components/PostComments/PostComments';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersList/>}/>
                <Route path="/user/:userId" element={<UserPosts/>}/>
                <Route path="/post/:postId" element={<PostComments/>}/>
            </Routes>
        </Router>
    );
};

export default App;

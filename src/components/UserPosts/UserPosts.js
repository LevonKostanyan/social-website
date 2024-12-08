import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import './UserPosts.css';

const UserPosts = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to load posts.');
                setLoading(false);
            });
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="posts-section">
            <h1 className="posts-title">User Posts</h1>
            <ul className="posts-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <Link to={`/post/${post.id}`} className="post-link">{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;

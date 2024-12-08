import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './PostComments.css';

const PostComments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => {
                setComments(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to load comments.');
                setLoading(false);
            });
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="comments-section">
            <h1 className="comments-title">Post Comments</h1>
            <ul className="comments-list">
                {comments.map((comment) => (
                    <li key={comment.id} className="comment-item">
                        <strong className="comment-author">{comment.name}</strong>: <span
                        className="comment-text">{comment.body}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;
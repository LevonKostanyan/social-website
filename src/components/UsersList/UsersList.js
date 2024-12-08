import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UsersList.css';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to load users.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="users-list-container">
            <h1 className="users-list-title">Users List</h1>
            <ul className="users-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <Link to={`/user/${user.id}`} className="user-link">{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
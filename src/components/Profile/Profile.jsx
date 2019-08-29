import React from 'react';
import './Task01.css';


const Profile = ({ user }) => (
    <div className="profile">
        <div className="description">
            <img className="avatar" src={user.avatar} alt="user avatar" />
            <p className="name">{user.name}</p>
            <p className="tag">{user.tag}</p>
            <p className="location">{user.location}</p>
        </div>
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{user.stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{user.stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{user.stats.likes}</span>
            </li>
        </ul>
    </div>
)



export default Profile;
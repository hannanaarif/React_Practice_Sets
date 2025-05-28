import React, { useContext } from 'react'
import { BookContext } from '../context/Bookcontext';

const Profile = () => {
    const {user} = useContext(BookContext);

  return (
    <div>
      <h2>Profile</h2>
      <img src={user.img} alt="photo" />
        <h3>Name: {user.name}</h3>
        <h3>Bio: {user.bio}</h3>

    </div>
  )
}
export default Profile

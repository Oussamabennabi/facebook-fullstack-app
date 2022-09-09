import React from 'react'
import UserCard from './UserCard';
const UsersContainer = ({
  users,
  handleMessenger,
  containerHeader,
}) => {  


  return (
    <div className="section-container">
      <h1 className="font-bold pb-4 text-xl">{containerHeader}</h1>
      <div className="cards-container grid gap-3 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 2xl:grid-cols-6 place-items-center">
        {users?.map((user, i) => (
          <UserCard user={user} key={i} handleMessenger={handleMessenger} />
        ))}
      </div>
    </div>
  );
};

export default UsersContainer
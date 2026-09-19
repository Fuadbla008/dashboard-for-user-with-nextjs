import React from 'react';
import fetchUserData from '../component/fetchdata';

const UsersPage = async () => {
    const users = await fetchUserData();
    return (
        <div className="grid grid-cols-4 gap-2.5 rounded-2xl">
            {
                users.map((user) => (
                    <div className="border-2 flex flex-col items-center justify-center" key={user.id}>
                        User name: {user.name}
                        <li>user id: {user.id}</li>
                        <li>user email: {user.email}</li>
                        <li>user address: {user.address.city}</li>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersPage;
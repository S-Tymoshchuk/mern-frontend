import React from "react";
import UserList from "../components/UsersList";


const Users = () => {
    const USERS = [
        {
            id: "u1",
            image: "https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg",
            name: "Serge",
            places: 3
        }
    ];

    return <UserList items={USERS}/>;
};

export default Users;
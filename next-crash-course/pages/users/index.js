// import { Fragment } from 'react';

import { useState, useEffect } from 'react';
import Link from 'next/link'
import Sidebar from '/layout/Sidebar/Sidebar'
import css from './users.module.css'

export default function Users() {

    const [usersData, setUsersData] = useState([])

    // function that fetches data
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsersData(data))
    })

    // mapping the usersData
    const usersList = usersData.map(user => {
        return (
            <p>
                <Link href={`/users/${user.id}`}>
                    {user.name}
                </Link>
            </p>
        )
    })

    return (
        <Sidebar>

            <div style={{margin:'3rem 0 0 10rem', display: 'flex' , flexDirection: 'column'}}>

                <div>
                    <h1>Users</h1>
                </div>

                <form className="mb-4 d-flex gap-4">
                    <input type="text" />
                    <input type="text" />
                </form>

                <div className={css.user_container}>
                    {usersList}
                </div>
            </div>

        </Sidebar>
    );
}
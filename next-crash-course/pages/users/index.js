// import { Fragment } from 'react';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Sidebar from '/layout/Sidebar/Sidebar'

import { Button } from 'reactstrap'
import css from './users.module.css'

export default function Users() {

    // states
    const [usersData, setUsersData] = useState([])
    const [searchTitle, setSearchTitle] = useState("")
    const [loading, setLoading] = useState(false)

    // function that navigate programmatically
    const router = useRouter()
    
    function showUserDetailsHandler(id) {
        router.push(`/users/${id}`)
    }

    // function that fetches data
    useEffect(() => {

        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsersData(data))

        setLoading(false)
    })

    // mapping the usersData
    const usersList = usersData.filter((value) => {

        if (searchTitle === "") return value
        if (value.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())) return value
    }).map(user => {
        return (
            <div className="d-flex align-items-baseline gap-2">
                <p key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                </p>
                <Button onClick={() => showUserDetailsHandler(user.id)}>Show Details</Button>
            </div>
        )
    })

    return (
        <Sidebar>

            <div style={{ margin: '3rem 0 0 10rem', display: 'flex', flexDirection: 'column' }}>

                <div>
                    <h1>Users</h1>
                </div>

                <form className="mb-4 d-flex gap-4">
                    <input type="text"
                        placeholder="Search for a user"
                        onChange={(event) => setSearchTitle(event.target.value)}
                    />
                </form>

                <div className={css.user_container}>
                    {loading ? <p>Loading...</p> : usersList}
                </div>
            </div>

        </Sidebar>
    );
}
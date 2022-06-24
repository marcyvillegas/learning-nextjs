import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import Sidebar from '/layout/Sidebar/Sidebar'

export default function DetailedUser() {

  const [userDetails, setUserDetails] = useState([])

  // get query id
  const router = useRouter();
  const id = router.query.id

  // function that fetches data
  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUserDetails(data))
  })

  return (
    <Sidebar>
      <div style={{margin: 'auto'}}>
        {userDetails.name}
      </div>
    </Sidebar>
  )
}
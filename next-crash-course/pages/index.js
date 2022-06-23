
// root page

import Head from 'next/head'
import Sidebar from '../layout/Sidebar/Sidebar'

export default function Home() {
  return (
    <Sidebar>
      <div style={{margin: 'auto'}}>
        <h1>Root</h1>
      </div>
    </Sidebar>
  )
}

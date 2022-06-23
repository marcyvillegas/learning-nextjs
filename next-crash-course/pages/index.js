
// root page

import Head from 'next/head'
import Sidebar from '../layout/Sidebar/Sidebar'
import Sample from '../layout/Sample/Sample'

export default function Home() {
  return (
    <Sidebar>
      <Sample />
    </Sidebar>
  )
}

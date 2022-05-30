import type { NextPage } from 'next'
import Users from '../components/layouts/users'
import { Button } from '@mantine/core'
import { useUser } from '../database/useUser'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LayoutHome from '../components/layouts/layouthome/layouthome'

const Home: NextPage = () => {
  return (
    <LayoutHome>
      <h1>Main content here</h1>
    </LayoutHome>
  )
}

export default Home

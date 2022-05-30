import React from 'react'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import {
  query as q,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore'
import { firestore } from '../../database/firebase'
import { useUser } from '../../database/useUser'
import { Button } from '@mantine/core'
import { useMenu } from '../../database/useMenu';

function Users() {
  const { userList, isLoading, isError } = useUser()
  const { } = useMenu()

  
  if (isLoading) return <div>Retrieving user data...</div>
  if (isError) return <div>Error retrieving data.</div>

  return (
    <div>
      {userList?.map((currentUser: any, idx: number) => {
        return (
          <React.Fragment key={idx}>
            <div>{currentUser.name}</div>
            <div>{currentUser.age}</div>
            <hr />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Users

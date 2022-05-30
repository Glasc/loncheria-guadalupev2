import {
  useFirestoreCollectionMutation,
  useFirestoreDocumentMutation,
  useFirestoreQuery,
} from '@react-query-firebase/firestore'
import {
  query as q,
  collection,
  doc,
  limit,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore'
import { firestore } from './firebase'

export const useUser = () => {
  const ref = q(collection(firestore, 'users'))
  const mRef = collection(firestore, 'users')
  const dRef = doc(mRef, '0EVZ8css1W1Yf0vEJnO8')

  const query = useFirestoreQuery(['users'], ref, { subscribe: true })
  const mutation = useFirestoreCollectionMutation(mRef)
  const snapshot: any = query.data

  const addUser = (name: string, age: number) => mutation.mutate({ name, age })

  const userList = snapshot?.docs.map((currentUser: any) => currentUser.data())

  return {
    userList,
    isLoading: query.isLoading,
    isError: query.isError,
    addUser,
  }
}

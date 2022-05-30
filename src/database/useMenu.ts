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

export const useMenu = () => {
  const ref = q(collection(firestore, 'recipes'))
  const query = useFirestoreQuery(['products'], ref, { subscribe: true })

  const snapshot = query.data
  const recipeList = snapshot?.docs.map((currentRecipe) => currentRecipe.data())

  return {
    recipeList,
    isLoading: query.isLoading,
    isError: query.isError,
  }
}

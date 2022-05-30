// firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBRka61UEywsEFBgVKtlFT6Lwzar1TBOlo',
  authDomain: 'loncheria-guadalupe-30d73.firebaseapp.com',
  projectId: 'loncheria-guadalupe-30d73',
  storageBucket: 'loncheria-guadalupe-30d73.appspot.com',
  messagingSenderId: '320569041767',
  appId: '1:320569041767:web:b02bbffa7fd2f7876705c2',
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)


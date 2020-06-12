import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css'
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth'
import { firebaseAppAuth, providers } from './firebase/firebase'
import googleIco from '../src/static/googleIco.svg'
import ChatBox from './components/ChatBox'
import SingIn from './components/SingIn'
import Loading from './components/Loading'
import Layout from './components/Layout'
import {UserProvider} from './components/User/UserContext'
import {SingOutProvider} from './components/User/SingOutContext'

const App = ({
 user,
 signOut,
 signInWithGoogle,
 loading
}: WrappedComponentProps) => {
 useEffect(() => {
 console.log(user)
 console.log(loading)
 }, [user, loading])
 //loading
if(loading){
 return( <div>
    <Loading/>

  </div>)
}
 //if user is logged
 if(user){
   return(
     <SingOutProvider singOut={signOut}>
     <UserProvider user={user}>
     <Layout>
    <ChatBox />
    </Layout>
    </UserProvider>
    </SingOutProvider>
   )
 }
 //else
 return (
   <SingIn signInWithGoogle={signInWithGoogle}/>
 )
}
 
export default withFirebaseAuth({
 providers,
 firebaseAppAuth,
})(App);
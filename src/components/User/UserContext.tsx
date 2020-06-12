import React, { createContext } from 'react'
import firebase, { User } from 'firebase'
//en contexto de react:
//contexto->variables que vamos a estar accediendo
//provider->componente que va a definir el scope donde se encuentra nuestro contexto
//const Home =()=>{providerCasa<mesa/></provaiderCasa/>}
//const Mesa=()=>{}aqui puedo acceder al contxto

interface Props{
    user:firebase.User
}
//el {} repreneta el estadpo inicial del contexto
export const UserContext = createContext({} as firebase.User)


//creando el provider
export const UserProvider: React.FC<Props> = ({user, children})=>(
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
)




//export const UserOut = createContext({} as firebase.User)
//export const UserProviderOut: React.FC<Props> = ({out, children})=>(
  //  <UserOut.Provider value={out}>
    //    {children}
    //</UserOut.Provider>
//)


import React, { createContext } from 'react'
interface Props{
    singOut:any
}

export const SingOutContext = createContext({})

export const SingOutProvider: React.FC<Props>=({singOut, children})=>(
    <SingOutContext.Provider value={singOut}> 
            {children}

    </SingOutContext.Provider>
    )

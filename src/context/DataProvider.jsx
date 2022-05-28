import { createContext, useState } from "react"

export const DataContext= createContext()


export const DataProvider= ({children})=>{

const [user, setUser]=useState()

const sharedData={
    user, setUser
}

    return <DataContext.Provider value={sharedData}>
        {children}
    </DataContext.Provider>
}
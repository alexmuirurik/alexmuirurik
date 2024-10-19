'use client'
import { createContext, ReactNode, useContext, useState } from "react";

const sidebarContext = createContext({hidden: false, setHidden: (confirm: boolean) => {}})

export const SidebarContextProvider = ({children}: {children: ReactNode}) => {
    const [hidden, setHidden] = useState((screen.width > 1024) ? false : true )
    return <sidebarContext.Provider value={{hidden, setHidden}}>
        {children}
    </sidebarContext.Provider>
}

export const useSidebarContext = () => useContext(sidebarContext)
import React, { useReducer } from 'react'
import AppReducer  from './Reducer'
import { AppContext, AppState } from './Context' 

interface IContextProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: AppState = {
    numPages:0,
    currentPage:1,
    urlPDF:null,
    pageCount:[]
} 

export const AppProvider = ({ children }: IContextProviderProps) => {

    const [ state, dispatch ] = useReducer(AppReducer, INITIAL_STATE)

    const setNumPages = (value: number) => {
        dispatch({ type: 'setNumPages', payload: value })
    } 

    const setCurrentPage = (value: number) => {
        dispatch({ type: 'setCurrentPage', payload: value })
    }

    const setUrlPDF = (value: string | null) => {
        dispatch({ type: 'setUrlPDF', payload: value })
    }

    const setPageCount = (value: any[]) => {
        dispatch({ type: 'setPageCount', payload: value })
    }

    return (
        <AppContext.Provider value={{
            state,
            setNumPages,
            setCurrentPage,
            setUrlPDF,
            setPageCount
        }}
        >
            {children}
        </AppContext.Provider>
    )
}
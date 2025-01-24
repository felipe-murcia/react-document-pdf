import { createContext } from "react";

export interface AppState {
    numPages: number;
    currentPage: number;
    urlPDF: string | null;
    pageCount: any[]; 
}

export type AppContextProps = {
    state: AppState;
    setNumPages: (value: number) => void; 
    setCurrentPage: (value: number) => void;
    setUrlPDF: (value: string | null) => void;
    setPageCount: (value: any[]) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)
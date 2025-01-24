import { AppState } from './Context';

type AppAction =
    | { type: 'setNumPages', payload: number }
    | { type: 'setCurrentPage', payload: number  }
    | { type: 'setUrlPDF', payload: string | null }
    | { type: 'setPageCount', payload: any[]}

const AppReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'setNumPages':
            return {
                ...state,
                numPages: action.payload
            }
        case 'setCurrentPage':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'setUrlPDF':
            return {
                ...state,
                urlPDF: action.payload
            }
        case 'setPageCount':
            return {
                ...state,
                pageCount: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer 
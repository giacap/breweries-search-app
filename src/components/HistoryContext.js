import React, {useState, createContext} from 'react'


export const HistoryContext = createContext();


export function HistoryProvider (props){

    const [historyItems, setHistoryItems] = useState([])

    return(
        <div>
            <HistoryContext.Provider value={[historyItems, setHistoryItems]}>
                {props.children}
            </HistoryContext.Provider>
        </div>
    )
}
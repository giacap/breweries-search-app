import React, {useState, createContext} from 'react'


export const BreweriesContext = createContext();


export function BreweriesProvider (props){

    const [breweries, setBreweries] = useState([])

    return(
        <div>
            <BreweriesContext.Provider value={[breweries, setBreweries]}>
                {props.children}
            </BreweriesContext.Provider>
        </div>
    )
}
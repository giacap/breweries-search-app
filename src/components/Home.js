import React, { useState, useContext} from 'react'
import Form from './Form'
import {BreweriesContext} from './BreweriesContext'
import {Link} from 'react-router-dom'


function Home (){

    const [userInput, setUserInput] = useState('')
    const [breweries, setBreweries] = useContext(BreweriesContext)

    async function fetchData(e){
        e.preventDefault();

        const response = await fetch (`https://api.openbrewerydb.org/breweries/search?query=${userInput}`);
        const data = await response.json()


        const dataLimited = data.slice(0, 35)
        setBreweries(dataLimited)
    }


    

    return(
        <div>
            <Form userInput={userInput} setUserInput={setUserInput} fetchData={fetchData}/>

            <ul className='breweries-list'>
                {breweries.map(function(brewery){
                    return  <div className='brewery-item' key={brewery.id}>
                                <Link to={`/${brewery.id}`}>
                                    <p className='brewery-name'>{brewery.name}</p>    
                                </Link>
                                <p className='brewery-additional'>{brewery.city}</p>
                                <p className='brewery-link'>(click on the name to see details)</p>
                            </div>
                            
                
                })}
            </ul>
        </div>
        
        
        
    )
}



export default Home
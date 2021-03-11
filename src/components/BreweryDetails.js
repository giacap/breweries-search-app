import React, { useContext, useEffect, useState} from 'react'
import { HistoryContext } from './HistoryContext';

function BreweryDetails({match}){

    const [breweryDetails, setBreweryDetails] = useState();

    const [historyItems, setHistoryItems] = useContext(HistoryContext)

    

    





    async function fetchDetails(){
        const response = await fetch (`https://api.openbrewerydb.org/breweries/${match.params.id}`)
        const data = await response.json();


        


        setBreweryDetails(data)

        

        const filtroItems = historyItems.map(function(item, index){
            if (item.id === data.id){
                historyItems.splice(index, 1)
            }
        })

        setHistoryItems(filtroItems)
        setHistoryItems([...historyItems, data])

        
       
    }


    


    

    useEffect(function(){
        fetchDetails();
    }, [])


    





    
   

    




    return(
        <div>
            {breweryDetails ? (
                <div className='details-container'>
                    <h2>{breweryDetails.name}</h2>
                    <div>
                        <h4>Location: </h4>
                        <p>{breweryDetails.city}, {breweryDetails.state}, {breweryDetails.country}</p>
                    </div>
                    <div>
                        <h4>Type of Brewery: </h4>
                        <p>{breweryDetails.brewery_type}</p>
                    </div>
                    
                </div>)
                : (
                    <div className='loading-container'>
                        <p>loading...</p>
                    </div>
                )
            }
            
        </div>
    )
}


export default BreweryDetails
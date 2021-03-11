import React, { useContext } from 'react'
import { HistoryContext } from './HistoryContext'
import {Link} from 'react-router-dom'



function History(){

    const [historyItems, setHistoryItems] = useContext(HistoryContext)


    




    return(

        <div>
            <h3 className='history-heading'>Your Search History</h3>
            <p className='history-subheading'>(most recent on top)</p>

            <ul className='breweries-list breweries-history'>

               {historyItems.map(function(item){
                return  <div className='brewery-item' key={item.id}>
                            <Link to={`/${item.id}`}>
                                <p className='brewery-name'>{item.name}</p>    
                            </Link>
                            <p className='brewery-link'>(click on the name to see details)</p>
                        </div>
                })} 

            </ul>
            
        </div>
    )
}


export default History
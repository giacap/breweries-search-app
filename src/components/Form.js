import React from 'react'

function Form ({setUserInput, fetchData}){


    function getUserInput(e){
        setUserInput(e.target.value)
    }

    return(

        <div>
            <form className='form' onSubmit={fetchData}>
                
                <input type="text" placeholder='search for breweries...' onChange={getUserInput}/>
                
                <button type='submit'>Search</button>
            </form>
            <p className='form-additional-text'>search by name, or city (US), or state (US)</p>
        </div>
    )
}



export default Form
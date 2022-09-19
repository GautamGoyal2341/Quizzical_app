import React from 'react'

function Questdie(props)
{
   
    return (
        <div>
            
            <h1 className='questions-css'>
                {props.quess}
            </h1>
            <div className='option-css'>
                {props.correct_ans}
                {props.incorrect_ans    }
            </div>
           
        
        </div>
    )
}

export default Questdie;
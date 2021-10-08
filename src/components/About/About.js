import React from 'react';
import './About.scss'

const explanation = {
    
     A: 'Esta es una app hecha con React',
     Technologies:{
     B: 'React router',
     C: 'Function components',
     D: 'HOOKS'
     }

}

const intro =Object.entries(explanation)
console.log(intro)
const technologyValues =Object.values(explanation.Technologies)

export default function About () {

    return (
        <header className="basciView" >
             <h2>{intro[0][1]}</h2>
             <h3>{intro[1][0]} :</h3>
             <ul style ={{display:'block'}} >
                 {/*here asiggned a unique key to each li*/}
             {technologyValues.map(
                  elemt =><li 
                   key ={technologyValues.indexOf(elemt)} >{elemt}</li>)}
             </ul>
        </header>
    
    )
}
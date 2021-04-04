import React from 'react'

export default function Hero() {
    const style = {
        'top': 0, 
        'left': 0,
        'min-width': '100%',
        'min-height': '100%'
      }
      
      return(
        <div style={style}>
          <img src={`https://unsplash.it/600/500?image=2`} style={style}/>
        </div>
      )
    }
    

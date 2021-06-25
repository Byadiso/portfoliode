import React from 'react'

function Footer() {

    let date = new Date();
    let year = date.getFullYear();
    
    return (
        <div className='footer'>
            Copyright {year}@ BYAMUNGU Desire Poland-Poznan
        </div>
    )
}

export default Footer

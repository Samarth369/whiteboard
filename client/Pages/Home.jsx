import { useState } from 'react'
import '../styles/Home.css'

export default function Home() {

    const [ cans , setcans ] = useState([ 1 , 2 , 3 ])

    function Draws () {
        return (
            <>
            <div className="draw">
                
                <div className="draw-text">
                    some text
                </div>

                <div className="draw-btn">
                    <button className='btn'>Edit</button>
                    <button className='btn'>Del</button>
                </div>

            </div>
            </>
        )
    }

    return (
        <>
            <div className="home">
                
                <div className="navbar">
                    <nav>
                        <button className='btn' >New canvas</button>
                        <button className='btn' >Log out</button>
                    </nav>
                </div>

                <div className="links">
                    {cans.map( x => <Draws />)}
                </div>

            </div>
        </>
    )
}
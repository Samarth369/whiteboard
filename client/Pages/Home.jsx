import { useState } from 'react'
import '../styles/Home.css'

export default function Home() {

    const [cans, setcans] = useState([1, 2, 3])

    const [newcanvas, setnewcanvas] = useState(false)

    function Draws() {
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

    function Canvasinfo() {
        return (
            <>
                <div className="create-canvas-block">
                    <div className="create-canvas">
                        <div className="create-canvas-name">
                            Name : 
                            <input type="text" />
                        </div>

                        <button className='Gbtn' onClick={ () => {
                            setnewcanvas(false)
                        }} >Genrate Canvas</button>

                    </div>
                </div>
            </>
        )
    }

    function Showingcanvas() {
        return (
            <>
                <div className="links">
                    {cans.map(x => <Draws />)}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="home">

                <div className="navbar">
                    <nav>
                        <button className='btn' onClick={ () => {
                            setnewcanvas(true)
                        }}>New canvas</button>
                        <button className='btn' >Log out</button>
                    </nav>
                </div>

                {newcanvas ? <Canvasinfo /> : <Showingcanvas />}

            </div>
        </>
    )
}
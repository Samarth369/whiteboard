import { useEffect, useRef, useState } from 'react';
import '../styles/canvas.css'
import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Canvas() {

    const canvasref = useRef()

    const [ strokewidth , setstrokewidth ] = useState(4)
    const [ strokecolor , setstrokecolor ] = useState("black")
    const [ drawmode , setdrawmode ] = useState(false)

    const Canvas = () => {
        return (
            "Asd"
        );
    };

    useEffect(() => {
        console.log(canvasref.current)
    }, [])

    function redo () {
        canvasref.current?.redo()
    }

    function undo () {
        canvasref.current?.undo()
    }

    useEffect ( () => {
        canvasref.current?.eraseMode(drawmode)
    } , [drawmode] )

    return (
        <>
            <div className="canvas">
                <div className="canvas-features">

                    <button className='btn' onClick={() => {setdrawmode(x => !x)}} >{ drawmode ? "Erase" : "Draw" }</button>

                    <input type="color" className='colorbox' onChange={ (e) => {
                        setstrokecolor(e.target.value);
                    }}/>

                    <input type="range" min={1} max={100} onChange={(e) => {
                        setstrokewidth(e.target.value)
                    }} />

                    <button className='btn' onClick={ () => {redo()}} >Redo</button>
                    <button className='btn' onClick={ () => {undo()}} >undo</button>

                </div>
                <div className="main-canvas">
                    <ReactSketchCanvas
                        ref={canvasref}
                        strokeWidth={strokewidth}
                        eraserWidth={strokewidth}
                        strokeColor={strokecolor}
                    />
                </div>
            </div>
        </>
    )
}
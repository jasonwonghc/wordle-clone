import GuessBlocks from "./GuessBlocks";
import Keyboard from "./Keyboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import * as myFn from '../functions/Appfunctions';
import { useEffect } from "react";

function GameBoard(){

    useEffect(()=>{
        myFn.initGuessWord();
    }, [])

    return (
        <div className="game-body" tabIndex="0" onKeyDown={(e) => myFn.handleKeyDown(e.key)}>
            <GuessBlocks/>
            <Keyboard appFunction={myFn}/>

            <ToastContainer/>
        </div>
    )
}

export default GameBoard;
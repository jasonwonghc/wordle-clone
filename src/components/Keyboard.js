import { AiOutlineEnter } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs"

function Keyboard({ appFunction }){


    return (
        <div className="Keyboard-module">
            <div id="keyboard-cont">
                <div className="first-row">
                    <button className="keyboard-button" value="Q" id="Q"  onClick={appFunction.buttonclicked}>q</button>
                    <button className="keyboard-button" value="W" id="W"  onClick={appFunction.buttonclicked}>w</button>
                    <button className="keyboard-button" value="E" id="E"  onClick={appFunction.buttonclicked}>e</button>
                    <button className="keyboard-button" value="R" id="R"  onClick={appFunction.buttonclicked}>r</button>
                    <button className="keyboard-button" value="T" id="T"  onClick={appFunction.buttonclicked}>t</button>
                    <button className="keyboard-button" value="Y" id="Y"  onClick={appFunction.buttonclicked}>y</button>
                    <button className="keyboard-button" value="U" id="U"  onClick={appFunction.buttonclicked}>u</button>
                    <button className="keyboard-button" value="I" id="I"  onClick={appFunction.buttonclicked}>i</button>
                    <button className="keyboard-button" value="O" id="O"  onClick={appFunction.buttonclicked}>o</button>
                    <button className="keyboard-button" value="P" id="P"  onClick={appFunction.buttonclicked}>p</button>
                  </div>
                <div className="second-row">
                  <div className="flex-div"></div>
                  <button className="keyboard-button" value="A" id="A" onClick={appFunction.buttonclicked}>a</button>
                  <button className="keyboard-button" value="S" id="S" onClick={appFunction.buttonclicked}>s</button>
                  <button className="keyboard-button" value="D" id="D" onClick={appFunction.buttonclicked}>d</button>
                  <button className="keyboard-button" value="F" id="F" onClick={appFunction.buttonclicked}>f</button>
                  <button className="keyboard-button" value="G" id="G" onClick={appFunction.buttonclicked}>g</button>
                  <button className="keyboard-button" value="H" id="H" onClick={appFunction.buttonclicked}>h</button>
                  <button className="keyboard-button" value="J" id="J" onClick={appFunction.buttonclicked}>j</button>
                  <button className="keyboard-button" value="K" id="K" onClick={appFunction.buttonclicked}>k</button>
                  <button className="keyboard-button" value="L" id="L" onClick={appFunction.buttonclicked}>l</button>
                  <div className="flex-div"></div>
                </div>
              <div className="third-row">
                  <button className="keyboard-button" value="Enter" onClick={appFunction.submitclicked}><AiOutlineEnter/></button>
                  <button className="keyboard-button" value="Z" id="Z" onClick={appFunction.buttonclicked}>z</button>
                  <button className="keyboard-button" value="X" id="X" onClick={appFunction.buttonclicked}>x</button>
                  <button className="keyboard-button" value="C" id="C" onClick={appFunction.buttonclicked}>c</button>
                  <button className="keyboard-button" value="V" id="V" onClick={appFunction.buttonclicked}>v</button>
                  <button className="keyboard-button" value="B" id="B" onClick={appFunction.buttonclicked}>b</button>
                  <button className="keyboard-button" value="N" id="N" onClick={appFunction.buttonclicked}>n</button>
                  <button className="keyboard-button" value="M" id="M" onClick={appFunction.buttonclicked}>m</button>
                  <button className="keyboard-button" value="Del" onClick={appFunction.delclicked}><BsBackspace/></button>
              </div>
            </div>
          </div>
    )
}

export default Keyboard;
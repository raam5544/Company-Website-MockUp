import React from 'react'
import '../App.css'

function ThirdDiv() {
  return (
    <div id='thirdDivParent'>
        <div id='thirdDivPara'>
            <h3>
                Sophia's always ready to help!
            </h3>
            <p>
                Sophia, our chat bot, is available to help 24/7.
            </p>
            <button>
                <span><h3>Chat With Sophia</h3></span>
            </button>
        </div>
        <div>
            <img id='thirdDivImg' src="https://www.lego.com/cdn/cs/set/assets/bltd927665f5bd0c718/Sophia_SittingOnDesk_v2_Headset_Shadowless.png?format=webply&fit=bounds&quality=70&width=500&height=500&dpr=1.5" alt="" />
        </div>
    </div>
  )
}

export default ThirdDiv
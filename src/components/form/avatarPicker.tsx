import React from 'react'
 
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface props {
    setForegroundColor: (newColor: string) => void,
    foregroundColor: string,
    setBackgroundColor: (newColor: string) => void,
    backgroundColor: string
}
const AvatarPicker = ({setBackgroundColor, setForegroundColor, backgroundColor, foregroundColor}: props) => {

    const colorPallete = ['#000000','#222034','#45283c','#663931','#8f563b','#df7126','#d9a066','#eec39a',
        '#fbf236','#99e550','#6abe30','#37946e','#4b692f','#524b24','#323c39','#3f3f74','#306082','#5b6ee1','#639bff',
        '#5fcde4','#cbdbfc','#ffffff','#9badb7','#847e87','#696a6a','#595652','#76428a','#ac3232','#d95763','#d77bba',
        '#8f974a','#8a6f30'
    ];

    const displayBackgroundColors = colorPallete.map(color => {
        const colorStyle: React.CSSProperties = { 
            backgroundColor: color + 'bf',
            border: color === backgroundColor ? '2px solid green' : '2px solid transparent' 
        };
        return <div className="color" onClick={() => setBackgroundColor(color)} style={colorStyle} key={color}/>
    });

    const displayForegroundColors = colorPallete.map(color => {     
        const colorStyle: React.CSSProperties = { 
            background: color, 
            border: color === foregroundColor ? '2px solid green' : '2px solid transparent' 
        };
        return <div className="color" onClick={() => setForegroundColor(color)} style={colorStyle} key={color}/>
    });

    const randomize = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const bg = colorPallete[Math.floor(Math.random() * Math.floor(30))];
        const fg = colorPallete[Math.floor(Math.random() * Math.floor(30))];
        setBackgroundColor(bg);
        setForegroundColor(fg);
    }


    const backgroundStyle: React.CSSProperties = { backgroundColor: backgroundColor+ 'df' };
    return(
        <div className="avatarPicker">
            <div className="avatar">
                <div style={backgroundStyle}>
                    <FontAwesomeIcon icon={faUser} color={foregroundColor}/>
                </div>
                <button type="button" onClick={(e) => randomize(e)}>Randomize</button>
            </div>
            <div className="colors">
                <div>
                    <h4>Avatar color:</h4>
                    <div className="colorGroup">
                        {displayForegroundColors}
                    </div>
                </div>
                <div>
                    <h4>Background color:</h4>
                    <div className="colorGroup">
                        {displayBackgroundColors}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default AvatarPicker;
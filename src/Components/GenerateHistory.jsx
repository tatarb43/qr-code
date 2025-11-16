import { GENERATE_DATA } from '../Keys.js';
import {QRCodeSVG} from 'qrcode.react';

export const GenerateHistory = () => {
    const GenData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') 

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'15px', marginTop:'15px', }}>
            {GenData.map((text)=>(
                <p style={{color:'whitesmoke', display:'flex', justifyContent:'center', alignItems:'center', gap:'15px'}} key={text}>{text} - <QRCodeSVG  value={text} size={75}  bgColor='#18191B' fgColor='white' /></p> 
            ))}
        </div>
    )
}
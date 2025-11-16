import { SCAN_DATA } from '../Keys.js';
import {QRCodeSVG} from 'qrcode.react';

export const ScannerHistory = () => {
    const ScannerData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]') 

    return (
        <div>
            {ScannerData.map((text)=>(
                <p style={{color:'whitesmoke'}} key={text}>{text} <QRCodeSVG  value={text} size={75}  bgColor='#18191B' fgColor='white' /></p> 
            ))}
        </div>
    )
}
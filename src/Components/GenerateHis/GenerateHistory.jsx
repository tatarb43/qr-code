import { GENERATE_DATA } from '../../Keys.js';
import {QRCodeSVG} from 'qrcode.react';
import s from './GenHis.module.css';
import{ useEffect, useState } from 'react';

export const GenerateHistory = () => {
    const GenData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') 

    const [size, setSize] = useState(75);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setSize(50);
        }
    }, []);

    return (
        <div className={s.div}>
            {GenData.map((text)=>(
                <p className={s.p} key={text}>{text} - <QRCodeSVG  value={text} size={size}  bgColor='#18191B' fgColor='white' /></p> 
            ))}
        </div>
    )
}
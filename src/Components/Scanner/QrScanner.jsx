import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import style from './QrScanner.module.css'

import { SCAN_DATA } from '../../Keys.js';

export const QrScanner = () => {

    const [QrText, setQrText] = useState('');

    const scanHandler = (result)=>{
        console.log(result[0].rawValue)
        setQrText(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')  

        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))   //[] потому что нам нужно хранить массив того что отсканировали а не 1 строку
        //JSON.stringify превращает массив в строку для хранения в localStorage тк он работает торлько со строками
    }

    const settings = { 
        audio: false,
        finder: true,

    }

    return (
        <div className={style.container}>
            <Scanner
                onScan={scanHandler}
                onError={(error) => console.log(error?.message)}
                components={ settings }
                styles={{container: {width: '500px', height: '500px',}}}
            />
            {QrText !== '' && <p className={style.result}>QR code scanned! {QrText}</p>}
        </div>
    )
}
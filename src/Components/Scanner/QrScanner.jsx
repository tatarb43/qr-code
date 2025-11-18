import { useState } from 'react'
import style from './QrScanner.module.css'
import { QrReader } from 'react-qr-reader'

import { SCAN_DATA } from '../../Keys.js';

export const QrScanner = () => {

    const [QrText, setQrText] = useState('');

    const scanHandler = (result)=>{
        if(!result) return

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        
        if(prevData.includes(result.text)) return  //чтобы не добавлять одинаковые сканы

        setQrText(result.text)

        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]))   //[] потому что нам нужно хранить массив того что отсканировали а не 1 строку
        //JSON.stringify превращает массив в строку для хранения в localStorage тк он работает торлько со строками
    }

    const settings = { 
        audio: false,
        finder: true,

    }

    return (
        <div className={style.container}>
        <QrReader
            constraints={{
                aspectRatio: "1",
                facingMode: 'environment',
                width: { max: 2000, min: 480 },
            }}
            scanDelay={1500}
            onResult={scanHandler}
        />
            {QrText !== '' && <p className={style.result}>QR code scanned! {QrText}</p>}
        </div>
    )
}
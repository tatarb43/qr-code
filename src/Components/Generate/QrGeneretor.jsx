import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import style from './QrGeneretor.module.css'

import { GENERATE_DATA } from '../../Keys.js';

export const QrGeneretor = () => {

    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('')

    const OnClickHandler = () => {
        setResult(inputValue)

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')  
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputValue]))   //[] потому что нам нужно хранить массив того что отсканировали а не 1 строку
        //JSON.stringify превращает массив в строку для хранения в localStorage тк он работает торлько со строками
    }

    const OnChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

    const RemoveQR = () => {
        setResult('')
        setInputValue('')
    }

    return (
        <div className={style.btns}>
            <input type="text" value={inputValue} onChange={OnChangeHandler} className={style.input} placeholder='Write your text'/>
            <button type='button' onClick={OnClickHandler} className={style.btn}>Сгенерировать QR</button>
            <button type='button' onClick={RemoveQR} className={style.btn}>Удалить QR</button>
            {result !== '' && <QRCodeSVG  value={result} bgColor='#18191B' fgColor='white' />}
        </div>
    )
}
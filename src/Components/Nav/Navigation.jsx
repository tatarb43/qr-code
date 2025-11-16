import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link className={s.link} to="/qr-code/generate">Generate QR</Link>
            <Link className={s.link} to = "/qr-code/scan">Scan QR</Link>
            <Link className={s.link} to = "/qr-code/scanHistory">History of scanning</Link>
            <Link className={s.link} to = "/qr-code/generateHistory">History of generation</Link>
            <Link className={s.link} to = "/qr-code/">Home</Link>
        </nav>
    )
}
import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link className={s.link} to="/generate">Generate QR</Link>
            <Link className={s.link} to = "/scan">Scan QR</Link>
            <Link className={s.link} to = "/scanHistory">History of scanning</Link>
            <Link className={s.link} to = "/generateHistory">History of generation</Link>
            <Link className={s.link} to = "/">Home</Link>
        </nav>
    )
}
import { QrGeneretor } from "./Components/Generate/QrGeneretor.jsx"
import { QrScanner } from "./Components/Scanner/QrScanner.jsx"
import { Navigation } from './Components/Nav/Navigation.jsx';
import { Routes, Route} from "react-router-dom";
import { GenerateHistory } from "./Components/GenerateHistory.jsx";
import { ScannerHistory } from "./Components/ScannerHistory.jsx";


export const Layout = ()=>{
    return(
        <>
            <Navigation />

            <Routes>
                <Route path="/qr-code/generate" element={<QrGeneretor />}/>
                <Route path="/qr-code/scan" element={<QrScanner />}/>
                <Route path="/qr-code/generateHistory" element={<GenerateHistory />}/>
                <Route path="/qr-code/scanHistory" element={<ScannerHistory />}/>
            </Routes>
        </>
            
    )
}
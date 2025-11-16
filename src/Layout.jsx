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
                <Route path="/generate" element={<QrGeneretor />}/>
                <Route path="/scan" element={<QrScanner />}/>
                <Route path="/generateHistory" element={<GenerateHistory />}/>
                <Route path="/scanHistory" element={<ScannerHistory />}/>
            </Routes>
        </>
            
    )
}
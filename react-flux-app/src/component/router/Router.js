import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../homePage/HomePage';
import MenuRistorante from '../menuRistorante/MenuRistorante';
import Informazioni from '../informazioni/Informazioni';
import NoPage from '../noPage/NoPage';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="menu" element={<MenuRistorante />} />
                <Route path="informazioni" element={<Informazioni />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

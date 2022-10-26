import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";
import NotFound404 from "./components/NotFound404/NotFound404";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CarritoPage />} />
                <Route path='/404' element={<NotFound404 />} />

                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

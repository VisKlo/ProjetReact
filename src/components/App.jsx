import { Provider } from "react-redux"
import { store } from "./App/store"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./Pages/HomePage";
import { Navbar } from "./Navbar/Navbar";
import { Films } from "./Pages/Films";
import { Series } from "./Pages/Series";
import { FilmDesc } from "./Pages/FilmDesc";
import { SerieDesc } from "./Pages/SerieDesc";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/reactTP/"  >
                <Navbar />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/films" Component={Films} />
                    <Route path="/film/:movieId" Component={FilmDesc} />
                    <Route path="/series" Component={Series} />
                    <Route path="/serie/:serieId" Component={SerieDesc} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
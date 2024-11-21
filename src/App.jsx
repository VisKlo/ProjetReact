import { Provider } from "react-redux"
import { store } from "./components/Features/store"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./Pages/HomePage";
import { Header } from "./components/Header";
import { Films } from "./Pages/Films";
import { Series } from "./Pages/Series";
import { FilmDesc } from "./Pages/FilmDesc";
import { SerieDesc } from "./Pages/SerieDesc";
import { Favorites } from "./Pages/Favorites";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/reactTP/"  >
                <Header />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/films" Component={Films} />
                    <Route path="/film/:movieId" Component={FilmDesc} />
                    <Route path="/series" Component={Series} />
                    <Route path="/serie/:serieId" Component={SerieDesc} />
                    <Route path="/favorites" Component={Favorites} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
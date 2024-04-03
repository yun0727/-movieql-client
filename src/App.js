import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Movies"
import Movie from "./routes/Movie"

export default function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path={process.env.PUBLIC_URL+"/" }  element={<Movies/>} />
    <Route path={process.env.PUBLIC_URL+"/movies/:id"} element={<Movie/>} />
  </Routes>
  </BrowserRouter>)
}
import {BrowserRouter} from "react-router-dom";
import './App.css';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';
import {Container} from "@material-ui/core";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>Movie App</Container>
    </div>

    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;

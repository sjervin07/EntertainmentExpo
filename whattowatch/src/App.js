import {BrowserRouter, Route, Switch} from "react-router-dom";
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
    <Container>
      <Switch>
        <Route path= '/' component={Trending} exact/>
        <Route path= '/movies' component={Movies}/>
        <Route path= '/series' component={Series}/>
        <Route path= '/search' component={Search}/>
      </Switch>
    </Container>
    </div>

    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;

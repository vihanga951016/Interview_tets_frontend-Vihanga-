import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import AddNotes from './Component/Notes/AddNotes/AddNotes';
import UpdateNotes from './Component/Notes/UpdateNotes/UpdateNotes';

function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/add' component={AddNotes}/>
          <Route path='/update' component={UpdateNotes}/>
          <Home></Home>
        </Switch>
    </Router>
  );
}

export default App;

import PeopleGrid from './Components/people_grid';
import PersonCard from './Components/person';
import NavigationBar from './Components/navbar';
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Firebase
import firebase from 'firebase';
import { UserContext } from './Components/UserContext';
import { useContext } from 'react';

function App() {

  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/people' component={PersonCard} />
          {/* <Route path='/incidents' component={ } /> */}
          <Route path='/home' exact component={PeopleGrid} />
          <Route path='/' exact component={PeopleGrid} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


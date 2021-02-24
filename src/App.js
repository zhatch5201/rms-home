import PeopleGrid from './Components/people_grid';
import PersonCard from './Components/person';
import NavigationBar from './Components/navbar';
import IncidenceForm from './Components/incidence_form';
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/people' component={PersonCard} />
          <Route path='/incidents' component={IncidenceForm} />
          <Route path='/home' exact component={PeopleGrid} />
          <Route path='/' exact component={PeopleGrid} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


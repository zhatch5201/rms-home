import PeopleGrid from './Components/people_grid';
import PersonCard from './Components/person';
import NavigationBar from './Components/navbar';
import IncidenceForm from './Components/incidence_form';
import IncidenceList from './Components/incidence_list';
import IncidencePage from './Components/indicence_page';
import PeoplePage from './Components/people_page';
import VehiclePage from './Components/vehicle_page';
import NewNav from './Components/nav_bar';
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <NewNav />
        <Switch>
          <Route path='/people' component={PeoplePage} />
          <Route path='/incidents' component={IncidencePage} />
          <Route path='/home' exact component={PeopleGrid} />
          <Route path='/' exact component={PeopleGrid} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


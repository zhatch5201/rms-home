import NewNav from './Components/nav_bar';
import NavigationBar from './Components/navbar';
import IncidencePage from './Pages/indicence_page';
import PeoplePage from './Pages/people_page';
import VehiclePage from './Pages/vehicle_page';
import IncidenceList from './Components/incidence_list';
import PeopleGrid from './Components/people_grid';
import VehicleList from './Components/vehicle_list'
import PersonCard from './Components/person';
import IncidenceForm from './Components/incidence_form';
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Person } from '@material-ui/icons';

function App() {

  return (
    <>
      <Router>
        <NewNav />
        <Switch>
          <Route path='/people' component={PersonCard} />
          <Route path='/incidents' component={IncidenceList} />
          <Route path='/home' exact component={IncidenceForm} />
          <Route path='/' exact component={PeopleGrid} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


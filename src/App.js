import NewNav from './Components/nav_bar';
import NavigationBar from './Components/navbar';
import IncidencePage from './Components/indicence_page';
import PeoplePage from './Components/people_page';
import VehiclePage from './Components/vehicle_page';
import IncidenceList from './Components/incidence_list';
import PeopleGrid from './Components/people_grid';
import VehicleList from './Components/vehicle_list'
import PersonCard from './Components/person';
import IncidenceForm from './Components/incidence_form';
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <NewNav />
        <Switch>
          <Route path='/people' component={VehicleList} />
          <Route path='/incidents' component={IncidencePage} />
          <Route path='/home' exact component={PeopleGrid} />
          <Route path='/' exact component={PeopleGrid} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


import NewNav from './Components/nav_bar';
import IncidentsList from './Components/incidents_list';
import PeopleGrid from './Components/people_grid';
import VehicleList from './Components/vehicle_list';
import PersonCard from './Components/person';
import IncidenceForm from './Components/incidence_form';
import VehicleForm from './Components/vehicle_form';
import PeopleForm from './Components/people_form';
import LandingPageIncident from './Pages/landing_incidence';
import LandingPagePeople from './Pages/landing_people';
import LandingPageVehicle from './Pages/landing_vehicle';
// Search Pages
import IncidentSearch from './Components/incident_search';
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { People } from '@material-ui/icons';

function App() {

  return (
    <>
      <Router>
        <NewNav />
        <Switch>
          {/* People */}
          <Route path='/people' exact component={LandingPagePeople} />
          <Route path='/people/grid' exact component={PeopleGrid} />
          <Route path='/people/query_people' component={IncidentSearch} />
          <Route path='/people/query_people/:id' component={PersonCard} />
          <Route path='/people/add_person' component={PeopleForm} />
          {/* Incidences */}
          <Route path='/incidents' exact component={LandingPageIncident} />
          <Route path='/incidents/grid' exact component={IncidentsList} />
          <Route path='/incidents/query_incident/:id' component={() => { return (<h1>Some Card with incident content</h1>); }} />
          <Route path='/incidents/add_incident' component={IncidenceForm} />
          {/* Vehicles */}
          <Route path='/vehicles' exact component={LandingPageVehicle} />
          <Route path='/vehicles/grid' exact component={VehicleList} />
          <Route path='/vehicles/query_vehicle' component={PersonCard} />
          <Route path='/vehicles/query_vehicle/:id' component={VehicleForm} />
          <Route path='/vehicles/add_vehicle' component={VehicleForm} />
          {/* Home */}
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;


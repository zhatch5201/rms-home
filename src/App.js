import NewNav from './Components/nav_bar';
import NavigationBar from './Components/navbar';
import IncidenceList from './Components/incidence_list';
import PeopleGrid from './Components/people_grid';
import VehicleList from './Components/vehicle_list'
import PersonCard from './Components/person';
import IncidenceForm from './Components/incidence_form';
import VehicleForm from './Components/vehicle_form';
import PeopleForm from './Components/people_form';
import LandingPageIncident from './Pages/landing_incidence';
import LandingPagePeople from './Pages/landing_people';
import LandingPageVehicle from './Pages/landing_vehicle';
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
          <Route path='/people/query_people' component={PersonCard} />
          <Route path='/people/query_people/:id' component={PeopleForm} />
          <Route path='/people/add_person' component={PeopleForm} />
           {/* Incidences */}
          <Route path='/incidents' exact component={LandingPageIncident} />
          <Route path='/incidents/list' exact component={IncidenceList} />
          <Route path='/incidents/query_incident' component={PersonCard} />
          <Route path='/incidents/query_incident/:id' component={IncidenceForm} />
          <Route path='/incidents/add_incident' component={IncidenceForm} />
           {/* Vehicles */}
           <Route path='/vehicles' exact component={LandingPageVehicle} />
          <Route path='/vehicles/list' exact component={VehicleList} />
          <Route path='/vehicles/query_vehicle' component={PersonCard} />
          <Route path='/vehicles/query_vehicle/:id' component={VehicleForm} />
          <Route path='/vehicles/add_vehicle' component={VehicleForm} />
          {/* People */}
          {/* <Route path='/incidents' component={IncidenceForm} /> */}
          {/* <Route path='/home' exact /> */}
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;


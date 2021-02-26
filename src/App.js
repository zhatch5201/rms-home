import PeopleGrid from './Components/people_grid';
import PersonCard from './Components/person';
import IncidenceForm from './Components/incidence_form';
import IncidenceList from './Components/incidence_list';
import PeopleForm from './Components/people_form';
import NewNav from './Components/nav_bar';
import LandingPagePeople from './Pages/landing_people';
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
          <Route path='/people/add_person' component={PeopleForm} />
          {/* People */}
          <Route path='/incidents' component={IncidenceForm} />
          <Route path='/home' exact />
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;


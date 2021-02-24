import GetPeople from './Components/get_people';
import PeopleGrid from './Components/people_grid';
import PersonCard from './Components/person_card';
import NavBar from './firebase/nav_bar'
import IncidenceList from './Components/incidence_list'
import './App.css';

function App() {
  return(
  <div>
     <NavBar /><br />
     <IncidenceList /><br />
  </div>
  
  );
}

export default App;


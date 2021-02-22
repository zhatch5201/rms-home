import GetPeople from './Components/get_people';
import PeopleGrid from './Components/people_grid';
import PersonCard from './Components/person_card';
import BottomNavbar from './firebase/bottom_navbar';
import NavBar from './firebase/nav_bar'
import './App.css';

function App() {
  return(
  <div>
    <BottomNavbar /><br/>
     <NavBar /><br />
  </div>
  );
}

export default App;


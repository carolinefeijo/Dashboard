import './App.css';
import { Add } from './pages/Add/add';
import { Company } from './pages/Company/company';
import { Email } from './pages/Email/email';
import { Home } from './pages/Home/home';
import { Team } from './pages/Team/team';
import { Calendar } from './pages/Calendar/calendar';


function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: 'cursive', color: '#C71C1C' }}> DASHBORDS-PAGES</h1>
      <Home />
      <Company />
      <Add />
      <Team />
      <Email />
      <Calendar />

    </div>
  );
}

export default App;

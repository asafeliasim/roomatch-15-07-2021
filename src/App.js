
import './App.css';
import HomePage  from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MatchesPage from './pages/MatchesPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CategoryPage from './pages/CategoryPage';

import { Header } from './components/Header';
import {useSelector} from 'react-redux';


function App() {
  const {userInfo} = useSelector(state => state.userLogin);
 
 
  return (
   <div className="container">

     <Router>
       <Header />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/user-register" component={RegisterPage} />
        <Route path="/user-login" component={LoginPage} />
        <Route path="/category" render={()=> <CategoryPage title="אירוח בדירה"/>} />
        <Route path="/user/matches" component={MatchesPage} />
      </Switch>
     </Router>
   
   </div>
  );
}

export default App;

import Home from './Home'
import './App.css'
import Login from './Login/Login';
import Signup from "./Login/Signup";
import Post from './Post/Post';
import SearchBar from './Post/Search';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import app from "./Login/firebase";
import { getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import {useState, useEffect } from 'react';
import Plans from './Plan';
import Premium from './Premium';

function App() {

  const [loggedUser, setloggedUser] = useState('');

  const auth = getAuth(app);

  const handleSignOut = async (e) => {
    try {
      await signOut(auth);
      alert("Sign Out was successful.");
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedUser(user.email);
      } else {
        setloggedUser("");
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
    <Router>
      <center>
      <nav>
      <Link to="/" className='p-link'>Dev@Deakin</Link> <Link to="/Login" className='s-link'>Login</Link> <Link to="/Post" className='s-link'>Post</Link> <Link to="/Plans" className='s-link'>Plans</Link> 
      </nav>
      </center>
      <h3 style={{textAlign:'center'}}> Welcome ! {loggedUser} {loggedUser ? <button onClick={handleSignOut} className='signout-btn'>Sign Out</button> : null} </h3>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/FindaQuestion" element={<SearchBar/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path='/Plans' element={<Plans/>}/>
      <Route path='/Plans/Premium-Checkout' element={<Premium/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;


import { useEffect, useState } from 'react';
import './App.css';
import { UserList } from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './components/Details';






function App() {
  const [data, setData] = useState(null)
  const [waiting, setWaiting] = useState(true)
  // console.log(data);
  useEffect(() => {
    const getUsers =()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(res => setData(res)).then(setWaiting(false)).catch(error=>console.log(error))
    }
    getUsers()
    }, [])
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={  <UserList list={data} waiting={waiting} />}  />
        <Route path='/info/:id' element={ <Details/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

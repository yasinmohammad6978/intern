



import NavBar from "./components/NavBar";
import CodeForInterview from "./components/CodeForInterview";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import{ BrowserRouter, Route} from'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <CodeForInterview/>
     <AllUsers/>
     <AddUser/>
     </BrowserRouter>
  );
}

export default App;

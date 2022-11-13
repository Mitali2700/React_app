import './App.css';


function App() {
 
  return (
    <div>

    </div>
    // It is not HTML. It is JSX (Jvascript XML).
    
  );
}

export default App;


/* If we write: 
import Nik from './navbar';

function App(){
  return(
    <>
    <Nik>
  )
}

export default App; // navbar.js page

It will also return back NAVBAR on webpage bcz we are importing somethong from './navbar'.
So it will return NAVBAR by default. Because we are exporting using default variable. 


But what happen If we remove default from export ?
code:   export {Navbar}// navbar.js page

It will give error: doesnot contain a dfault export.
*/

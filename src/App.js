import React from 'react';
import './Styles/App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widget';
function App() {
  return (
   
    <div className="app">
       {/*BEM convention*/}
    <Sidebar/>
    <Feed/>
    <Widget/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/Counter'; // Đường dẫn tới tệp Counter.js
import LifecycleComponent from './components/LifecycleComponent';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <LifecycleComponent /> */}
      {<Counter2/>}
    </div >
  );
}



export default App;

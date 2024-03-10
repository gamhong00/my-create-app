import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/Counter'; // Đường dẫn tới tệp Counter.js
import LifecycleComponent from './components/LifecycleComponent';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <LifecycleComponent />
    </div >
  );
}



export default App;

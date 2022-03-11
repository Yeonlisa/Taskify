import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: 'Lisa',
};

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;

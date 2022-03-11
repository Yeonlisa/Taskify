import React from 'react';
import './App.css';

let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: 'Lisa',
// };

// let lotsOfPeople: Person[];

// let personName: unknown;

interface Person {
  name: string;
  age?: number;
};

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;

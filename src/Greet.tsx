import React from 'react';
import './index.css';

interface GreetInterface {
  text?: string;
}

function Greet({ text }: GreetInterface) {
  return <div className="test">{text}</div>;
}

export default Greet;

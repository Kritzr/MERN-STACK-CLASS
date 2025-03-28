import logo from './logo.svg';
import { motion } from "framer-motion";

import './App.css';

function App() {


  let A ="KRITHIKA"
  return (
    <div className="App">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >{A}</motion.h1>
    
    </div>
  );
}

export default App;

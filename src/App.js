import logo from './logo.svg';
import './App.css';
import * as fabric from 'fabric'; // v6
import { useState, useRef } from 'react';

function App() {
  const canvaref = useRef(null)
  const [count, setCount] = useState(0)

  const addElement = () => {
    const canvas = new fabric.Canvas(canvaref.current);
    canvas.add(new fabric.Circle({ radius: 30, fill: '#fffff', top: 100, left: 100}));
    setCount(count + 1)
    return () => {
        
      canvas.dispose();
    }

  }
  return (
    <div className="container">
      <div style={{position:"absolute", border:"1px dotted gray", top:"30%", left:"30%"}}>
        <canvas
          width="300"
          height="300"
          ref={canvaref}
        />
      </div>
      {count === 0 && 
      <div style={{
        backgroundColor:"black", 
        position:"absolute", 
        top:"30%", 
        left:"30%", 
        height:"300px", 
        width:"300px", 
        opacity:"20%", 
        justifyContent:"center", 
        alignItems:"center", 
        display:"flex",
        borderRadius:"30%",
        color:"white"
        }} onClick={addElement}>Click TO Add Circle</div>
      }
    </div>
  );
}

export default App;

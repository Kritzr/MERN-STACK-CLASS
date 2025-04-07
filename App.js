import logo from './logo.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
     
    <div>
      <input onChange = {(e)=>{
        setEmail(e.target.value)
      }}></input>
      <input></input>
      <button onClick ={ ()=>{
          axios.post("url", {email:email,password})
      }}></button>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Header.jsx"
function Title(){
  return <h2>i love you</h2>;
  
}
function App() {
  
  return(
    <div>
      
      <h1>
      love story
      </h1>

      <Header/>
      <p>you got a mssg:</p>
      
      <Title/>
      <Title/>
    </div>
  );  
  
}

export default App

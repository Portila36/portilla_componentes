import logo from './logo.svg';
import styled from "styled-components";
import './App.css';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


function App() {
  return (
    <div className="App">
    <h1>Practica Componentes</h1>
      <h2>De Jared Portilla Cardenas</h2>
      <div>
        <Button as="a" href="https://github.com/Portila36">Gifthub</Button>
        <Button as="a" href="https://utd.edu.mx/" primary>UTD</Button>
        <Button as="a" href="https://www.facebook.com/jared.portillacardenas">Facebook</Button>
      </div>    
    </div>
  );
}

export default App;

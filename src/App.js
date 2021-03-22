
import './App.css';
import Hello from './Components/Hello'
import FromClass from './Components/FromClass';
import Arrow from './Components/Arrow';
import { State } from './Components/State';
import { State2 } from './Components/State2';
import Refresh from './Components/Refreah';
import NewDOM from './Components/NewDOM';
import FindDomNode from './Components/FindDomNode';
import Form from './Components/Form';
import MultipleHandler from './Components/MultipleHandler';
import SubmitHandler from './Components/SubmitHandler';



function App() {
  return (
    <>
      <div className="App">
        <h2 className="javascript"></h2>
        <Hello age="20" name="Ashikur Rahman"></Hello>
        {/* <Hello age="30" name="Abdullah al Muzahid"></Hello>
        <Hello age="35" name="Aminul Islam"></Hello>
        <Hello age="40" name="Anisur Rahman"></Hello> */}
        <FromClass name="Class 1"></FromClass>
        {/* <FromClass name="Class 2"></FromClass>
        <FromClass name="Class 3"></FromClass>
        <FromClass name="Class 4"></FromClass> */}
        <Arrow></Arrow>
        <State></State>
        <State2></State2>
        <br/>
        <br/>
        <Refresh></Refresh>
        <br/><br/>
        <NewDOM></NewDOM>
        <FindDomNode></FindDomNode>
        <Form></Form>
        <MultipleHandler></MultipleHandler>
        <SubmitHandler></SubmitHandler>
      </div>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Hooks/Counter";
import UseStateArray from "./components/Hooks/UseStateArray";
import DealWithObjectArray from "./components/Hooks/DealWithObjectArray";
import DealwithObjectAdv from "./components/Hooks/DealwithObjectAdv";
import ShortCircuitEvaluation from "./components/Hooks/ShortCircuitEvaluation";
import LoginForm from "./components/Hooks/LoginForm";
import UseEffect1 from "./components/Useeffect/UseEffect1";
import UseEffect2 from "./components/Useeffect/UseEffect2";
import DependencyinEffecthook from "./components/Useeffect/DependencyinEffecthook";
import CleanupfuninuseEffect from "./components/Useeffect/CleanupfuninuseEffect";
import UseEffectAPI from "./components/fetchdata/UseEffectAPI";
import UncontrolledForm from "./components/Hooks/UncontrolledForm";
import UseReducer from "./components/Hooks/useReducer";
import CompA from "./components/Hooks/UseContext/CompA";
import CompC from "./components/Hooks/UseContext/CompC";
import IncrementCounter from "./components/Hooks/CustomHook/IncrementCounter";
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <UseStateArray/> */}
      {/* <DealWithObjectArray/> */}
      {/* <DealwithObjectAdv/> */}
      {/* <ShortCircuitEvaluation/>*/}
      {/* <LoginForm/> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffect2/> */}
      {/* <DependencyinEffecthook/> */}
      {/* <CleanupfuninuseEffect/> */}
     {/* <UseEffectAPI/> */}
     {/* <UncontrolledForm/> */}
     {/* <UseReducer/> */}
     {/* <CompA/> */}
     {/* <CompC/> */}
     <IncrementCounter/>
    </div>
  );
}

export default App;

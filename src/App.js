import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Mystats from "./components/myStats/MyStats";
import Workouts from "./components/workouts/Workouts";
import MyRoutine from "./components/myRoutineArea/MyRoutine";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Mystats />
      <Workouts />
      <MyRoutine />
    </div>
  );
}

export default App;

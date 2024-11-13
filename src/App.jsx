import AddTaskForm from "./components/AddTaskForm";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AddTaskForm />
      </main>
    </div>
  );
};

export default App;

import AddTaskForm from "./components/AddTaskForm";
import Navbar from "./components/Navbar";

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


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

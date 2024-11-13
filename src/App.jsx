import AddTaskForm from "./components/AddTaskForm";
import Navbar from "./components/Navbar";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/shared/Footer";
// ..
AOS.init();


const App = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <AddTaskForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;

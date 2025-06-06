import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import CounterWithReducer from "./components/CounterWithReducer";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";

const App = () => {
  return (
    <div>
      <FocusInput />
      <hr />
      <ContactForm />
      <hr />
      <EventHandling />
      <hr />
      <Counter />
      <hr />
      <CounterWithReducer />
    </div>
  );
};

export default App;

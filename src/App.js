import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All events in Marioland";
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            hide events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            show events
          </button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}> delete event</button>
          </div>
        ))}
      <button onClick={() => setShowModal(true)}>Modal Button </button>
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% off Coupon Code</h2>
          <p>use the code NINJA10 at the checkout</p>
        </Modal>
      )}
    </div>
  );
}

export default App;

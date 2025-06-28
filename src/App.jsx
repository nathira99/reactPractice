import Greeting from "./components/Greetings";


// Parent component
function App() {

  const user = {
    name: 'Nathira',
    email: 'nathira@gmail.com',
    place: 'Mayiladuthurai',
  };

  return (
    <>
      <Greeting loggedInUser={user} />
    </>
  );
}

export default App;

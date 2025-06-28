import Greeting from "./components/Greetings";


// Parent component
function App() {

  function childToParent(user){
    console.log(user);
  }

  return (
    <>
      <Greeting 
        childToParent={childToParent}
      />
    </>
  );
}

export default App;


// Child components
function Greeting(props) {

  console.log(props);  
  return (
    <>
      <h1>Hello, {props.loggedInUser.name}!</h1>
      <p>you are logged in using {props.loggedInUser.email}</p>
      <p>you are logged from {props.loggedInUser.place}</p>
    </>
  );
}


export default Greeting;
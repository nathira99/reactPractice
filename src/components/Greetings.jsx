
// Child components
function Greeting(props) {

    const user = {
    name: 'Nathira',
    email: 'nathira@gmail.com',
    place: 'Mayiladuthurai',
  };

  props.childToParent(user);

  return (
    <>
      <h1>Hello, {user.name}!</h1>
      <p>you are logged in using {user.email}</p>
      <p>you are logged from {user.place}</p>
    </>
  );
}


export default Greeting;
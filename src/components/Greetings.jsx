function Greeting() {

    let num1 = 5, num2 = 3;

    let add = () => num1 + num2;

  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is my first component</p>
      <p>The sum of {num1} and {num2} is {add()}</p>
    </>
  );
}


export default Greeting;
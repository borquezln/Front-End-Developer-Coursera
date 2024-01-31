function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>

      <button onClick={handleClick}>Adivine el número entre 1 y 3</button>
    </div>
  );
}

export default App;

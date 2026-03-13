import Counter from './counter';
import Batsman from './assets/Batsman';
import './App.css'


function App() {
  function handleClick() {
    alert('I am clicked!')
  }

  const handleClicked = () => {
    alert('Clicked the button3!')
  }

  const colorChanged = () => {
    const h1 = document.getElementById('heading')
    h1.style.backgroundColor = 'green';
    h1.style.color = 'white';
    h1.style.padding = '10px';
    h1.style.borderRadius = '5px';
  }

  return (
    <>
      <h1 id='heading'>Vite + React</h1>

      <Counter></Counter>
      <Batsman></Batsman>
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dicta, quis error optio quaerat iste! Dolore inventore ut earum velit, deleniti animi aspernatur molestiae repudiandae modi cupiditate minus adipisci eum ea, et rem dolor! Harum et, adipisci saepe dolorum ipsa suscipit omnis provident quisquam iste, hic sunt assumenda soluta sed?</p>

      <button onClick={handleClick}>Click Me 1</button>

      <button onClick={function handleClicked() { alert('Clicked2') }}>Click Me Two</button>
      
      <button onClick={handleClicked}>Click Me Three(3)</button>

      <button onClick={() => alert('Clicked the last button!')}>Click Me Four(4)</button>

      
      <button onClick={colorChanged}>Changed Color</button>

      <div style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px", marginTop: "10px", width: "100%", display: "flex", justifyContent: "space-around" }}>
        
        <span style={{ fontWeight: "bold", display: "flex", justifyContent: "left" }}>RUN</span>
        <span style={{ fontWeight: "bold", display: "flex", justifyContent: "left" }}>BALL</span>
        
      </div>

    </>
  )
}

export default App

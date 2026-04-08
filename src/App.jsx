import { useState } from 'react'
import { useEffect } from 'react'
import "./App.css"


function App() {
  let [userMove,setUserMove]= useState("")
  let [computerMove, setComputerMove]= useState("")
  let [tie, setTie] = useState(0)
  let [userWins, setuserWins] = useState(0)
  let [computerWins, setcomputerWins] = useState(0)
  let [move, setMove] = useState(0)
  let [lastMove, setLastMove] = useState("")
  let [result, setResult] = useState("")

  let emojidata = {
    "Rock": "🪨",
    "Paper": "📃",
    "Scissor": "✂️",
  }

  function generateMove(){
    let value = Math.random()
    if (value<0.3) return "Rock"
    else if(value <0.7) return "Paper"
    else return "Scissor"
  }

  function handleClick(choice){
    let compMove = generateMove()

    setUserMove(choice)
    setComputerMove(compMove)

    setLastMove(`You: ${choice} | Computer: ${compMove}`)

    if (choice === compMove) {
      setResult("Tie")
      setTie(prev => prev + 1)
    } else if (
      (choice === "Rock" && compMove === "Scissor") ||
      (choice === "Paper" && compMove === "Rock") ||
      (choice === "Scissor" && compMove === "Paper")
    ) {
      setResult("You Win")
      setuserWins(prev => prev + 1)
    } else {
      setResult("Computer Wins")
      setcomputerWins(prev => prev + 1)
    }

    setMove(prev => prev + 1)
  }

  function handleReset() {
    setuserWins(0)
    setcomputerWins(0)
    setTie(0)
    setMove(0)
    setResult("")
    setLastMove("")
  }

  useEffect(() => {
    if (move === 5) {
      setTimeout(() => {
        if (userWins > computerWins) alert("You Won!!")
        else if (userWins === computerWins) alert("Game Tied!!")
        else alert("You Lost!!")

        handleReset()
      }, 200)
    }
  }, [move])

  return(
    <div className="container">
      <h1>Rock Paper Scissors</h1>

      <div className="score">
        <span>Computer: {computerWins}</span>
        <span>You: {userWins}</span>
      </div>

      <div className="moves">
        <div>
          <p>Computer</p>
          <div className="emoji">{emojidata[computerMove]}</div>
        </div>

        <div>
          <p>You</p>
          <div className="emoji">{emojidata[userMove]}</div>
        </div>
      </div>

      <p className="result">{result}</p>
      <p className="rounds">Round: {move}/5</p>

      <div className="buttons">
        <button onClick={()=>handleClick("Rock")}>🪨</button>
        <button onClick={()=>handleClick("Paper")}>📃</button>
        <button onClick={()=>handleClick("Scissor")}>✂️</button>
      </div>
    </div>
  )
}

export default App



// function App() {
//   let [userMove,setUserMove]= useState("")
//   let [computerMove, setComputerMove]= useState("")
//   let [tie, setTie] = useState(0)
//   let [userWins, setuserWins] = useState(0)
//   let [computerWins, setcomputerWins] = useState(0)
//   let [move, setMove] = useState(0)
//   let [lastMove, setLastMove] = useState("")
//   let [result, setResult] = useState("")

//   let emojidata = {
//     "Rock": "🪨" ,
//     "Paper": "📃" ,
//     "Scissor": "✂️",
//   }
//   function generateMove(){
//     let value = Math.random()
//     if (value<0.3){
//       return "Rock"
//     }else if(value <0.7){
//       return "Paper"
//     }else{
//       return "Scissor"
//     }
//   }
//   function handleClick(move){
//     setUserMove(move)
//     let compMove = generateMove()
//     setComputerMove(compMove)

//     setLastMove(`You: ${userMove} | Computer: ${compMove}`)

//   if (userMove === compMove) {
//     setResult("It's a tie!")
//     setTie(prev => prev + 1)
//   } else if (
//     (userMove === "Rock" && compMove === "Scissor") ||
//     (userMove === "Paper" && compMove === "Rock") ||
//     (userMove === "Scissor" && compMove === "Paper")
//   ) {
//     setResult("You Won!")
//     setuserWins(prev => prev + 1)
//   } else {
//     setResult("Computer Won!")
//     setcomputerWins(prev => prev + 1)
//   }

//   setMove(prev => prev + 1)
// }

//    function handleReset() {
//     setuserWins(0)
//     setcomputerWins(0)
//     setTie(0)
//     setMove(0)
//     setResult("")
//     setLastMove("")
//   }
//    useEffect(() => {
//     if (move === 5) {
//       setTimeout(() => {
//         if (userWins > computerWins) alert("You Won!!")
//         else if (userWins === computerWins) alert("Game Tied!!")
//         else alert("You Lost!!")

//         handleReset()
//       }, 200)
//     }
//   }, [move])
  

//  return(
//   <div>
//     <h1>Rock Paper Scissors</h1>
//     <h2>Computer : You</h2>
//     <h3>{emojidata[computerMove]}:{emojidata[userMove]}</h3>
//     <h3>{computerWins} : {userWins}</h3>
//     <h3>{result}</h3>
//     <h3>{lastMove}</h3>
//     <h3>Rounds: {move}</h3>
//     <h3>Your Wins: {userWins} | Computer Wins: {computerWins} | Ties: {tie}</h3>
//     <button onClick={()=>{handleClick("Rock")}}>🪨</button>
//     <button onClick={()=>{handleClick("Paper")}}>📃 </button>
//     <button onClick={()=>{handleClick("Scissor")}}>✂️</button>
//   </div>
//  )
// }


// export default App











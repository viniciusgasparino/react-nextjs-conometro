import Title from "../src/components/title/Title"
import Button from "../src/components/button/Button"
import {useState} from "react"

function HomePage () {
  const [startTime,setStarTime] = useState("00:00:00")
  const [show, setSwow] = useState("")

  function handleStart(){
    console.log("Testando")
  }

  function handlePouse(){
    alert("Ola mundo")
  }

  function handleZero(){
    console.log("Testando")
  }



  return (
    <>
      <Title title="Conômetro"></Title>
      <div className="container">
         <div className="center">
            <Title title={startTime}></Title>
            <Button onClick={handleStart} text="Começar"></Button>
            <Button onClick={handlePouse} text="Pausar"></Button>
            <Button onClick={handleZero} text="Zerar"></Button>
         </div> 
      </div>
      <div>
          {show}
      </div>
    </>
  )
}

export default HomePage
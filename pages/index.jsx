import Title from "../src/components/title/Title"
import Button from "../src/components/button/Button"
import {useState} from "react"

function HomePage () {
  //const [startTime,setStartTime] = useState("00")
  const [hours,setHours] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)
  


  function handleStart(){
    setInterval(() => {
      setSeconds(seconds++)
    }, 1000)
    
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
            <Title title={seconds}></Title>
            <Button onClick={handleStart} text="Começar"></Button>
            <Button onClick={handlePouse} text="Pausar"></Button>
            <Button onClick={handleZero} text="Zerar"></Button>
         </div> 
      </div>
      <div>
        
      </div>
    </>
  )
}

export default HomePage
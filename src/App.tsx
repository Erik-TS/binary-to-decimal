import './App.css'

function App() {

  return (
    <div className={"main-container"}>
      <Background />
      <h1>Binary to Decimal</h1>
      <div className={"convertion-area"}>
        <textarea
          className={"binary-area"}
          onChange={(e) => {
            const userInput: string = e.target.value
            const d = (document.querySelector(".decimal-area") as HTMLTextAreaElement)

            d.textContent = binaryToDecimal(userInput).toString()
          }} cols={30} rows={10}>
        </textarea>
        <textarea className={'decimal-area'} readOnly={true} cols={30} rows={10}>
        </textarea>
      </div>
    </div>
  )
}

function Background(){
  return(
    <div className={'page-background'}>
      <div className={"binary-background"}></div>
      <div className={"decimal-background"}></div>
    </div>
  )
}

function binaryToDecimal(binary: string): number {
  const decimal = parseInt(binary, 2)

  return decimal
}

function decimalToBinary(decimal: number): string {
  const logArr: Array<number> = []

  while (decimal > 0) {
    const logaritmo = Math.log2(decimal)
    logArr.push(Math.floor(logaritmo))
    decimal -= (2 ** logArr[logArr.length - 1])
  }

  function generateBinary(logArr: Array<number>): string {
    let binary = ""

    for (let i = 0; i < logArr[0]; i++) {
      const len = binary.length + 1

      for (const log of logArr) {
        if (log === i) binary = binary.padStart(len, "1")
        else if (log < i) break
      }

      if (logArr.includes(i)) {
        binary = binary.padStart(len, "1")
      }
      else {
        binary = binary.padStart(len, "0")
      }
    }

    return binary
  }

  return generateBinary(logArr)
}

export default App

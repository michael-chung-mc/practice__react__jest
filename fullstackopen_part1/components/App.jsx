import { useState } from 'react'

const DateMe = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <p>It is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  )
}

const HelloWorld = () => {
  return (
    <div>
      <p>Hello World </p>
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const HelloBirth = (props) => {
  // const name = props.name;
  // const age = props.age;
  const {name, age} = props
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow-age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const HelloBirthDestructured = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow-age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(
    ()=> setCounter(counter+1),
    1000
  )
  console.log('rendering ...', counter)
  return (
    <div>{counter}</div>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const ButtonClick = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter: ', counter);
  const plusOne = ()=> {
    console.log('increasing, value before', counter);
    setCounter(counter+1);
  }
  const minusOne = ()=> {
    console.log('decreasing, value before', counter);
    setCounter(counter-1);
  }
  const reset = ()=> {
    console.log('reset to 0, value before', counter);
    setCounter(0);
  }
  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={plusOne} text="+"/>
      <Button handleClick={reset} text="zero"/>
      <Button handleClick={minusOne} text="-"/>
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) { 
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history:
      {props.allClicks.join(' ')}
    </div>
  )
}

const SplitClick = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  // const [clicks, setClicks] = useState({
  //   left:0, right:0
  // })
  // {left}
  // <button onClick={() => setLeft(left + 1)}>
  //   left
  // </button>
  // const handleLeftClick = () => {
  //   const newClicks = { 
  //     left: clicks.left + 1, 
  //     right: clicks.right 
  //   }
  //   setClicks(newClicks)
  // }
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const newLeft = left + 1;
    setLeft(newLeft);
    setTotal(newLeft+right);
  }
  //   <button onClick={() => setRight(right + 1)}>
  //   right
  // </button>
  // {right}
  // const handleRightClick = () => {
  //   const newClicks = { 
  //     left: clicks.left, 
  //     right: clicks.right + 1 
  //   }
  //   setClicks(newClicks)
  // }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const newRight = right + 1;
    setRight(newRight)
    setTotal(left+newRight);
  }
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left"/>
      <Button handleClick={handleRightClick} text="right"/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

const App = (props) => {
  const people = [{name: 'Maya', age:4},{name:"Peter", age:10}];
  return (
    <>
      {/* <HelloBirth name={people[0].name} age={people[0].age}/> */}
      {/* <HelloBirthDestructured name={people[0].name} age={people[0].age}/> */}
      {/* <Counter counter={props.counter}/> */}
      {/* <Counter /> */}
      {/* <ButtonClick/> */}
      <SplitClick/>
    </>
  )
}

export default App

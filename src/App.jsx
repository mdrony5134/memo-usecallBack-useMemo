import { useCallback, useMemo, useState } from 'react';
import './App.css'
import Title from './component/title'
import Show from './component/Show';
import Button from './component/Button';
function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const incrementByOne = useCallback(() =>{
    setCount1((pre)=> pre+1)
  }, [])

  const incrementByFive= useCallback(() =>{
    setCount2((pre)=> pre + 5)
  }, [])

  const isEvenOdd = useMemo(() =>{
    let i = 0;
    while(i < 1000000000) i += 1
    return count1 % 2 == 0
}, [count1])

  return (
    <div>

       <Title/>
       <Show {...{count: count1, title: "Count 1"}}/>
       <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
       <Button handelClick ={incrementByOne}>IncrementByOne</Button>
       <hr />
       <Show {...{count: count2, title: "Count 2"}}/>
       <Button handelClick={incrementByFive}>IncrementByFive</Button>

    </div>
  )
}

export default App

import { memo } from "react"

const Button = ({handelClick, children}) => {
    console.log(`button rendering ${children}`)
  return (
    <div>
        <button type="button" onClick={handelClick}>
            {children}
        </button>
    </div>
  )
}

export default memo(Button)
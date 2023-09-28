import { memo } from 'react';
const Show = ({count, title}) => {
    console.log(`rendering ${title}..`)
  return (
    <div>
        <p>
            {title} is  {count}
        </p>
    </div>
  )
}

export default memo(Show)
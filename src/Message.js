import React,{ useState } from 'react';  

export  function Message(){


    let [count, setCount] = useState(9)

    return(
        <div>
            <h1>The value of counter variable is {count}</h1>
            <button onClick={()=> setCount(--count)}>Updated</button>
        </div>
    )
}

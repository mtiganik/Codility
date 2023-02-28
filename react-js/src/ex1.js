import React from "react"

function Example1(){
    const [data,setData] = React.useState("Hello")

    return(
        <p>{data}</p>
    )
}

export default Example1
"use client"
function Error({error,reset}){

    return(
        <div>

this ain't loading up :{error.message}
            <button onClick={()=>reset()}>reload </button>
        </div>
    )
}

export default Error;
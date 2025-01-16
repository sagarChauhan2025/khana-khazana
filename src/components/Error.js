import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <>
        <h2> OOPS !!!</h2>
        <h3>Something went Wrong</h3>
        <h4>{err?.status} : {err?.statusText}</h4>
        </>
    )
}
export default Error;
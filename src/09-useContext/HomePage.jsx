import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>HomePage { user?.name }</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button 
        className="btn btn-primary"
        onClick={ () => setUser({ 
          id: "123", name: "John Doe", email: "john.doe@example.com" 
        }) 
        } 
      >
        Establecer Usuario
      </button>
      
    </>
  )
}
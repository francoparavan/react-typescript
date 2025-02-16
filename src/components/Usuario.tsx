import { useState } from "react"

interface User {
    uid: string,
    name?: string,

}

// const tempUser: User = {
//     uid: 'CCC222',
//     name: 'Marcelo Lombo'
// }

const Usuario = () => {

    const [user, setUser] = useState<User>() // Dentro de () iria el tempUser para mostrarlo por default

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Federico Palazo'
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario:</h3>
            <button onClick={login} className="btn btn-outline-primary">
                Login
            </button>
            <br /><br />
            {(!user) ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
        </div>
    )
}

export default Usuario

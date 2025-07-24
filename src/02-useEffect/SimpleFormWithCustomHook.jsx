import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const SimpleFormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password } = formState;

    return (
        <>
            {

                (username === 'carlos') && <Message />

            }
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="carlos@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} class="btn btn-primary">Borrar</button>
        </>
    )
}

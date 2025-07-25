import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, decrement, increment, reset } = useCounter()

    return (
        <>
            <div>Counter with hook: {counter}</div>
            <hr />

            <button onClick={()=>increment()} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={decrement} className="btn btn-primary">-1</button>
        </>
    )
}

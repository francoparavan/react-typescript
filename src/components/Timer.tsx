import { useEffect, useState } from "react"

type TimerArgs = {
    milisegundos: number
}

const Timer = ({ milisegundos }: TimerArgs) => {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        console.log("useEffect ejecutado");
        const intervalo = setInterval(() => { setSegundos(s => s + 1) }, milisegundos);
        return () => {
            console.log("Limpiando intervalo");
            clearInterval(intervalo)
        };
    }, [milisegundos])


    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}

export default Timer

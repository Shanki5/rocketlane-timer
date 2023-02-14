import { useEffect, useState } from "react";

function App() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (!isPaused) {
            interval = setInterval(() => {
                setTime((t) => {
                    return t + 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isPaused]);

    const handleClick = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div>
            <p>{time}</p>
            <button onClick={handleClick}>
                {isPaused ? "start" : "pause"}
            </button>
        </div>
    );
}

export default App;

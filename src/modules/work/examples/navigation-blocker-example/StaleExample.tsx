import React, { useEffect, useRef, useState } from "react";

export const StaleExample: React.FC = () => {
    const [count, setCount] = useState(0);
    const callbackRef = useRef<() => void>();
    const countRef = useRef(0);

    const logCountCallback = () => {
        console.log("state value: ", count);
        console.log("ref value: ", countRef.current);
    };

    useEffect(() => {
        if (count === 1) {
            callbackRef.current = logCountCallback;
        }
    }, [count]);

    const runCallbacks = () => {
        callbackRef?.current?.();
    };

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                    countRef.current = count + 1;
                }}
            >
                Add counter
            </button>
            Counter: {count}
            <button onClick={runCallbacks}>Log</button>
        </div>
    );
};

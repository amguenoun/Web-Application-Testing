import useLocalStorage from './useLocalStorage'

const useCounter = (counterType) => {
    const [counter, setCounter] = useLocalStorage(counterType, 0);

    return [counter, setCounter];
}

export default useCounter;
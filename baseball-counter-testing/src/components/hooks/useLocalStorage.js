import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const handleValueChange = (newValue) => {
        localStorage.setItem(key, newValue);
        setStoredValue(newValue);
    }

    return [storedValue, handleValueChange];
}

export default useLocalStorage;
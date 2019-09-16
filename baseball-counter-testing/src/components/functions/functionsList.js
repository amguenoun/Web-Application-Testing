export const incrementByOne = (currentValue) => {
    return currentValue + 1;
}

export const translateBase = (hits) => {
    console.log(hits)
    if (hits === 1) {
        return `${hits}st Base`;
    }
    else if (hits === 0) {
        return hits;
    }
    else if (hits === 3) {
        return `${hits}rd Base`;
    }
    else {
        return `${hits}nd Base`;
    }
}

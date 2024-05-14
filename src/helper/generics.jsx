export const toUpperCased = (string) => {
    return string.toUpperCase();
}

export const isNumber = (arg) => {
    const n = typeof arg;
    return n;
}

export const sum = (a, b) => {
    return a + b;
}

export const isBoolean = (isTruth) => {
    return isTruth
}

export const addToobject = ({ type, nums }) => {
    const objects = {
        nama: 'jhon doe'
    }
    objects[type] = nums;
    return objects;
}

export const location = (location) => {
    return location
}

export const isLoggedIn = () => {
    const isToken = localStorage?.getItem('TOKEN');
    if (isToken) return true;
    return false;
}
export const toUpperCased = (string) => {
    return string.toUpperCase();
}

export const location = (location) => {
    return location
}

export const isLoggedIn = () => {
    const isToken = localStorage?.getItem('TOKEN');
    if (isToken) return true;
    return false;
}
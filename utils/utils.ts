const IS_SERVER = typeof window === "undefined";

export const getURL = (path: string = '') => {
    const baseURL = IS_SERVER
        ? process.env.URL!
        : window.location.origin;
    //console.log(path, baseURL);
    //return new URL(path, baseURL).toString();
    return `${baseURL}${path}`
}
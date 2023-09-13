const IS_SERVER = typeof window === "undefined";

export const getURL = (path: string = '') => {
    const baseURL = IS_SERVER
        ? process.env.NEXT_PUBLIC_SITE_URL!
        : window.location.origin;
    //console.log(path, baseURL);
    //return new URL(path, baseURL).toString();
    return `${baseURL}${path}`
}
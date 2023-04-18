export function getCookieFromHeader(cookies: string | undefined, name: string): string | null {
    const nameLenPlus = (name.length + 1);

    if (cookies) {
        return cookies
            .split(';')
            .map(c => c.trim())
            .filter(cookie => {
                return cookie.substring(0, nameLenPlus) === `${name}=`;
            })
            .map(cookie => {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || null;
    } else {
        return null;
    }
}
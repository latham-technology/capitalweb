export default function (string) {
    let hash = 0

    for (let i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i)
        hash = (hash << 5) - hash + char
    }

    return (hash >>> 0).toString(36).padStart(7, '0')
}
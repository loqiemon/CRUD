
export function useCheck (value: string | undefined): boolean {
    if (value === undefined) {
        return false
    }
    if (value.length < 4) {
        return false
    }

    return true
}
export const required = (value: string) => value ? undefined : 'Required'

export const maxLengthC = (maxLength: number) => (value: string) => {
    return value.length < maxLength ? undefined : 'Field is required'
}

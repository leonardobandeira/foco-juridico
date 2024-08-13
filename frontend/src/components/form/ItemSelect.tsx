export default function Option({ classes = '', valor = '', texto = '' }) {
    return (
        <option className={`text-black`} value={valor}>{texto}</option>
    )
}
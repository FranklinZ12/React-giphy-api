
const Input = ({ placeholder, name, value, type, required, onChange }) => {
    return (
        <input
            required={required}
            type={type}
            name={name}
            placeholder={placeholder}
            className='p-2 border border-indigo-200 focus:outline-none focus:border-blue-500 rounded-md shadow-sm w-full mb-2'
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
const Input = ({ value, onSearch, placeholder }) => {
  return (
    <div className="w-full mb-4">
      <input 
        type="text" 
        value={value}
        className="border border-gray-200 w-full rounded p-2" 
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  )
}

export default Input

const Input = ({ value, onSearch }) => {
  return (
    <div className="w-full">
      <input 
        type="text" 
        value={value}
        className="border border-gray-200 w-full rounded p-2" 
        placeholder="Search companies by name..."
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  )
}

export default Input

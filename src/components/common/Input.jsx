const Input = ({ value, onSearch, placeholder }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all "
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        aria-label={placeholder}
      />
    </div>
  );
};

export default Input;

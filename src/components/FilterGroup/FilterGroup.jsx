import './FilterGroup.css';

function FilterGroup({ title, inputType = 'checkbox', name, options, onChange }) {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-group-options">
        {options.map((option, index) => {
          const val = option.value || option.text;
          return (
            <label key={index} className="filter-group-item">
              <input
                type={inputType}
                name={name || title}
                value={val}
                onChange={() => onChange && onChange(val)}
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default FilterGroup;

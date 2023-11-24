interface SwitchType {
  id: number;
}

const Switch = ({ id }: SwitchType) => {
  return (
    <label htmlFor={`toggle-${id}`} className="toggle-label">
      <input type="checkbox" id={`toggle-${id}`} className="toggle-input" />
      <div className="toggle-fill"></div>
    </label>
  );
};

export default Switch;

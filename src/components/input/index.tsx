type InputProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  title: string
  name: string
  color?: string
}

const Input = ({ handleChange, value, title, name, color }: InputProps) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  )
}

export default Input

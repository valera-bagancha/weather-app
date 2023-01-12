import { FC } from 'react'
interface IProps {
  onChange: () => void
  checked: boolean
}

export const ToggleSwitch: FC<IProps> = ({ onChange, checked }) => (
  <div className="toggle-switch">
    <label className="mode-system">
      <input
        className="input-switch"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span className="slider-system" />
    </label>
  </div>
)

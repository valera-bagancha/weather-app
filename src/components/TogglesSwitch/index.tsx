import { FC } from 'react'
interface IProps {
  onChange: () => void
}

export const ToggleSwitch: FC<IProps> = ({onChange}) => {
  return (
    <div className="toggle-switch">
      <label className="mode-system">
        <input className="input-switch" type="checkbox" onChange={onChange}/>
        <span className="slider-system"/>
      </label>
    </div>
  )
}

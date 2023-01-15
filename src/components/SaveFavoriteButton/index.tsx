import { FC } from 'react'

interface IProps {
  checked: boolean;
  onChange: () => void;
}

export const SaveFavoriteButton: FC <IProps> = ({checked, onChange}) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        id="id-of-input"
        checked={checked}
        onChange={onChange}
      />
      <i className="glyphicon glyphicon-star-empty" />
      <i className="glyphicon glyphicon-star" />
    </label>
  )
}

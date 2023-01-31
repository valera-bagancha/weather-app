import { FC } from 'react'

interface IProps {
  checked: boolean;
  onChange: () => void;
  className: string;
}

export const SaveFavoriteButton: FC <IProps> = ({checked, onChange, className}) => {
  return (
    <label className={className}>
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

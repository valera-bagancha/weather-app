import { FC } from 'react'

interface IProps {
  imgPreviewContent: string
  title: string
  value: string
}

export const ForecastContentCard: FC<IProps> = ({
  title,
  value,
  imgPreviewContent,
}) => (
  <div className="forecast-content-card">
    <div className="icon-title">
      <span className="material-symbols-outlined">{imgPreviewContent}</span>
      <span>{title}</span>
    </div>
    {value}
  </div>
)

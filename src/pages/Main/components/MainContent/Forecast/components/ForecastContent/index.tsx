import { FC } from 'react'
import { forecastPreviews } from '../../../../../constants/forecastPreviews'

import { ForecastContentCard } from './ForecastContentCard'

interface IProps {
  current: any
}

export const ForecastContent: FC<IProps> = ({ current }) => {
  console.log(current);
  
  const ForecastContentList = forecastPreviews.map(
    ({ imgPreviewContent, title, apiKey }) => (
      <ForecastContentCard
        key={title}
        title={title}
        value={`${current?.[apiKey]}` || ''}
        imgPreviewContent={imgPreviewContent}
      />
    )
  )

  return <div className="forecast-content">{ForecastContentList}</div>
}

import { FC, useContext } from 'react'

import { forecastPreviews } from '../../../../../constants/forecastPreviews'
import { UnitContext } from '../../../../../../../context/unitContext'
import { ForecastContentCard } from './ForecastContentCard'
import { IForecastPreview } from '../../../../../../../types/main/forecastPreview'

interface IProps {
  current: IForecastPreview
}

export const ForecastContent: FC<IProps> = ({ current }) => { 
 const { unit } = useContext(UnitContext)

  const  forecastPreviewsArr = forecastPreviews(unit)
    
  const ForecastContentList = forecastPreviewsArr.map(
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
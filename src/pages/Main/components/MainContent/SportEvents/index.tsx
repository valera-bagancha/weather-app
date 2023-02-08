import { useTranslation } from 'react-i18next'
import { FC } from 'react'

import { SportEvent } from './SportEvent'
import { sportEventPreview } from '../../../constants/sportEventPreviews'
import { IFootball } from '../../../../../types/city/sportEvents'
import { isEmptyFavoriteSportEventsSelector } from '../../../../../redux/favorite/selectors'
import { useSelector } from 'react-redux'

interface IProps {
  currentSportEvent: IFootball
}

export const SportEvents: FC<IProps> = ({ currentSportEvent }) => {
  const isEmptyFavoriteSportEvents = useSelector(
    isEmptyFavoriteSportEventsSelector
  )

  const { t } = useTranslation()

  const SportEventList = sportEventPreview.map(({ title, apiKey }) => (
    <SportEvent
      key={title}
      title={title}
      value={`${currentSportEvent?.[apiKey]}` || ''}
    />
  ))

  return (
    <div className="sport-event">
      {isEmptyFavoriteSportEvents ? (
        <div className="empty-main-forecast">{t('empty-field')}</div>
      ) : (
        <>
          <div className="title-kind-sports">
            {t('sportEvent.mainSportEventTitle')}
          </div>
          <div className="data-of-event">{SportEventList}</div>
        </>
      )}
    </div>
  )
}

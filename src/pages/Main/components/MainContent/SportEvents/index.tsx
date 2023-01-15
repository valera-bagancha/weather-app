import { useTranslation } from 'react-i18next'
import { FC } from 'react'

import { SportEvent } from './SportEvent'
import { sportEventPreview } from '../../../constants/sportEventPreviews'

interface IProps {
  currentSportEvent: any
  isEmpty: boolean
}

export const SportEvents: FC<IProps> = ({ currentSportEvent, isEmpty }) => {
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
      {isEmpty ? (
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

import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type Handler = (e: any) => void

interface IProps {
  value: string
  changeHandler: Handler
  searchForecast: Handler
}

export const Form: FC<IProps> = ({ value, changeHandler, searchForecast }) => {
  const { t } = useTranslation()

  return (
    <form>
      <div className="input-header">
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          onKeyDown={searchForecast}
          placeholder={`${t('inputPlaceholder')}`}
        />
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
    </form>
  )
}

import { FC, useEffect, useState, useMemo, SyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes/routes'
import { historySearchCity } from '../../../../redux/searchHistory/selectors'
import { userIdSelector } from '../../../../redux/auth/selectors'
import { IHistory } from '../../../../types/history'

export const Form = () => {
  const [value, setValue] = useState('')
  const [autocomplete, setAutocomplete] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const history = useSelector(historySearchCity)
  const currentUser = useSelector(userIdSelector)
  
  const filteredCity = useMemo(() => {
    const currentHistoryUser = history.filter((user: IHistory) => currentUser === user?.userId)  
    return currentHistoryUser.filter((city: IHistory) => value.toLowerCase() === city.city.slice(0, value.length).toLowerCase())
  }, [history, currentUser, value])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)


  const searchForecast = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return

    e.preventDefault()
    navigate(`${ROUTES.CITY}/${value.toLowerCase()}`)
  }

  const itemClickHandler = (e: SyntheticEvent<HTMLLIElement> ) => { 

    const target = e.target as HTMLElement;

    const textContent = target.textContent;

    if (!textContent) return

    setValue(textContent)

    setAutocomplete(true)
  }

  useEffect(() => {
    if (autocomplete) navigate(`${ROUTES.CITY}/${value.toLowerCase()}`)
  }, [autocomplete, value])

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
        <ul className="autocomplete">
          {value ? (
            <>
              {filteredCity.map((city: IHistory) => (
                <li
                  key={city.city}
                  className="autocomplete-item"
                  onClick={itemClickHandler}
                >
                  {city.city}
                </li>
              ))}
            </>
          ) : null}
        </ul>
      </div>
    </form>
  )
}

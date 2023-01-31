import { FC, useEffect, useState, useMemo, SyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes/routes'
import { historySearchCity } from '../../../../redux/searchHistory/selectors'
import { userID } from '../../../../redux/auth/selectors'

type Handler = (e: any) => void

interface IProps {
  value: any
  setValue: any
  changeHandler: Handler
  searchForecast: Handler
}

// interface IPersonalUserHistory {
//   history: {
//     city: string;
//     idUser: number;
//   }
// }

export const Form: FC<IProps> = ({
  value,
  changeHandler,
  searchForecast,
  setValue,
}) => {
  
  const [autocomplete, setAutocomplete] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const history = useSelector(historySearchCity)
  const currentUser = useSelector(userID)
  
  const filteredCity = useMemo(() => {
    const currentHistoryUser = history.filter((user: any) => currentUser === user?.idUser)  
    return currentHistoryUser.filter((city: any) => value.toLowerCase() === city.city.slice(0, value.length).toLowerCase() )
  }, [history, currentUser, value])

  // const filteredCity = useMemo(() => {
  //   return history.filter((city: any) => value.toLowerCase() === city.city.slice(0, value.length).toLowerCase());

  // }, [history, value])

  const itemClickHandler = (e: any ) => { // SyntheticEvent<HTMLLIElement>
    // const { target } = e
    // if (target.textContent) {
    //   setValue(target.textContent);     
    // }     
    // setAutocomplete(true) 

    // if (!(e.target instanceof HTMLElement)) return
    // setValue((e.target as HTMLElement).textContent)

    // setAutocomplete(true)

    setValue(e.target.textContent)

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
              {filteredCity.map((city: any) => (
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

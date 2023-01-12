import { cities } from '../../constants/cardCities'
import { sportCard } from '../../constants/sportCard'
import { CardCities } from '../CardCities'
import { CardSports } from '../CardSports'
import { useTranslation } from 'react-i18next'

export const Favorite = () => {
  const CitiesList = cities.map(({ city }) => (
    <CardCities key={city} city={city} />
  ))

  const SportList = sportCard.map(({ title }) => (
    <CardSports key={title} title={title} />
  ))

  const { t } = useTranslation()

  return (
    <>
      <div className="title-of-favorites">{t('favoriteMain.titleFavorites')}</div>
      <div className="title-cites">{t('favoriteMain.favoritesCity')}</div>
      {CitiesList}
      <div className="sports">
        <div className="title-cites">{t('favoriteMain.favoritesSportEvent')}</div>
        {SportList}
      </div>
    </>
  )
}

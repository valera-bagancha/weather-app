import { cities } from '../../constants/cardCities'
import { sportCard } from '../../constants/sportCard'
import { CardCities } from '../CardCities'
import { CardSports } from '../CardSports'

export const Favorite = () => {
  const CitiesList = cities.map(({ city }) => (
    <CardCities key={city} city={city} />
  ))

  const SportList = sportCard.map(({ title }) => (
    <CardSports key={title} title={title} />
  ))

  return (
    <>
      <div className="title-of-favorites">Favorites city/sports events</div>
      <div className="title-cites">Favorites cites:</div>
      {CitiesList}
      <div className="sports">
        <div className="title-cites">Sports events:</div>
        {SportList}
      </div>
    </>
  )
}

import { cardValue } from '../../constants/cardValue'
import { CardTitleValue } from '../CardTitleValue'

export const TitlesValue = () => {
  const cardValueList = cardValue.map(value => (
    <CardTitleValue key={value.time} {...value} />
  ))

  return <div className="box-titles-values">{cardValueList}</div>
}

import { titles } from '../../constants/titles'
import { CardTitles } from '../CardTitles'

export const TitlesCard = () => {
  const titleList = titles.map(({ title, className }) => (
    <CardTitles key={title} title={title} className={className} />
  ))

  return <div className="vertical-box-titles">{titleList}</div>
}

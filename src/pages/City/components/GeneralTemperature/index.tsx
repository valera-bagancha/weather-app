import { useTranslation } from 'react-i18next'

export const GeneralTemperature = ({location, currentDayData }: any) => {
  const arr = currentDayData?.hour
 
  const temp = arr?.reduce((sum: any, i: any) => sum + i.temp_c, 0) / (currentDayData?.hour?.length)
  const tempFeelsLike = arr?.reduce((sum: any, i: any) => sum + i.feelslike_c, 0) / (currentDayData?.hour?.length)

  const currentGeneralTemp = Math.round(temp)
  const currentGeneralTempFeelsLike = Math.round(tempFeelsLike)
  
  const { t } = useTranslation()

  return (
    <div className="title-main">
      <div className="text-title-main">
        {t('city.weather')} {location?.name}, <br/>{currentDayData?.date}
      </div>
      <div className="description-title-main">{t('city.nextHourWeather')}</div>
      <div className="temperature-icon-title-main">
        <div className="temperature-title-main">{`${currentGeneralTemp}`}</div>
        <div className="box">
          <img
            className="icon-title-main"
            src={currentDayData?.day?.condition?.icon}
            alt="Oops"
          />
        </div>
      </div>
      <div className="feels-title-main">
        {t('city.feelsLike')} {`${currentGeneralTempFeelsLike}`}<sup>&#186;</sup>
      </div>
    </div>
  )
}

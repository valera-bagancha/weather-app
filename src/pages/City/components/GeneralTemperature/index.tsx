import { useContext, FC } from 'react'
import { useTranslation } from 'react-i18next'

import { UnitContext } from '../../../../context/unitContext'
import { IForecastDay, IHour } from '../../../../types/city/forecast';

interface IProps {
  location?: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  currentDayData: IForecastDay
}

export const GeneralTemperature: FC<IProps> = ({location, currentDayData }) => {      
  const hours = currentDayData?.hour
 
  const { t } = useTranslation()
  const { unit } = useContext(UnitContext)
   
  const temp = hours?.reduce((sum: number, i: IHour ) => sum + (unit ? i.temp_f : i.temp_c), 0) / (currentDayData?.hour?.length) || 0
  const tempFeelsLike = hours?.reduce((sum: number, i: IHour) => sum + (unit ? i.feelslike_f : i.feelslike_c), 0) / (currentDayData?.hour?.length)

  const currentGeneralTemp = Math.round(temp)
  const currentGeneralTempFeelsLike = Math.round(tempFeelsLike)  

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

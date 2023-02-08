import  mainDay  from '../../../videos/mainDay.mp4'
import  rain  from '../../../videos/rain.mp4'
import  snow  from '../../../videos/snow.mp4'
import  moderateSnow  from '../../../videos/moderateSnow.mp4'
import  overcast  from '../../../videos/overcast.mp4'
import  mist  from '../../../videos/mist.mp4'

interface IForecast {
  [key: string]: string
}

export const forecastBackground: IForecast = {
  default: mainDay,
  clear: mainDay,
  mist: mist,
  sunny: mainDay,
  lightSnow: snow,
  overcast: overcast,
  cloudy: overcast,
  partlyCloudy: overcast,
  lightRainShower: rain,
  moderateSnow: moderateSnow,
  patchyLightSnow: snow,
} 
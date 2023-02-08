export const forecastPreviews = (unit: boolean) => 
  [
  {
    imgPreviewContent: 'cloud',
    title: 'Cloud',
    apiKey: 'cloud',
  },
  {
    imgPreviewContent: 'air',
    title: 'Wind',
    apiKey: `${unit ? 'wind_mph' : 'wind_kph'}`,
  },
  {
    imgPreviewContent: 'compress',
    title: 'Pressure',
    apiKey: `${unit ? 'pressure_in' : 'pressure_mb'}`,
  },
  {
    imgPreviewContent: 'infrared',
    title: 'UV index',
    apiKey: 'uv',
  },
  {
    imgPreviewContent: 'humidity_mid',
    title: 'Humidity',
    apiKey: 'humidity',
  },
]
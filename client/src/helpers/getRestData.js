export const getYandexRestData = (rest) => {

  const [lon, lat] = rest.geometry.coordinates
  const { name, CompanyMetaData } = rest.properties
  const {
    Hours: {
      text: hours,
      Availabilities: timetable
    },
    Phones,
    address,
    id
  } = CompanyMetaData
  const [{ formatted: phone }] = Phones

  return { lat, lon, id, name, address, hours, phone, timetable }

}

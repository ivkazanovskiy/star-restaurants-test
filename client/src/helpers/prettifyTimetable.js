export const prettifyTimetable = (timetable) => {
  const translator = {
    'Monday': 'Понедельник',
    'Tuesday': 'Вторник',
    'Wednesday': 'Среда',
    'Thursday': 'Четверг',
    'Friday': 'Пятница',
    'Saturday': 'Суббота',
    'Sunday': 'Воскресенье'
  }

  const delSec = (timeString) => {
    return timeString.slice(0, 5)
  }

  const allDaysList = {}

  for (const daysPack of timetable) {
    const [{ from, to }] = daysPack.Intervals
    if (daysPack.Everyday) {
      for (const russianDay of Object.values(translator)) {
        const schedule = `${delSec(from)} - ${delSec(to)}`
        allDaysList[russianDay] = schedule
      }
      break;
    }
    for (const day in daysPack) {
      if (day !== 'Intervals') {
        const russianDay = translator[day]
        const schedule = (daysPack[day]) ? `${delSec(from)} - ${delSec(to)}` : 'Закрыто'
        allDaysList[russianDay] = schedule
      }
    }
  }

  const allDaysArray = []

  for (const russianDay of Object.values(translator)) {
    allDaysArray.push(`${russianDay}: ${allDaysList[russianDay]}`)

  }

  return allDaysArray
}

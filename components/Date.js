import { parseISO, format } from 'date-fns'

export function DateDay({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export function DateMonth({ dateString }) {
  console.log(dateString)
  const date = parseISO(dateString)
  console.log(date)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export const dateFormat = (date: Date) => new Date(date).toLocaleString('en-US', {
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
})
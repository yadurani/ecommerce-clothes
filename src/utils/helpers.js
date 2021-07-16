export const discount = (original, price) => {
  const exp = Math.pow(10, 0)
  const percentageTotal = 100
  const calculatePercentagePrice =  ((price / original) * percentageTotal)
  const discount = calculatePercentagePrice - percentageTotal
  
  return parseInt(discount * exp)
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-ES").format(price)
}

export const listEmpty = (number) => {
  const array = []
  for (let index = 0; index < number; index++) {
    array.push(index)
  }
  return array
} 
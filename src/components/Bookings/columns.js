export const fields = [
  'id',
  {
    label: 'Клиент',
    key: 'customer.fullName'
  },
  {
    label: 'Зал',
    key: 'room.name'
  },
  {
    label: 'Цель',
    key: 'eventType'
  },
  {
    label: 'Оплата, р.',
    key: 'amount/prices'
  },
  {
    label: 'Гости',
    key: 'guestsCount'
  },
  {
    label: 'Допы',
    key: 'extras.total ? extras.total : ""'
  },
  {
    label: 'Дата',
    key: 'date'
  },
  {
    label: 'Коммент',
    key: 'customerComment'
  }
]

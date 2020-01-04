export const getters = {
  getCustomers: (state) => {
    if (state.customers) {
      return state.customers.items
    }
  },
  getBookings: (state) => {
    if (state.bookings) {
      return state.bookings.items
    }
  }
}

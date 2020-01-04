export const getters = {
  getCustomers: (state) => {
    if (state.customers) {
      return state.customers.items
    }
  }
}

import { create } from 'zustand'

const useCounterStore = create((set) => ({
  // states
  count: 0,

  //actions
  setCount: (count) => set((state) => ({ count }))
}))

export {
  useCounterStore
}

import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'

import { COFFEES } from '../data/coffee'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  categories: string[]
  price: number
  imgUrl: string
  quantity: number
}

export interface CartItemsProps {
  id: string
  quantity: number
}

interface CoffeesContextType {
  coffees: CoffeeProps[]
  cartItems: CartItemsProps[]
  setCartItems: (cartItems: CartItemsProps[]) => void
  addCoffeeToCart: (cartItem: CartItemsProps) => void
  removeCoffeeFromCart: (coffeeId: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

const coffees = COFFEES

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-items-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  function addCoffeeToCart(cartItem: CartItemsProps) {
    const coffeeAlreadyExists = cartItems.findIndex(
      (item) => item.id === cartItem.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(cartItem)
      } else {
        draft[coffeeAlreadyExists].quantity += cartItem.quantity
      }
    })

    setCartItems(newCart)
  }

  function removeCoffeeFromCart(cartId: string) {
    const newCartItems = cartItems.filter((item) => item.id !== cartId)

    setCartItems(newCartItems)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        cartItems,
        setCartItems,
        addCoffeeToCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

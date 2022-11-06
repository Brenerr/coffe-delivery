import produce from 'immer'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityInput } from '../../../../../components/QuantityInput'
import {
  CoffeeProps,
  CoffeesContext,
} from '../../../../../contexts/CoffeesContext'

export function CartCoffee(coffee: CoffeeProps) {
  const { cartItems, setCartItems, removeCoffeeFromCart } =
    useContext(CoffeesContext)

  function handleIncrease() {
    const coffeeIndex = cartItems.findIndex((item) => item.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      draft[coffeeIndex].quantity++
    })

    setCartItems(newCart)
  }

  function handleDecrease() {
    const coffeeIndex = cartItems.findIndex((item) => item.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      draft[coffeeIndex].quantity--
    })

    setCartItems(newCart)
  }

  function formattedPrice(price: number): string {
    return String((price / 100).toFixed(2)).replace('.', ',')
  }

  return (
    <div key={coffee.id} className="grid grid-cols-4 grid-rows-2 gap-x-5">
      <img src={coffee.imgUrl} className="row-span-2" alt="" />
      <p className="row-span-1 col-span-2 text-base-subtitle">{coffee.name}</p>
      <strong className="row-span-1 col-span-1 text-end text-base-text before:content-['R$'] before:mr-1">
        {formattedPrice(coffee.price)}
      </strong>
      <div className="row-span-1 col-span-2 flex items-center gap-2">
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={coffee.quantity}
        />
        <button
          onClick={() => removeCoffeeFromCart(coffee.id)}
          className="row-span-1 col-span-2 flex items-center justify-center text-xs text-base-text uppercase bg-base-button hover:bg-base-hover rounded-md gap-1 py-3 px-4"
        >
          <Trash fontSize="1rem" className="text-primary" />
          Remover
        </button>
      </div>
    </div>
  )
}

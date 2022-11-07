import { useContext, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  CoffeeProps,
  CoffeesContext,
} from '../../../../contexts/CoffeesContext'
import { CartCoffee } from './CartCoffee'

export function Cart() {
  const { coffees, cartItems } = useContext(CoffeesContext)
  const { watch } = useFormContext()

  const [cartList, setCartList] = useState<CoffeeProps[]>([])
  const [totalItemsPrice, setTotalItemsPrice] = useState<number>(0)

  const shipping = totalItemsPrice / 4

  function formattedPrice(price: number): string {
    return String((price / 100).toFixed(2)).replace('.', ',')
  }

  const street = watch('street')

  useEffect(() => {
    const updatedCartList: CoffeeProps[] = cartItems.map((item) => {
      const coffee = coffees.find((coffee) => coffee.id === item.id)!

      const newItem = {
        ...coffee,
        quantity: item.quantity,
      }
      return newItem
    })

    const sumPriceItems = updatedCartList.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      0,
    )

    setCartList(updatedCartList)
    setTotalItemsPrice(sumPriceItems)
  }, [coffees, cartItems])

  return (
    <div className="flex flex-col bg-base-card gap-8 p-10 rounded-md rounded-tr-[2.75rem] rounded-bl-[2.75rem] divide-y divide-base-button">
      {cartList.map((item) => {
        return <CartCoffee key={item.id} {...item} />
      })}

      <div className="flex flex-col gap-6 pt-8">
        <div className="grid grid-cols-2 grid-rows-3 gap-3 text-sm text-base-text">
          <p>Total de itens</p>
          <p className="text-end before:content-['R$'] before:mr-1">
            {formattedPrice(totalItemsPrice)}
          </p>
          <p>Entrega</p>
          <p className="text-end before:content-['R$'] before:mr-1">
            {formattedPrice(shipping)}
          </p>
          <strong className="text-xl text-base-subtitle">Total</strong>
          <strong className="text-xl text-base-subtitle text-end before:content-['R$'] before:mr-1">
            {formattedPrice(shipping + totalItemsPrice)}
          </strong>
        </div>

        <input
          type="submit"
          className="font-bold text-sm text-white uppercase px-2 py-3 rounded-md bg-secondary hover:bg-secondary-dark transition w-full"
          value={'Confirmar pedido'}
        />
      </div>
    </div>
  )
}

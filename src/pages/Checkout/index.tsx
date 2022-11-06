import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { Success } from './components/Success'
import Empty from '../../assets/empty.svg'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  const { cartItems } = useContext(CoffeesContext)

  const isOpen = false
  return (
    <div className="container py-10">
      {isOpen ? (
        <Success />
      ) : cartItems.length > 0 ? (
        <div className="grid grid-cols-5 gap-8">
          <section className="flex flex-col col-span-full lg:col-span-3 gap-4">
            <h2 className="text-lg font-baloo font-bold text-base-subtitle">
              Complete seu pedido
            </h2>
            <Address />
            <Payment />
          </section>

          <section className="flex flex-col col-span-full lg:col-span-2 gap-4">
            <h2 className="text-lg font-baloo font-bold text-base-subtitle">
              Cafés selecionados
            </h2>
            <Cart />
          </section>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-secondary-dark font-baloo font-extrabold">
            Seu carrinho está vazio
          </h2>
          <p className="text-base-text">
            Parece que você ainda não adicionou nada ao seu carrinho
          </p>
          <img src={Empty} alt="" className="my-10 w-full max-w-md" />
          <NavLink
            to="/"
            className="text-white font-bold bg-primary p-3 rounded-md"
          >
            Ir para a loja
          </NavLink>
        </div>
      )}
    </div>
  )
}

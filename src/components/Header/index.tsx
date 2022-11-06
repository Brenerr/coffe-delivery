import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { Badge } from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { cartItems } = useContext(CoffeesContext)
  return (
    <header className="flex justify-center sticky top-0 py-8 bg-zinc-50">
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="h-10">
          <img src={logo} alt="" className="h-full" />
        </NavLink>

        <nav className="flex items-center gap-3">
          <button
            title="Location"
            className="flex items-center justify-center text-sm bg-primary-light text-primary-dark rounded-md gap-1 p-2"
          >
            <MapPin
              fontSize="1.375rem"
              weight="fill"
              className="text-primary"
            />
            Porto Alegre
          </button>
          <NavLink
            to="/checkout"
            title="Ir para o carrinho"
            className="rounded-md p-2 bg-secondary-light text-secondary-dark relative"
          >
            <ShoppingCart fontSize="1.375rem" weight="fill" />
            {cartItems.length > 0 && (
              <Badge className="text-xs font-bold text-white bg-secondary-dark flex items-center justify-center text-center">
                {cartItems.length}
              </Badge>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { LayoutContent } from '../../layouts/DefaultLayout/styles'

export function Header() {
  return (
    <header className="flex justify-center sticky top-0 py-8 bg-zinc-50">
      <LayoutContent className="items-center justify-between">
        <NavLink to="/" className="h-10">
          <img src={logo} alt="" className="h-full" />
        </NavLink>

        <nav className="flex items-center gap-3">
          <button
            title="Location"
            className="flex items-center justify-center text-sm bg-primary-light text-primary-dark rounded-md gap-1 p-2"
          >
            <MapPin fontSize="1.375rem" weight="fill" />
            Porto Alegre
          </button>
          <NavLink
            to="/checkout"
            title="Checkout"
            className="rounded-md p-2 bg-amber-100 text-amber-600"
          >
            <ShoppingCart fontSize="1.375rem" weight="fill" />
          </NavLink>
        </nav>
      </LayoutContent>
    </header>
  )
}

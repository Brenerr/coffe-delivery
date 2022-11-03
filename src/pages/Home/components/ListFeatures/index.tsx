import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function ListFeatures() {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
      <li className="flex items-center justify-start gap-3 text-base-text">
        <span className="bg-secondary-dark rounded-full p-2">
          <ShoppingCart weight="fill" color="#FAFAFA" fontSize="1rem" />
        </span>
        Compra simples e segura
      </li>

      <li className="flex items-center justify-start gap-3 text-base-text">
        <span className="bg-base-text rounded-full p-2">
          <Package weight="fill" color="#FAFAFA" fontSize="1rem" />
        </span>
        Embalagem mantém o café intacto
      </li>

      <li className="flex items-center justify-start gap-3 text-base-text">
        <span className="bg-secondary rounded-full p-2">
          <Timer weight="fill" color="#FAFAFA" fontSize="1rem" />
        </span>
        Entrega rápida e rastreada
      </li>

      <li className="flex items-center justify-start gap-3 text-base-text">
        <span className="bg-primary rounded-full p-2">
          <Coffee weight="fill" color="#FAFAFA" fontSize="1rem" />
        </span>
        O café chega fresquinho até você
      </li>
    </ul>
  )
}

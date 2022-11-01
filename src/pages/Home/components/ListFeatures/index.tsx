import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Feature, FeatureData } from '../Feature'

export function ListFeatures() {
  const features: FeatureData[] = [
    {
      title: 'Compra simples e segura',
      Icon: ShoppingCart,
      background: 'secondary-dark',
    },
    {
      title: 'Embalagem mantém o café intacto',
      Icon: Package,
      background: 'primary',
    },
    {
      title: 'Entrega rápida e rastreada',
      Icon: Timer,
      background: 'secondary',
    },
    {
      title: 'O café chega fresquinho até você',
      Icon: Coffee,
      background: 'primary',
    },
  ]

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
      {features.map(({ title, Icon, background }) => {
        return (
          <Feature
            key={title}
            title={title}
            Icon={Icon}
            background={background}
          />
        )
      })}
    </ul>
  )
}

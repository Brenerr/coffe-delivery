enum STATUS_COLORS {
  'primary' = '#8047F8',
  'secondary' = '#DBAC2C',
  'secondary-dark' = '#C47F17',
  'base-text' = '#574F4D',
}

export interface FeatureData {
  title: string
  Icon: any
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  fontSize?: string
  color?: string
  background?: keyof typeof STATUS_COLORS
}

export function Feature({
  title,
  Icon,
  weight = 'fill',
  fontSize = '1rem',
  color = '#FAFAFA',
  background = 'primary',
}: FeatureData) {
  return (
    <li className="flex items-center justify-start gap-3 text-base-text">
      <span className={`bg-[${STATUS_COLORS[background]}] rounded-full p-2`}>
        <Icon weight={weight} fontSize={fontSize} color={color} />
      </span>
      {title}
    </li>
  )
}

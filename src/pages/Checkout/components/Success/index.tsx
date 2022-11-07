import Delivery from '../../../../assets/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfos } from './styles'
import { useFormContext } from 'react-hook-form'
import { PaymentTypes } from '../..'

interface NewFormData {
  number: string
  street: string
  district: string
  city: string
  state: string
  payment: 'CREDIT' | 'DEBIT' | 'MONEY'
  cep: string
  complement: string
}

export function Success() {
  const { getValues } = useFormContext<NewFormData>()

  const form = getValues()

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1 w-full text-center md:text-left">
        <h2 className="text-4xl text-secondary-dark font-baloo font-extrabold">
          Uhu! Pedido confirmado
        </h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="flex flex-col items-center gap-10 lg:gap-24 md:flex-row-reverse">
        <div className="flex items-center justify-center md:justify-end w-full">
          <img src={Delivery} alt="" className="w-full max-w-lg" />
        </div>

        <OrderInfos className="flex flex-col gap-8 p-5 w-full md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex flex-nowrap text-base text-zinc-50 bg-primary p-2 rounded-full max-w-min max-h-min">
              <MapPin weight="fill" />
            </span>
            <span className="text-base-text">
              <p>
                Entrega em
                <b>{` ${form.street}, ${form.number}`}</b>
              </p>
              <p>
                {`${form.district} - ${form.city}, `}
                <span className="uppercase">{form.state}</span>
              </p>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex flex-nowrap text-base text-zinc-50 bg-secondary p-2 rounded-full max-w-min max-h-min">
              <Timer weight="fill" />
            </span>
            <span className="text-base-text">
              <p>Previsão de entrega</p>
              <b>20 min - 30 min </b>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex flex-nowrap text-base text-zinc-50 bg-secondary-dark p-2 rounded-full max-w-min max-h-min">
              <CurrencyDollar weight="fill" />
            </span>
            <span className="text-base-text">
              <p>Pagamento na entrega</p>
              <b>{PaymentTypes[form.payment]}</b>
            </span>
          </div>
        </OrderInfos>
      </div>
    </div>
  )
}

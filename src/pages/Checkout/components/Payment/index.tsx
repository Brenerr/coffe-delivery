import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Option } from './styles'

export function Payment() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col bg-base-card gap-8 p-10 rounded-md">
      <div className="flex gap-2">
        <CurrencyDollar fontSize="1.375rem" className="text-primary" />
        <div className="flex flex-col">
          <p className="text-base-subtitle">Pagamento</p>
          <p className="text-sm text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-3">
        <Option>
          <input
            id="credit"
            className="peer/credit"
            type="radio"
            value="CREDIT"
            {...register('payment')}
          />
          <label
            htmlFor="credit"
            className="peer-checked/credit:bg-primary-light peer-checked/credit:border-primary transition"
          >
            <CreditCard fontSize="1rem" className="text-primary" />
            Cartão de crédito
          </label>
        </Option>

        <Option>
          <input
            id="debit"
            className="peer/debit"
            type="radio"
            value="DEBIT"
            {...register('payment')}
          />
          <label
            htmlFor="debit"
            className="peer-checked/debit:bg-primary-light peer-checked/debit:border-primary transition"
          >
            <Bank fontSize="1rem" className="text-primary" />
            Cartão de débito
          </label>
        </Option>

        <Option>
          <input
            id="money"
            className="peer/money"
            type="radio"
            value="MONEY"
            {...register('payment')}
          />
          <label
            htmlFor="money"
            className="peer-checked/money:bg-primary-light peer-checked/money:border-primary transition"
          >
            <Money fontSize="1rem" className="text-primary" />
            Dinheiro
          </label>
        </Option>
      </section>
    </div>
  )
}

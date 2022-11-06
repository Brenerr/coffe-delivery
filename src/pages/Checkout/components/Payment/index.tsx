import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function Payment() {
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

      <div className="grid grid-cols-3 gap-3">
        <button className="col-span-full md:col-span-1 flex items-center justify-center gap-3 bg-base-button hover:bg-base-hover transition rounded-md p-4 uppercase text-xs text-base-text">
          <CreditCard fontSize="1rem" className="text-primary" />
          Cartão de crédito
        </button>
        <button className="col-span-full md:col-span-1 flex items-center justify-center gap-3 bg-base-button hover:bg-base-hover transition rounded-md p-4 uppercase text-xs text-base-text">
          <Bank fontSize="1rem" className="text-primary" />
          Cartão de débito
        </button>
        <button className="col-span-full md:col-span-1 flex items-center justify-center gap-3 bg-base-button hover:bg-base-hover transition rounded-md p-4 uppercase text-xs text-base-text">
          <Money fontSize="1rem" className="text-primary" />
          Dinheiro
        </button>
      </div>
    </div>
  )
}

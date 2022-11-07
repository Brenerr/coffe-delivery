import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { Success } from './components/Success'
import Empty from '../../assets/empty.svg'

export enum PaymentTypes {
  CREDIT = 'Cartão de crédito',
  DEBIT = 'Cartão de débito',
  MONEY = 'Dinheiro',
}

const paymentTypeSchema = zod.enum(['CREDIT', 'DEBIT', 'MONEY'])

const newFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o Estado'),
  payment: paymentTypeSchema,
})

type NewFormData = zod.infer<typeof newFormValidationSchema>

export function Checkout() {
  const { cartItems, setCartItems } = useContext(CoffeesContext)

  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      payment: undefined,
    },
  })

  const { handleSubmit, formState } = newForm

  function handleCreateNewForm() {
    setCartItems([])
  }

  return (
    <FormProvider {...newForm}>
      <div className="container py-10">
        {formState.isSubmitSuccessful ? (
          <Success />
        ) : cartItems.length > 0 ? (
          <form
            onSubmit={handleSubmit(handleCreateNewForm)}
            action=""
            className="grid grid-cols-5 gap-8"
          >
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
          </form>
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
    </FormProvider>
  )
}

import { PopupTemplate } from '../PopupTemplate'
import { TLoginPopup } from './types'

export const LoginPopup = ({ state, setState }: TLoginPopup) => {
  return (
    <PopupTemplate
      title='увійти'
      setIsOpen={setState}
      isOpen={state}
      position='right'
    >
      <div className='flex-col w-100vw'>
        <div className='mx-10 sm: md:mx-18 lg:mx-14 xl:mx-28 mb-6'>
          <h4 className='font-gilroy text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase'>
            Увійдіть у свій аккаунт
          </h4>
          <p className='font-gilroy text-gray-popup'>
            Для входу введіть, будь ласка, пошту та пароль:
          </p>
        </div>
        <div className='flex justify-center'>{/*TODO: Login Form */}</div>
      </div>
    </PopupTemplate>
  )
}

import { useNavigate } from 'react-router'
import { LoginForm } from '../LoginForm'
import { PopupTemplate } from '../PopupTemplate'
import { TLoginPopup } from './types'

export const LoginPopup = ({ state, setState }: TLoginPopup) => {
  const navigate = useNavigate()

  const handleRegisterRedirect = () => {
    // Перехід на сторінку реєстрації
    navigate('/register') // Шлях може бути змінений залежно від вашого маршруту
  }

  return (
    <PopupTemplate
      title='увійти'
      setIsOpen={setState}
      isOpen={state}
      position='right'
    >
      <div className='flex-col w-100vw'>
        <div className='mx-14 sm: md:mx-18 lg:mx-14 xl:mx-28 mb-6'>
          <h4 className='font-gilroy text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase'>
            Увійдіть у свій акаунт
          </h4>
          <p className='font-gilroy text-gray-popup'>
            Для входу введіть, будь ласка, пошту та пароль:
          </p>
        </div>
        <div className='flex justify-center'>
          <LoginForm />
        </div>
        {/* Посилання для переходу на форму реєстрації */}
        <div className='text-center mt-4'>
          <p className='text-gray-600'>
            Немає акаунту?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={handleRegisterRedirect}
            >
              Зареєструйтесь
            </span>
          </p>
        </div>
      </div>
    </PopupTemplate>
  )
}

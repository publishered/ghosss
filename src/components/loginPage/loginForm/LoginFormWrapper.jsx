import { useRouter } from 'next/router'
import { useState } from 'react'
import Cookies from 'universal-cookie'
import login from '../../../../services/authentication/login'
import LoginForm from './LoginForm'

const LoginFormWrapper = () => {

   const [authState, setAuthState] = useState('default')

   const [usernameInputValue, setUsernameInputValue] = useState('')
   const [passwordInputValue, setPasswordInputValue] = useState('')

   const usernameInputHandler = e => setUsernameInputValue(e.target.value)
   const passwordInputHandler = e => setPasswordInputValue(e.target.value)

   const {push} = useRouter()

   const formSubmitHandler = async e => {

      e.preventDefault()

      if (authState === 'success') {
         push('/')
         return
      }

      if (authState === 'failed') {
         return
      }

      if (!usernameInputValue.trim() || !passwordInputValue.trim()) {
         setAuthState('failed')
         return
      }

      const response_token = await login(usernameInputValue, passwordInputValue)
      if (response_token && response_token !== 'error') {

         const cookies = new Cookies()
         cookies.set('auth_token', response_token, {path: '/', expires: new Date(Date.now()+2592000000)})

         setAuthState('success')
         // setTimeout(() => push('/'), 2000)
         console.log('pushed')
         push('/')
      }

      if (response_token === 'error') {
         setAuthState('failed')
      }
   }

   return <LoginForm
      usernameInputHandler={usernameInputHandler}
      passwordInputHandler={passwordInputHandler}
      formSubmitHandler={formSubmitHandler}

      usernameInputValue={usernameInputValue}
      passwordInputValue={passwordInputValue}
      
      authState={authState}
   />
}

export default LoginFormWrapper
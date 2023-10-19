"use client"

import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/input/Input'
import styles from './LoginForm.module.css'

const LoginForm = ({
      usernameInputHandler,
      passwordInputHandler,
      formSubmitHandler,

      usernameInputValue,
      passwordInputValue,

      authState,
   }) => {
   return <form className={styles.form} onSubmit={formSubmitHandler}>
      <h1 className={styles.form__title}>Login</h1>
      <div className={styles.form__inputs}>
         <Input 
            placeholder="Username"
            onInput={usernameInputHandler}
            value={usernameInputValue}
         />
         <Input
            type="password" 
            placeholder="Password"
            onInput={passwordInputHandler}
            value={passwordInputValue}
         />
      </div>
      
      <Button
         className={`
            ${styles.form__btn} 
            ${authState === 'success' ? styles.form__success : ''}
            ${authState === 'failed' ? styles.form__failed : ''}
         `}
         type="submit"
      >
         {authState === 'success' ? 'Access granted' : ''}
         {authState === 'failed' ? 'Access denied' : ''}
         {authState === 'default' ? 'Authorize' : ''}
      </Button>
   </form>
}

export default LoginForm
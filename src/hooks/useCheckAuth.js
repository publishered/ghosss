import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import checkAuth from '../../services/authentication/checkAuth'

const cookies = new Cookies()

export default function useCheckAuth() {
   const [authState, setAuthState] = useState('')

   const router = useRouter()

   useEffect(() => {
      router.events.on("routeChangeComplete", () => {
         checkAuth(cookies.get('auth_token')).then(res => {
            setAuthState(res === 'success' ? true : false)
         })
      })

      checkAuth(cookies.get('auth_token')).then(res => {
         setAuthState(res === 'success' ? true : false)
      })
   }, [router.events])

   return authState
}
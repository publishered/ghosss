import { NextResponse } from 'next/server'
import settings from '../services/settings'

export async function middleware(request) {

   let response = null

   if (request.cookies.get('auth_token')) {
      response = await fetch(`${settings.API_URL}action/checkAuth.php`, {
         method: "POST",
         body: JSON.stringify({
            auth_token: request.cookies.get('auth_token').value,
         })
      })

      response = await response.text()
   }

   if (response !== 'success') {
      return NextResponse.redirect(new URL('/login', request.url))
   }
   
}

export const config = {
	matcher: ['/((?!login))'],
}

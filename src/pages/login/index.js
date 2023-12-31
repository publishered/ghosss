import Container from '@/components/UI/container/Container'
import LoginFormWrapper from '@/components/loginPage/loginForm/LoginFormWrapper'
import Head from 'next/head'
import settings from '../../../services/settings'

const Login = () => {
   return <>
      <Head>
            
      </Head>
      <style global jsx>{`
            html, body, main, #__next {
               height: 100%;
            }
            
            main {
               display: flex;
               flex-direction: column;
            }
            
            .login-form {
               flex: 1 0 auto;
               display: flex;
               align-items: center;
               justify-content: center;
            }
      `}</style>
      <section className={`login-form`}>
         <Container>
            <LoginFormWrapper />
         </Container>
      </section>
   </>
}

export async function getServerSideProps(request) {
   let response = null

   if (request.req.cookies['auth_token']) {
      response = await fetch(`${settings.API_URL}action/checkAuth.php`, {
         method: "POST",
         body: JSON.stringify({
            auth_token: request.req.cookies['auth_token'],
         })
      })

      response = await response.text()
   }

   if (response === 'success') {
      return {
         redirect: {
            destination: "/",
            permanent: false,
         }
      }
   }

   return {
      props: {
         data:[]
      }
   }
   
}

export default Login
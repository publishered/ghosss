import Container from '@/components/UI/container/Container'
import LoginFormWrapper from '@/components/loginPage/loginForm/LoginFormWrapper'
import Head from 'next/head'

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

export default Login
import Container from '@/components/UI/container/Container'
import styles from './ErrorContent.module.css'

const ErrorContent = () => {
   return <>
      <style global jsx>{`
            html, body, main, #__next {
               height: 100%;
            }
            
            main {
               display: flex;
               flex-direction: column;
            }
            
            .error-page {
               flex: 1 0 auto;
               display: flex;
               align-items: center;
               justify-content: center;
            }
      `}</style>
      <section className="error-page">
         <Container>
            <h1 className={styles.error__title}>Error Page</h1>
         </Container>
      </section>
   </>
}

export default ErrorContent
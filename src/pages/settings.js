import Container from '@/components/UI/container/Container'
import NotifyContainer from '@/components/UI/notifyContainer/NotifyContainer'
import PagePadding from '@/components/UI/pagePadding/PagePadding'
import SettingPage from '@/components/settingPage/SettingPage'

const settings = () => {
   return <PagePadding>
      <section>
         <Container>
            <SettingPage />
         </Container>
      </section>
      <NotifyContainer />
   </PagePadding>
}

export default settings
import '@/styles/app.sass'
import { Onest } from 'next/font/google'
import getDeviceType from '@/utils/get-device-type'
import HeaderMobile from '@/components/common/header-mobile'
import HeaderDesktop from '@/components/common/header-desktop'


const onest = Onest({ subsets: ['latin'] })


export const metadata = {
  title: 'cmbr'
}


export default function RootLayout({ children }) {

  const isMobile = getDeviceType()
 
  return (
    <html lang="en" style={isMobile ? {overflowX: 'hidden'} : {minWidth: '1024px'}}>
      <body className={onest.className} style={isMobile ? {overflowX: 'hidden'} : {minWidth: '1024px'}}>
        {isMobile ? <HeaderMobile/> : <HeaderDesktop/>}
        {children}
      </body>
    </html>
  );
}

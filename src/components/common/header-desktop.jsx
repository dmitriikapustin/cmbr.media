import Image from 'next/image'
import Link from 'next/link'
import RequestButton from '@/components/atoms/request-button'


export default function HeaderDesktop () {
  return (
    <header className="header pc">
      <div className="container pc">
        <div className="content flex flex-row justify-between items-center">
          <Image src={'/images/logo.webp'} alt='' width={200} height={200} style={{objectFit: 'cover', width: '100px', height: 'auto'}}/>
          <div className="links-container flex flex-row items-center">
            <Link href={'/'}><p>О нас</p></Link>
            <Link href={'/'}><p>Шоурил</p></Link>
            <Link href={'/'}><p>Форма обратной связи</p></Link>
            <Link href={'/'}><p>Контакты</p></Link>
          </div>
          <RequestButton><p>Связаться</p></RequestButton>
        </div>
      </div>
    </header>
  )
}
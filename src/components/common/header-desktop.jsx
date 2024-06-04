import Image from 'next/image'
import Link from 'next/link'
import RequestButton from '@/components/atoms/request-button'


export default function HeaderDesktop () {
  return (
    <header className="header pc">
      <div className="container pc">
        <div className="content flex flex-row justify-between items-center">
          <Image src={'/images/logo.webp'} alt='' width={200} height={200} style={{objectFit: 'cover', width: '100px', height: 'auto'}}/>
          <nav className="links-container flex flex-row items-center">
            <Link href={'#about'} className='p-font'>О нас</Link>
            <Link href={'#showreel'} className='p-font'>Шоурил</Link>
            <Link href={'#form'} className='p-font'>Форма обратной связи</Link>
            <Link href={'#contacts'} className='p-font'>Контакты</Link>
          </nav>
          <RequestButton><Link href='#form' className='p-font'>Связаться</Link></RequestButton>
        </div>
      </div>
    </header>
  )
}
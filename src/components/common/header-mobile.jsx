'use client'
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import BurgerMenu from "@/components/atoms/burger-menu"
import RequestButton from "../atoms/request-button"

export default function HeaderMobile () {

  const [isShow, setIsShow] = useState(false)

  const openMenuAnim = {
    minHeight: 'calc(100dvh - 90px)', 
    maxHeight: 'calc(100dvh - 90px + 20px)', 
    height: 'auto', overflow: 'scroll'
  } 

  const closeMenuAnim = {height: 0, overflow: 'hidden'}

  useEffect(() => {
    isShow ? document.documentElement.style.overflowY = 'hidden' 
      : document.documentElement.style.overflowY = 'unset'
  }, [isShow])

  return (
    <header className="header mob">
      <div className="container mob">
        <nav className="flex flex-row justify-between items-center flex-wrap">
          <Link href={'/'} onClick={() => {setIsShow(false)}} className="logo-wrapper flex">
            <Image src={'/images/logo.webp'} width={150} height={150} alt="CMBR" style={{height: '55px', objectFit: 'cover'}}/>
          </Link>
          <BurgerMenu isClick={isShow} setIsClick={setIsShow}/>
          <motion.div className="menu flex flex-col justify-between" 
            style={{gap: '40px', width: '100%'}}
            initial={{minHeight: 0, height: 0, overflow: 'hidden'}}
            animate={isShow ? openMenuAnim : closeMenuAnim}>
              <div className="menu-content flex flex-col items-center text-center" style={{gap: '40px', paddingTop: '40px', color: 'white'}}>
                <Link href={'/'} className="display-font">О НАС</Link>
                <Link href={'/'} className="display-font">ШОУРИЛ</Link>
                <Link href={'/'} className="display-font" style={{lineHeight: '32.4px'}}>ФОРМА<br/>ОБРАТНОЙ<br/>СВЯЗИ</Link>
                <Link href={'/'} className="display-font">КОНТАКТЫ</Link>
              </div>
              <RequestButton deviceType="mob"><p>Связаться</p></RequestButton>
          </motion.div>
        </nav>
      </div>
    </header>
  )
}
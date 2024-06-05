'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from '@/components/atoms/burger-menu'
import RequestButton from '../atoms/request-button'

export default function HeaderMobile() {
	const [isShow, setIsShow] = useState(false)

	const openMenuAnim = useMemo(
		() => ({
			minHeight: 'calc(100dvh)',
			maxHeight: 'calc(100dvh)',
			height: 'auto',
			overflow: 'scroll',
			opacity: 1
		}),
		[]
	)

	const closeMenuAnim = useMemo(() => ({ height: 0, overflow: 'hidden', opacity: 0 }), [])

	useEffect(() => {
		isShow
			? (document.documentElement.style.overflowY = 'hidden')
			: (document.documentElement.style.overflowY = 'unset')
	}, [isShow])

	const linkClick = useCallback(() => {
		setIsShow(false)
	}, [])

	return (
		<header className='header mob'>
			<div className='container mob'>
				<nav className='flex flex-row justify-between items-center flex-wrap'>
					<Link href={'/'} onClick={linkClick} className='logo-wrapper flex'>
						<Image
							src={'/images/logo.webp'}
							width={150}
							height={150}
							alt='CMBR'
							style={{ height: '55px', objectFit: 'cover' }}
						/>
					</Link>
					<BurgerMenu isClick={isShow} setIsClick={setIsShow} />
					<motion.div
						className='menu flex flex-col justify-between'
						style={{ gap: '40px', width: '100%' }}
						initial={{ minHeight: 0, height: 0, overflow: 'hidden' }}
						animate={isShow ? openMenuAnim : closeMenuAnim}>
						<div
							className='menu-content flex flex-col items-center text-center'
							style={{ gap: '40px', paddingTop: '40px', color: 'white' }}>
							<Link href={'#about'} onClick={linkClick} className='display-font'>
								О НАС
							</Link>
							<Link href={'#showreel'} onClick={linkClick} className='display-font'>
								ШОУРИЛ
							</Link>
							<Link
								href={'#form'}
								className='display-font'
								onClick={linkClick}
								style={{ lineHeight: '32.4px' }}>
								ФОРМА
								<br />
								ОБРАТНОЙ
								<br />
								СВЯЗИ
							</Link>
							<Link href={'#contacts'} onClick={linkClick} className='display-font'>
								КОНТАКТЫ
							</Link>
						</div>
						<RequestButton deviceType='mob'>
							<p>Связаться</p>
						</RequestButton>
					</motion.div>
				</nav>
			</div>
		</header>
	)
}

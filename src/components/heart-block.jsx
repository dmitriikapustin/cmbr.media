'use client'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import Image from 'next/image'

const generateIconAnimation = (
	y,
	rotate,
	duration_y,
	duration_rotate,
	delay_y,
	delay_rotate
) => ({
	initial: { y: 0, rotate: 0 },
	animate: {
		y: y,
		rotate: rotate,
		transition: {
			y: {
				duration: duration_y,
				repeat: Infinity,
				repeatType: 'reverse',
				repeatDelay: delay_y
			},
			rotate: {
				duration: duration_rotate,
				repeat: Infinity,
				repeatType: 'reverse',
				repeatDelay: delay_rotate
			}
		}
	}
})

export default function HeartBlock({ deviceType, isMobile }) {
	const [isClicked, setIsClicked] = useState(false)
	const opacityValue = isClicked ? 1 : 0

	const heartAnimation = useMemo(
		() => ({
			initial: { scale: 1 },
			animate: {
				scale: 0.9,
				transition: {
					duration: 0.9,
					repeat: Infinity,
					repeatType: 'reverse',
					delay: 0.1
				}
			}
		}),
		[]
	)

	return (
		<section className={`heart-block block h-fit ${deviceType}`}>
			<div className='dark-bg section-bg' />
			<Image
				src={'/images/heart-block-bg.webp'}
				alt=''
				fill
				className='section-bg'
				style={{ opacity: opacityValue }}
			/>
			<div className='icons-container section-bg' style={{ opacity: opacityValue }}>
				<motion.div
					initial='initial'
					animate='animate'
					variants={generateIconAnimation(70, 45, 5, 9, 0, 0.4)}
					className='icon-wrapper'
					style={{ left: isMobile ? '5%' : '20%', top: isMobile ? '10%' : '20%' }}>
					<Image src={'/heart-block/icon-1.webp'} alt='' width={300} height={300} />
				</motion.div>
				<motion.div
					initial='initial'
					animate='animate'
					variants={generateIconAnimation(130, -180, 9, 10, 0, 0.9)}
					className='icon-wrapper'
					style={{ right: isMobile ? '0' : '20%', top: isMobile ? '50%' : '30%' }}>
					<Image src={'/heart-block/icon-2.webp'} alt='' width={300} height={300} />
				</motion.div>
				<motion.div
					initial='initial'
					animate='animate'
					variants={generateIconAnimation(-150, 145, 7, 8.5, 0, 0.2)}
					className='icon-wrapper'
					style={{ left: isMobile ? '0%' : '10%', top: isMobile ? '60%' : '50%' }}>
					<Image src={'/heart-block/icon-3.webp'} alt='' width={300} height={300} />
				</motion.div>
			</div>
			<div className={`container relative ${deviceType}`}>
				<div className='top-container flex' style={{ color: 'white' }}>
					<p>Творческая команда специализирующаяся на создании и воплощении магии</p>
					<div className='flex flex-row justify-between'>
						<div className='flex flex-col column-wrapper'>
							<p>сценарии</p>
							<p>концепты</p>
						</div>
						<div className='flex flex-col column-wrapper'>
							<p>режиссирование</p>
							<p>post production</p>
						</div>
					</div>
				</div>
				<motion.div
					initial='initial'
					animate={isClicked ? 'animate' : 'initial'}
					variants={heartAnimation}
					onClick={() => {
						setIsClicked(!isClicked)
					}}
					className='heart-wrapper cursor-pointer flex justify-center items-center text-center'>
					<p
						style={{
							color: 'white',
							zIndex: 2,
							opacity: isClicked ? 0 : 1,
							transition: 'var(--animationTransition)',
							marginTop: '-50px',
							position: 'absolute'
						}}>
						Нажми на меня
					</p>
					<Image
						src={'/heart-block/heart-black.webp'}
						width={2000}
						height={2000}
						alt=''
						style={{ opacity: isClicked ? 0 : 1 }}
					/>
					<Image
						src={'/heart-block/heart-pink.webp'}
						width={2000}
						height={2000}
						alt=''
						style={{ opacity: opacityValue }}
					/>
				</motion.div>
				<div className='text-wrapper flex flex-col'>
					{isMobile ? (
						<>
							<Image
								src={'/heart-block/pink-text-mob.webp'}
								width={2000}
								height={2000}
								alt=''
							/>
							<Image
								src={'/heart-block/white-text-mob.webp'}
								width={2000}
								height={2000}
								alt=''
								style={{ opacity: opacityValue }}
							/>
						</>
					) : (
						<>
							<Image
								src={'/heart-block/pink-text-pc.webp'}
								width={2000}
								height={2000}
								alt=''
							/>
							<Image
								src={'/heart-block/white-text-pc.webp'}
								width={2000}
								height={2000}
								alt=''
								style={{ opacity: opacityValue }}
							/>
						</>
					)}
				</div>
			</div>
		</section>
	)
}

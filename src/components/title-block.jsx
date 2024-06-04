import Image from 'next/image'

export default function TitleBlock({ deviceType, isMobile }) {
	return (
		<section className={`title-block relative block with-header ${deviceType}`}>
			<Image
				src={'/images/title-block-bg.webp'}
				fill
				alt=''
				style={{ zIndex: -1, objectFit: 'cover' }}
			/>
			<div className={`container ${deviceType} flex items-end more-w`}>
				<div className='content flex flex-col' style={{ color: 'white' }}>
					<p>We are CMBR media</p>
					{!isMobile && (
						<Image
							width={1000}
							height={1000}
							alt=''
							src='/svg/title-text-pc.svg'
							style={{ width: '100%', height: 'auto' }}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

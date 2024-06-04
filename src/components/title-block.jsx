import Image from 'next/image'
import Link from 'next/link'

export default function TitleBlock({ deviceType }) {
	return (
		<section className={`title-block relative block with-header ${deviceType}`}>
			<Image
				src={'/images/title-block-bg.webp'}
				fill
				alt=''
				style={{ zIndex: -1, objectFit: 'cover' }}
			/>
			<div className={`container ${deviceType} flex items-center more-w  justify-center`}>
				<div className='content flex flex-col text-center' style={{ color: 'white' }}>
					<Link href='#showreel' style={{ width: '100%', height: 'auto' }}>
						<Image
							width={1000}
							height={1000}
							alt=''
							src='/images/title-block-icon.webp'
							style={{ height: 'auto' }}
						/>
					</Link>
					<h1 className='title-font'>We are CMBR</h1>
				</div>
			</div>
		</section>
	)
}

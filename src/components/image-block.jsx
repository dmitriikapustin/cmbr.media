import Image from 'next/image'

export default function ImageBlock({ deviceType, isMobile }) {
	return (
		<section className={`image-block block ${deviceType} relative`} id='showreel'>
			<div className={`container ${deviceType}`}>
				{isMobile && (
					<Image
						src={'/svg/image-block-text-mob.svg'}
						width={500}
						height={500}
						alt=''
						style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
					/>
				)}
				<video
					muted
					loop
					controls
					src='/video/showreel.mp4'
					poster='/images/image-block-bg.webp'
				/>
			</div>
		</section>
	)
}

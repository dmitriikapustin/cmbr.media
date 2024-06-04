import FormBlock from '@/components/form-block'
import ImageBlock from '@/components/image-block'
import TitleBlock from '@/components/title-block'
import getDeviceType from '@/utils/get-device-type'
import AboutBlock from '@/components/about-block'
import HeartBlock from '@/components/heart-block'

export default function Home() {
	const isMobile = getDeviceType()
	const deviceType = isMobile ? 'mob' : 'pc'

	return (
		<>
			<TitleBlock deviceType={deviceType} isMobile={isMobile} />
			<AboutBlock deviceType={deviceType} />
			<ImageBlock deviceType={deviceType} isMobile={isMobile} />
			<HeartBlock deviceType={deviceType} isMobile={isMobile} />
			<FormBlock deviceType={deviceType} isMobile={isMobile} />
		</>
	)
}

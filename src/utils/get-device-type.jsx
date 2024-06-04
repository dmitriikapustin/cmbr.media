import { headers } from 'next/headers'

const getDeviceType = () => headers().get("x-device-type") === 'mobile' ? true : false
export default getDeviceType
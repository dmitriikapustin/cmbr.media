import Image from "next/image"


export default function ImageBlock ({deviceType, isMobile}) {
  return (
    <section className={`image-block block ${deviceType} relative`}>
      {!isMobile && <Image src={'/images/image-block-bg.webp'} fill sizes="80vw (max-width: 768px) 150vw" alt="" style={{objectFit: 'cover'}}/>}
      <div className={`container ${deviceType}`}>
        {isMobile &&
        <>
        <Image src={'/svg/image-block-text-mob.svg'} width={500} height={500} alt="" style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
        <Image src={'/images/image-block-bg.webp'} width={600} height={600} alt="" style={{objectFit: 'cover'}}/>
        </>}
      </div>
    </section>
  )
}
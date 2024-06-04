import Image from "next/image"

export default function AboutBlock ({deviceType}) {
  return (
    <section className={`about-block block h-fit ${deviceType}`}>
      <div className={`container ${deviceType}`}>
        <div className="content flex">
          <div className="card flex flex-col">
            <Image src='/images/about-image-1.webp' alt="" width={600} height={600}/>
            <Image alt="" width={1000} height={1000} src='/svg/about-text.svg' style={{width: '65%', height: 'auto'}}/>
            <p>Картельные сговоры не допускают ситуации, при которой акционеры крупнейших компаний.</p>
          </div>
          <div className="card flex flex-col">
            <Image src='/images/about-image-2.webp' alt="" width={600} height={600}/>
            <p>Цитата, олицетворяющая компанию</p>
          </div>
          <div className="card flex flex-col">
            <Image src='/images/about-image-3.webp' alt="" width={600} height={600}/>
          </div>
        </div>
      </div>
    </section>
  )
}
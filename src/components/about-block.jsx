import Image from "next/image"

export default function AboutBlock ({deviceType}) {
  return (
    <section className={`about-block block h-fit ${deviceType}`}>
      <div className={`container ${deviceType}`}>
        <div className="content flex">
          <div className="card flex flex-col">
            <Image src='/images/about-image-1.webp' alt="" width={600} height={600}/>
            <Image alt="" width={1000} height={1000} src='/svg/about-text.svg' style={{width: '65%', height: 'auto'}}/>
            <p>Мы коммьюнити креаторов, с опытом работы более 10 лет, способные воплотить в жизнь любую задачу, от репортажки до самых безумных задумок в мире музыки, творчества и рекламы.</p>
          </div>
          <div className="card flex flex-col">
            <Image src='/images/about-image-2.webp' alt="" width={600} height={600}/>
            {/* <p>Цитата, олицетворяющая компанию</p> */}
          </div>
          <div className="card flex flex-col">
            <Image src='/images/about-image-3.webp' alt="" width={600} height={600}/>
          </div>
        </div>
      </div>
    </section>
  )
}
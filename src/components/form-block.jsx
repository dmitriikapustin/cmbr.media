'use client'
import Image from "next/image"
import { useFormik } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import RequestButton from "@/components/atoms/request-button"


export const validationSchema = {
  email: Yup.string()
    .min(2, 'Минимальное количество символов: 2')
    .email('Введите корректный адрес электронной почты')
    .required('Обязательное поле'),
  name: Yup.string()
    .min(2, 'Минимальное количество символов: 2')
    .matches(/^[А-Яа-яёЁ]/, "Введите корректное имя")
    .required('Обязательное поле')
}


export default function FormBlock ({deviceType, isMobile}) {

  const formik = useFormik({
    initialValues: {email: '', name: ''},
    validationSchema: Yup.object(validationSchema),
    validateOnMount: true,
    onSubmit: (values) => {}
  })



  return (
    <section className={`form-block block relative ${deviceType}`} id="form">
      <Image src={'/images/form-block-bg.webp'} fill alt="" style={{zIndex: -1, objectFit: 'cover'}}/>
      <div className={`container ${deviceType}`} style={{color: 'white'}}>
        <div className="content flex flex-col justify-evenly">
          <Image alt="" width={1000} height={1000} src={isMobile ? "/svg/form-text-mob.svg" : "/svg/form-text-pc.svg"} style={{width: '100%', height: 'auto'}}/>
          <div className="form flex">
            <div className="flex flex-col">
              <Link href={'mailto:info@cmbr.media'} 
                style={{textDecoration: 'underline', textDecorationSkipInk: "none", height: 'fit-content'}} 
                className="big-font">
                  info@cmbr.media
              </Link>
              <Link href={'tel:89996667710'} 
                style={{textDecoration: 'underline', textDecorationSkipInk: "none", height: 'fit-content'}} 
                className="big-font">
                  89996667710
              </Link>
            </div>
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
              <input name="name" id="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} placeholder="Ваше имя" className="big-font"/>
              <input name="email" id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Ваш email" className="big-font"/>
              <RequestButton deviceType={deviceType} type='submit'><h3>Связаться</h3></RequestButton> 
            </form>
          </div>
          <div className="bottom-container flex">
            <div className="links-container flex flex-col">
              <p>Социальные сети</p>
              <div className="links-col flex flex-col">
                <div className="flex flex-row" style={{gap: '45px'}}>
                  <Link href={'https://www.instagram.com/cmbr.media'} style={{width: 'calc((100% - 90px)/3)'}}><p>Instagram</p></Link>
                  {/* <Link href={'#'} style={{width: 'calc((100% - 90px)/3)'}}><p>Facebook</p></Link>
                  <Link href={'#'} style={{width: 'calc((100% - 90px)/3)'}}><p>Pinterest</p></Link> */}
                </div>
                {/* <div className="flex flex-row" style={{gap: '45px'}}>
                  <Link href={'#'} style={{width: 'calc((100% - 90px)/3)'}}><p>VK</p></Link>
                  <Link href={'#'} style={{width: 'calc((100% - 90px)/3)'}}><p>Twitter</p></Link>
                  <Link href={'#'} style={{width: 'calc((100% - 90px)/3)'}}><p>Youtube</p></Link>
                </div> */}
              </div>
            </div>
            <div className="info-container flex">
              {/* <Link href={'#'}><p>Политика конфиденциальности</p></Link> */}
              <p>Camber Media, {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
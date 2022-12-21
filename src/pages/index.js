import Link from 'next/link'
import * as style from '../styles/index.module.css'

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>Hello</h1>
      <Link href="/contact">Contactページへ移動</Link>
    </>
  )
}

export default Index
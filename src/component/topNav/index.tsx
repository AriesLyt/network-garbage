import { useEffect, useState } from "react"

import "./index.less"

//component
import RightNav from '@components/rightNav';

export default function TopNav() {

  const [navClass, setNavClass] = useState<string []>(['topnav-wrap'])

  useEffect(()=>{
    let scrlListener = function (): void {
      console.log((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop))
      if((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 60){
        setNavClass(['topnav-wrap', 'is-Fixed-nav'])
        return 
      }
      setNavClass(['topnav-wrap'])
    }
    window.addEventListener('scroll', scrlListener)
    return () => { window.removeEventListener('scroll', scrlListener) }
  })

  const [rightShow, setRightShow] = useState<boolean>(false)

  function changeMoNavShow(show = false) {
    setRightShow(show)
  }

  return (
    <>
      <div className={navClass.join(" ")} >
        <ul className="nav-ul">
          <li onClick={() => {changeMoNavShow(true)}}>
            首页
          </li>
          <li>
            Show Show Way
          </li>
          <li>
            Can Can Need
          </li>
          {/* <li>
            Other
          </li> */}
        </ul>
      </div>
      <RightNav rightShow={rightShow} setRightShow={changeMoNavShow} />
    </>
  )
}
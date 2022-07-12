import { useEffect, useState } from "react"

import "./index.less"

//component
import RightNav from '@components/rightNav';
import { Link } from "react-router-dom";

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

  const [iconClass, setIconClass] = useState<string []>(['nav-icon'])

  function changeMoNavShow(show = false) {
    if(show){
      setIconClass(['nav-icon', 'is-checked'])
    }else{
      setIconClass(['nav-icon'])
    }
    setRightShow(show)
  }

  return (
    <>
      <div className={navClass.join(" ")} >
        <ul className="nav-ul">
          <li>
            <Link to='/'>
              首页
            </Link>
          </li>
          <li>
            <Link to='/ssw'>
              Show Show Way
            </Link>
          </li>
          <li>
            Can Can Need
          </li>
          {/* <li>
            Other
          </li> */}
        </ul>
        <span className={iconClass.join(" ")}  onClick={() => {changeMoNavShow(true)}}>
          isIcon
        </span>
      </div>
      <RightNav rightShow={rightShow} setRightShow={changeMoNavShow} />
    </>
  )
}
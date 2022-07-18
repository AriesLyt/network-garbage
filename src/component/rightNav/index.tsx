
import { useNavigate } from 'react-router'
// css
import './index.less'

interface props {
  rightShow: boolean,
  setRightShow: (show?: boolean) => void
}

export default function RightNav({ rightShow, setRightShow }: props) {

  const navigate = useNavigate()

  const toLink = (link: string): void => {
    navigate(link)
    setRightShow(false)
  } 

  return (
    <>
      <div className={rightShow ? "right-nav-bg is-active-rnav" : "right-nav-bg"} onClick={()=>setRightShow(false)} >
      </div>
      <div className={rightShow ? "right-nav-wrap is-active-rnav" : "right-nav-wrap"}>
          <ul className="nav-ul">
            <li onClick={()=>toLink('/')}>
              首页
            </li>
            <li onClick={()=>toLink('/ssw')}>
              Show Show Way
            </li>
            <li onClick={()=>toLink('Can Can Need')}>
              Can Can Need
            </li>
            <li onClick={()=>toLink('Other')}>
              Other
            </li>
          </ul>
        </div>
    </>
  )
}
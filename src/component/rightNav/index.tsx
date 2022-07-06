
// css
import './index.less'

interface props {
  rightShow: boolean,
  setRightShow: (show?: boolean) => void
}

export default function RightNav({ rightShow, setRightShow }: props) {
  return (
    <>
      <div className={rightShow ? "right-nav-bg is-active-rnav" : "right-nav-bg"} onClick={()=>setRightShow(false)} >
        <div className="right-nav-wrap">
          <ul className="nav-ul">
            <li>
              首页
            </li>
            <li>
              Show Show Way
            </li>
            <li>
              Can Can Need
            </li>
            <li>
              Other
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
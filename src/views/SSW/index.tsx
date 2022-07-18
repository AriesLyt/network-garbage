import { post } from "@utils/request";
import React, { useEffect, useRef, useState } from "react";

// interface
import { PicListObject } from "@utils/interface"

//style
import "./index.less"


interface ShowShowWayProps {

}


const ShowShowWay: React.FC<ShowShowWayProps> = () => {

  const [picList, setPicList] = useState<PicListObject []> ([])

  const getPicList = async () => {
    const res = await post('/spic', {
      name: "1"
    })
    if(res && res.code === 0){
      setPicList([...res.data])
    }
  }

  useEffect(() => {
    getPicList()
  }, [])


  return (
    <div className="img-wrap">
      {
        picList?.map((it: any)=>{
          return <img src={it.url} alt="" />
        })
      }
    </div>
  )
}

export default ShowShowWay
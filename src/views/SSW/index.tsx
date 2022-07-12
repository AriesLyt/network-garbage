import { post } from "@utils/request";
import React, { useEffect } from "react";


interface ShowShowWayProps {

}

const ShowShowWay: React.FC<ShowShowWayProps> = () => {

  useEffect(() => {
    const res = post('/spic', {
      name: "1"
    })
    console.log(res);
  })

  return (
    <div>

    </div>
  )
}

export default ShowShowWay
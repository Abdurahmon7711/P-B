import React, { useState, useEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export function ArrowUp() {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisible] = useState(false)

   useEffect(() => {
       if(pageYOffset > 400){
           setVisible(true)
       } else {
           setVisible(false)
       }
   }, [pageYOffset])

   const scrollToTop = () => window.scrollTo({top: 0, behavior:"smooth"})

   if(!visible){
       return false
   }
   
    

    return (
        <div className='arrow-up' onClick={scrollToTop}>
            <ExpandLessIcon className='arrow-up-icons' />
        </div>
    )
}



import React from 'react'
import Banner from '../component/banner/Banner'
import Expertise from '../component/Expertise/Expertise'
import Work from '../component/work/Work'
import Experience from '../component/Experience/Experience'
import Blog from '../component/Blog/Blog'
import Whatsay from '../component/whatsay/Whatsay'
import Frequently from '../component/Frequently/Frequently'

export default function Home() {
  return (
    <>
    <Banner/>
    <Expertise/>
    <Work/>
    <Experience/>
    <Blog/>
    <Whatsay/>
    <Frequently/>
    </>
  )
}

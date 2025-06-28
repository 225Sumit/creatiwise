import React from 'react'
import '../Blog/Blog.css'
import pic1 from '../../assets/p (1).png'
import pic2 from '../../assets/p (2).png'
import pic3 from '../../assets/p (3).png'
export default function Blog() {
    return (
        <>
            <div className="Blog-main">
                <div className="Blog-inner">
                    <div className="Blog-head">
                        <div className='Blog-Box' >
                            <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB" />
                            </svg>
                            </span>
                            <span className="Blog-heading">  Blog</span>
                        </div>
                        <div className="Blog-view">view all</div>
                    </div>
                    <div className="Blog-data">
                        <div className="Blog-item ">
                            <div className="Blog-pic">
                                <img src={pic1} alt='photo1'  ></img>
                            </div>
                            <div className="Blog-content">
                                <div className="Blog-content1">Nov 9, 2023</div>
                                <div className="Blog-content2">How UX works in web</div>
                                <div className="Blog-content3">
                                    <button type="button" className='Blog-content-btn1'>UI</button>
                                    <button type="button" className='Blog-content-btn1'>UX</button>
                                </div>
                            </div>
                            <div className="Blog-btn">
                                <button type="button">Read</button>
                            </div>

                        </div>
                        <div className="Blog-item">
                            <div className="Blog-pic">
                                <img src={pic2} alt='photo1'  ></img>
                            </div>
                            <div className="Blog-content">
                                <div className="Blog-content1">Aug 18, 2023</div>
                                <div className="Blog-content2">Case study - Analysis Application.</div>
                                <div className="Blog-content3">
                                    <button type="button" className='Blog-content-btn1'>Design</button>
                                    <button type="button" className='Blog-content-btn1'>Print</button>
                                </div>
                            </div>
                            <div className="Blog-btn">
                                <button type="button">Read</button>
                            </div>

                        </div>
                        <div className="Blog-item">
                            <div className="Blog-pic">
                                <img src={pic3} alt='photo1'  ></img>
                            </div>
                            <div className="Blog-content">
                                <div className="Blog-content1">Feb 16, 2023</div>
                                <div className="Blog-content2">3 ways to develop your skill</div>
                                <div className="Blog-content3">
                                    <button type="button" className='Blog-content-btn1'>figma</button>
                                    <button type="button" className='Blog-content-btn1'>web</button>
                                </div>
                            </div>
                            <div className="Blog-btn">
                                <button type="button">Read</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

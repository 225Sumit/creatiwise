import React from 'react'
import '../work/work.css';
import pic1 from '../../assets/p (1).png'
import pic2 from '../../assets/p (2).png'
import pic3 from '../../assets/p (3).png'
export default function Work() {
    return (
        <>
            <div className="workmain">
                <div className="workmain2">
                    <div className="workmain3">
                        <div className="work-logo">
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB" />
                                </svg>
                            </span>
                            <span id='workview'>Works</span>

                        </div>
                        <div className="work-view">view all</div>
                    </div>
                    <div className="workmain4">
                        <div className="workmain5">
                            <div className="workmain6">
                                <div className="workpics">
                                    <span className='pic-css'> <img src={pic1} alt='photo1'  ></img></span>
                                </div>
                                <div className="workcontent">
                                    <div className="worktext">
                                        <span className='work-heading'>Analysis Application</span>
                                        <span className='work-para'>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</span>
                                        <span className='work-btn'>
                                            <button type="button" className='btnwork1'>Figma</button>
                                            <button type="button" className='btnwork1'>ux</button>
                                        </span>
                                    </div>
                                    <div className="workviewbtn">
                                        View Case Study
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="workmain5">
                            <div className="workmain6">
                                <div className="workpics">
                                    <span className='pic-css'> <img src={pic2} alt='photo1'  ></img></span>
                                </div>
                                <div className="workcontent">
                                    <div className="worktext">
                                        <span className='work-heading'>Analysis Application</span>
                                        <span className='work-para'>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</span>
                                        <span className='work-btn'>
                                            <button type="button" className='btnwork1'>Figma</button>
                                            <button type="button" className='btnwork1'>ux</button>
                                        </span>
                                    </div>
                                    <div className="workviewbtn">
                                        View Case Study
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="workmain5">
                            <div className="workmain6">
                                <div className="workpics">
                                    <span className='pic-css'> <img src={pic3} alt='photo1'  ></img></span>
                                </div>
                                <div className="workcontent">
                                    <div className="worktext">
                                        <span className='work-heading'>Analysis Application</span>
                                        <span className='work-para'>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</span>
                                        <span className='work-btn'>
                                            <button type="button" className='btnwork1'>Figma</button>
                                            <button type="button" className='btnwork1'>ux</button>
                                        </span>
                                    </div>
                                    <div className="workviewbtn">
                                        View Case Study
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

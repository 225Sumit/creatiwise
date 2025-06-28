import React from 'react'
import '../whatsay/Whatsay.css'
import profile from '../../assets/p (4).png'
export default function Whatsay() {
    return (
        <>
            <div className="What-main">
                <div className="What-inner">
                    <div className="What-under1">
                        <span><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0.5L17.8885 10.6877L25.4046 3.55573L20.9443 12.9078L31.2169 11.5557L22.1115 16.5L31.2169 21.4443L20.9443 20.0922L25.4046 29.4443L17.8885 22.3123L16 32.5L14.1115 22.3123L6.59544 29.4443L11.0557 20.0922L0.783095 21.4443L9.88854 16.5L0.783095 11.5557L11.0557 12.9078L6.59544 3.55573L14.1115 10.6877L16 0.5Z" fill="#CBCBCB" />
                        </svg>
                        </span>
                        <span className='What-under1-heading'>What they say</span> 
                    </div>
                    <div className="What-under2">
                        <div className="What-profile">
                            <div className="What-profile-box">
                                <div className="What-image">
                                     <img src={profile} alt='photo1'  ></img>
                                </div>
                                <div className="What-name-box">
                                    <div className="What-name">Floyd Miles</div>
                                    <div className="What-content-name">eBay</div>
                                </div>
                            </div>
                        </div>
                        <div className="What-contant">
                            <div className="What-contant-para">Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.</div>
                        </div>
                    </div>
                    <div className="What-main-btn-box">
                    <div className="What-button-box">
                        <button type="button"><svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 5.5H2M2 5.5L6 9.5M2 5.5L6 1.5" stroke="#010208" stroke-width="1.5"/>
</svg>
</button>
                        <button type="button"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000488281 5.5L12.5005 5.5M12.5005 5.5L8.50049 1.5M12.5005 5.5L8.50049 9.5" stroke="#010208" stroke-width="1.5"/>
</svg>
</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

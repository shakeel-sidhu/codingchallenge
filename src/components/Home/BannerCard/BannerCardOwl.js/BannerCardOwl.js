
import React from 'react'
import OwlCarousel from 'react-owl-carousel-loop';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import '../../../../assests/css/all.mov.css';
import { Link } from 'react-router-dom';

const BannerCardOwl = (props)=>{
    return(
        <>
         <div className='owl-main'>
                    <OwlCarousel
                        className={props.className}
                        items={props.items}
                        loop
                        dots=""
                        autoplay
                        center
                        margin={7}
                        nav
                        responsive={props.responsive || null}
                        
                    >
                        <>
                            {
                            props.Banner.map((BanImg, Value) =>  
                                        <Link to='/' key={Value}>
                                            <div className='overlysAll'>
                                            <div className='item'>
                                                <img src={Object.entries(BanImg.thumbnails)[0][1].url} />
                                            </div>
                                            </div>
                                        </Link>
                                )
                            }
                        </>
                    </OwlCarousel>
                </div>
        </>
    )

}
export default BannerCardOwl
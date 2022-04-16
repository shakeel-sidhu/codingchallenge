import React from 'react'
import OwlCarousel from 'react-owl-carousel-loop';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Link } from 'react-router-dom';
import '../../assests/css/all.mov.css';

export const NewOwl=(props)=>{
    return(
        <div className='owl-main'>
                      <div className='MovieCard-Data'>
                        <h2>{props.title}</h2>
                    <OwlCarousel
                        className='owl-theme basedComic'
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
                             props.data.map((BanImg, Value) =>  
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
                </div>
    )
}
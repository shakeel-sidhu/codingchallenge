
import React from 'react'
import { Spinner } from 'react-bootstrap'
import ExploreMore from './ExploreMore/ExploreMore'
const BannerCard = React.lazy(() => import('./BannerCard/BannerCard'))
const Categories = React.lazy(() => import('./Categories/Categories'))

const Home = () => {

    return (
        <>
            <React.Suspense fallback={<div style={{ textAlign: "center" }}><Spinner animation="border" variant="light" /></div>}>
                <BannerCard />    
                <Categories />
            </React.Suspense>    
            <ExploreMore />
        </>
    )

}
export default Home

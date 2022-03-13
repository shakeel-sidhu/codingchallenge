
import React from 'react'
import { Spinner } from 'react-bootstrap'
import ExploreMore from './ExploreMore/ExploreMore'
const BannerCard = React.lazy(() => import('./BannerCard/BannerCard'))
const BasedComic = React.lazy(() => import('./BasedComic/BasedComic'))
const PopTvShow = React.lazy(() => import('./PopTvShow/PopTvShow'))
const PopularMovies = React.lazy(() => import('./PopulparMovies/PopularMovies'))
const TrendingNow = React.lazy(() => import('./TrendingNow/TrendingNow'))
const TopMovies = React.lazy(() => import('./TopMovies/TopMovies'))
const TrendShort = React.lazy(() => import('./TrendShort/TrendShort'))
const BollyBoxHit = React.lazy(() => import('./BollyBoxHit/BollyBoxHit'))
const WatchWithFamily = React.lazy(() => import('./WatchWithFamily/WatchWithFamily'))
const PakShortFilm = React.lazy(() => import('./PakShortFilm/PakShortFilm'))
const HouseHorror = React.lazy(() => import('./HouseHorror/HouseHorror'))
const JamesBond = React.lazy(() => import('./JamesBond/JamesBond'))
const StarzOriginal = React.lazy(() => import('./StarzOriginal/StarzOriginal'))
const ActionsMovies = React.lazy(() => import('./ActionsMovies/ActionsMovies'))
const FullBoxsets = React.lazy(() => import('./FullBoxsets/FullBoxsets'))
const MostSeeMov = React.lazy(() => import('./MostSeeMov/MostSeeMov'))
const RecentBollMov = React.lazy(() => import('./RecentBollMov/RecentBollMov'))
const ComedyMovies = React.lazy(() => import('./ComedyMovies/ComedyMovies'))
const RomanticComed = React.lazy(() => import('./RomanticComed/RomanticComed'))
const InterShortFilm = React.lazy(() => import('./InterShortFilm/InterShortFilm'))
const BoxsetDiscover = React.lazy(() => import('./BoxsetDiscover/BoxsetDiscover'))

const Home = () => {

    return (
        <>
        <React.Suspense fallback={<div style={{ textAlign: "center" }}><Spinner animation="border" variant="light" /></div>}>
            <BannerCard />
            <BasedComic />
            <PopTvShow />
            <BasedComic />
            <PopularMovies />
            <TrendingNow />
            <TopMovies />
            <TrendShort />
            <BollyBoxHit />
            <WatchWithFamily />
            <PakShortFilm />
            <HouseHorror />
            <JamesBond />
            <StarzOriginal />
            <ActionsMovies />
            <FullBoxsets />
            <MostSeeMov />
            <RecentBollMov />
            <ComedyMovies />
            <BoxsetDiscover />
            <RomanticComed />
            <InterShortFilm />
            </React.Suspense>

            <ExploreMore />
        </>
    )

}
export default Home

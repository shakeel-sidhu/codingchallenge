
import React from 'react';
import styles from './ExploreMore.module.css'
import { Link } from 'react-router-dom'
const ExploreMore = () => {

    return (
        <>
            <div className={styles.ExploreMov}>
                <span>
                    <Link to='/'>
                        Explore Movies
                    </Link>
                </span>
            </div>
        </>
    )

}
export default ExploreMore;
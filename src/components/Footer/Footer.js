
import React from 'react';
import Card from '../../UI/Card/Card'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

   return (
      <>
         <footer>
            <div className={styles.FooterMain}>
               <Card>
                  <div className={styles.FootAll}>
                     <div className={styles.FootMenu}>
                        <ul>
                           <li className={styles.liAF}>
                              <Link to='/'>
                                 Why STARZ PLAY BY CINEPAX?
                              </Link>
                           </li>
                           <li className={styles.liAF}>
                              <Link to='/'>
                                 Help Center
                              </Link>
                           </li>
                           <li className={styles.liAF}>
                              <Link to='/'>
                                 Company
                              </Link>
                           </li>
                           <li className={styles.liAF}>
                              <Link to='/'>
                                 Terms & Conditions
                              </Link>
                           </li>
                           <li>
                              <Link to='/'>
                                 Privacy Policy
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <div className={styles.CopyRight}>
                        <p>Copyright © 2022 STARZ PLAY by Cinepax. All rights reserved.</p>
                     </div>
                     <div className={styles.FooterLinks}>
                        <div className={styles.footIcon}>
                           <Link to="/">
                           <FontAwesomeIcon icon={faFacebookF} />
                           </Link>
                        </div>
                        <div className={styles.footIcon}>
                        <Link to="/">
                           <FontAwesomeIcon icon={faTwitter} />
                           </Link>
                        </div>
                        <div className={styles.footIcon}>
                        <Link to="/">
                           <FontAwesomeIcon icon={faInstagram} />
                           </Link>
                        </div>
                        <div className={styles.footIcon}>
                        <Link to="/">
                           <FontAwesomeIcon icon={faYoutube} />
                           </Link>
                        </div>
                        <div className={styles.footImg}>
                        <Link to="/">
                        <img src={'https://cp-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-apple.svg'} />
                        </Link>
                        </div>
                        <div className={styles.footImg}>
                        <Link to="/">
                        <img src={'	https://cp-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-googleplay.svg'} />
                        </Link>
                        </div>
                     </div>
                  </div>
               </Card>
            </div>
         </footer>
      </>
   )

}
export default Footer;
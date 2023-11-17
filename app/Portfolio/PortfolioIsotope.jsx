// PortfolioIsotope.jsx
import Link from "next/link";
import { Fragment } from "react";
import Image from 'next/image';

import image from '../../public/firebase.png';

const PortfolioIsotope = ({ noViewMore }) => {
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-masonry-items row">
          {/* Card 1 */}
          <div className="works-col col-xs-12 col-sm-6 col-md-4 col-lg-4 sorting-branding sorting-photo ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <Image src={image} />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, Photography </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Zorro</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="works-col col-xs-12 col-sm-6 col-md-4 col-lg-4 sorting-branding sorting-ui-ux-design ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <Image src={image} />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Gooir</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          {/* Repeat the structure for the next cards */}
          {/* Card 3 */}
          <div className="works-col col-xs-12 col-sm-6 col-md-4 col-lg-4 sorting-branding sorting-photo ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <Image src={image} />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, Photography </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Zorro</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="works-col col-xs-12 col-sm-6 col-md-4 col-lg-4 sorting-branding sorting-ui-ux-design ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <Image src={image} />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Gooir</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          {/* Continue repeating the structure for additional cards */}
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PortfolioIsotope;

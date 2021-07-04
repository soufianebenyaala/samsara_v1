import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ladingSection: {
    maxWidth: "1440px",
    margin: "0 auto",
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
    "&::before": {
      position: "absolute",
      top: "-50px",
      zIndex: "-1",
      width: "100%",
      height: "100%",
      textAlign: "right",
      background: "#fff",
      backgroundImage:
        "linear-gradient(90deg,hsla(0,0%,100%,.5) 4%,#f6f9fc 54%)",
      transform: "skewY(-4deg)",
      content:
        "url(https://d214hhm15p4t1d.cloudfront.net/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/right-lines.svg)",
      maxWidth: "1440px",
      margin: "0 auto",
    },
  },
  AboutRow: {
    position: "relative",
    zIndex: "100",
  },
  landingSection_Bg: {
    width: "100%",
    height: "100%",
    paddingTop: "67px",
    paddingBottom: "20px",
    background:
      "url(https://d214hhm15p4t1d.cloudfront.net/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/left-lines.svg) no-repeat",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  landingSection_content: {
    maxWidth: "1100px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  About: {
    width: "100%",
    height: "100%",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 4px 10px rgba(0,0,0,.1)",
  },
  AboutBg: {
    width: "100%",
    height: "100%",
    padding: "37px 50px 50px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "700px 0",
    backgroundSize: "400px",
    [theme.breakpoints.down("sm")]: {
      background: "none !important",
      padding: "30px 40px 40px",
    },
  },
  AboutContent: {
    maxWidth: "650px",
  },
  aboutHeader: {
    paddingBottom: "5px",
    fontWeight: "600",
    fontSize: "40px",
    lineWeight: "61px",
  },
  aboutSubHeader: {
    marginBottom: "30px",
    paddingBottom: "16px",
    fontSize: "18px",
    lineHeight: "30px",
    borderBottom: "2px solid #e4e7e9",
  },
  AboutFeature: {
    paddingBottom: "12px",
  },
  Feature: {
    display: "flex",
  },
  AboutTextHeaderContent: {
    margin: "0",
    paddingBottom: "5px",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "33px",
  },
  AboutTextContent: {
    padding: "0 0 25px 22px",
  },
  AboutTextSubHeaderContent: {
    maxWidth: "530px",
    fontSize: "16px",
    lineHeight: "22px",
  },
  AboutAppDownload: {
    display: "flex",
    alignItems: "center",
  },
  AboutAppstore: {
    marginRight: "10px",
  },
}));

function LandingSectionAboutRow() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={` ${classes.ladingSection}    ${classes.AboutRow}`}>
      <div className={classes.landingSection_Bg}>
        <div className={classes.landingSection_content}>
          <div className={classes.About}>
            <div
              className={classes.AboutBg}
              style={{
                backgroundImage:
                  'url("https://static.zumpercdn.com/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/homepage/phone1.png?auto=format&fit=clip&w=400&dpr=1")',
              }}
            >
              <div className={classes.AboutContent}>
                <Typography
                  className={classes.aboutHeader}
                  component="h2"
                  variant="h2"
                >
                  So, what's House App?
                </Typography>
                <Typography
                  className={classes.aboutSubHeader}
                  component="div"
                  variant="h3"
                >
                  House App is used by millions of renters to find houses,
                  rooms, condos, or apartments for rent.
                </Typography>
                <div className={classes.AboutFeature}>
                  <Container className={classes.Feature}>
                    <div>
                      <svg
                        fill="none"
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                      >
                        <path
                          clipRule="evenodd"
                          d="M43.0678 34.3792C41.2165 37.78 38.4354 40.7298 34.8349 42.8086C24.4164 48.8237 11.0943 45.2541 5.07918 34.8356C-0.935941 24.4171 2.6337 11.095 13.0522 5.07985C18.0761 2.17929 23.7735 1.50729 29.0035 2.75732C29.3979 2.85158 29.7941 2.60827 29.8883 2.21387C29.9826 1.81946 29.7393 1.42331 29.3449 1.32905C23.7641 -0.00481558 17.68 0.712339 12.318 3.80809C1.19708 10.2287 -2.61321 24.4489 3.80743 35.5698C10.2281 46.6907 24.4483 50.501 35.5691 44.0803C39.4103 41.8626 42.3808 38.7128 44.3576 35.0813C44.5515 34.7252 44.4199 34.2793 44.0638 34.0854C43.7076 33.8915 43.2617 34.023 43.0678 34.3792ZM45.296 28.2534C45.2157 28.6509 45.4727 29.0382 45.8702 29.1186C46.2677 29.199 46.655 28.9419 46.7354 28.5445C47.8189 23.1865 47.0278 17.4249 44.0797 12.3186C43.8769 11.9674 43.4279 11.8471 43.0767 12.0499C42.7255 12.2526 42.6052 12.7017 42.8079 13.0529C45.5703 17.8375 46.3113 23.2327 45.296 28.2534ZM40.1285 9.35884C40.3997 9.66036 40.8639 9.68498 41.1655 9.41382C41.467 9.14266 41.4916 8.67841 41.2205 8.37689C39.3038 6.24562 37.043 4.52878 34.5749 3.26285C34.2141 3.07778 33.7715 3.22026 33.5865 3.58108C33.4014 3.9419 33.5439 4.38443 33.9047 4.5695C36.217 5.75549 38.334 7.36334 40.1285 9.35884ZM20.4028 16.7334C19.9973 16.7334 19.6686 17.0621 19.6686 17.4676C19.6686 17.8732 19.9973 18.2019 20.4028 18.2019H32.6403C33.0458 18.2019 33.3745 17.8732 33.3745 17.4676C33.3745 17.0621 33.0458 16.7334 32.6403 16.7334H20.4028ZM13.7939 23.8311C13.7939 23.4256 14.1226 23.0969 14.5281 23.0969H32.6396C33.0451 23.0969 33.3739 23.4256 33.3739 23.8311C33.3739 24.2366 33.0451 24.5654 32.6396 24.5654H14.5281C14.1226 24.5654 13.7939 24.2366 13.7939 23.8311ZM13.7939 30.1946C13.7939 29.7891 14.1226 29.4604 14.5281 29.4604H32.6396C33.0451 29.4604 33.3739 29.7891 33.3739 30.1946C33.3739 30.6001 33.0451 30.9289 32.6396 30.9289H14.5281C14.1226 30.9289 13.7939 30.6001 13.7939 30.1946ZM13.7939 17.4676C13.7939 17.0621 14.1226 16.7334 14.5281 16.7334H16.9756C17.3812 16.7334 17.7099 17.0621 17.7099 17.4676C17.7099 17.8732 17.3812 18.2019 16.9756 18.2019H14.5281C14.1226 18.2019 13.7939 17.8732 13.7939 17.4676Z"
                          fill="#55A3FF"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className={classes.AboutTextContent}>
                      <Typography
                        className={classes.AboutTextHeaderContent}
                        component="h3"
                        variant="h3"
                      >
                        Apply online
                      </Typography>
                      <Typography
                        className={classes.AboutTextSubHeaderContent}
                        component="div"
                        variant="h6"
                      >
                        Submit digital rental applications and credit reports
                        with House App's screening service, powered by
                        TransUnion™.
                      </Typography>
                    </div>
                  </Container>
                  <Container className={classes.Feature}>
                    <div>
                      <svg height="48" width="48">
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#46E0C9"
                          stroke-width="1.5"
                        >
                          <path d="M22.47 46.234l-.811.335a3.793 3.793 0 0 1-4.133-.822l-.62-.62a4 4 0 0 0-2.828-1.171H13.2a3.793 3.793 0 0 1-3.504-2.342l-.335-.81a4 4 0 0 0-2.165-2.165l-.81-.335A3.793 3.793 0 0 1 4.044 34.8v-.878a4 4 0 0 0-1.17-2.827l-.621-.62a3.793 3.793 0 0 1-.822-4.134l.335-.81a4 4 0 0 0 0-3.061l-.335-.811a3.793 3.793 0 0 1 .822-4.133l.62-.62a4 4 0 0 0 1.171-2.828V13.2c0-1.534.925-2.916 2.342-3.504l.81-.335a4 4 0 0 0 2.165-2.165l.335-.81A3.793 3.793 0 0 1 13.2 4.044h.878a4 4 0 0 0 2.827-1.17l.62-.621a3.793 3.793 0 0 1 4.134-.822l.81.335a4 4 0 0 0 3.061 0l.811-.335a3.793 3.793 0 0 1 4.133.822l.62.62a4 4 0 0 0 2.828 1.171h.878c1.534 0 2.916.925 3.504 2.342l.335.81a4 4 0 0 0 2.165 2.165l.81.335a3.793 3.793 0 0 1 2.342 3.504v.878a4 4 0 0 0 1.17 2.827l.621.62a3.793 3.793 0 0 1 .822 4.134l-.335.81a4 4 0 0 0 0 3.061l.335.811a3.793 3.793 0 0 1-.822 4.133l-.62.62a4 4 0 0 0-1.171 2.828v.878a3.793 3.793 0 0 1-2.342 3.504l-.81.335a4 4 0 0 0-2.165 2.165l-.335.81a3.793 3.793 0 0 1-3.504 2.342h-.878a4 4 0 0 0-2.827 1.17l-.62.621a3.793 3.793 0 0 1-4.134.822l-.81-.335a4 4 0 0 0-3.061 0z"></path>
                          <path
                            d="M15 25.636L21.222 32l12.445-14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className={classes.AboutTextContent}>
                      <Typography
                        className={classes.AboutTextHeaderContent}
                        component="h3"
                        variant="h3"
                      >
                        Quality listings
                      </Typography>
                      <Typography
                        className={classes.AboutTextSubHeaderContent}
                        component="div"
                        variant="h6"
                      >
                        Our inventory is updated in real-time, so you'll always
                        see new rentals on House App first.
                      </Typography>
                    </div>
                  </Container>
                  <Container className={classes.Feature}>
                    <div>
                      <svg height="48" width="48">
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            cx="24"
                            cy="24"
                            opacity="0.1"
                            r="23.25"
                            stroke="#F63B74"
                            stroke-width="1.5"
                          ></circle>
                          <circle
                            cx="24"
                            cy="24"
                            opacity="0.3"
                            r="16.25"
                            stroke="#F63B74"
                            stroke-width="1.5"
                          ></circle>
                          <circle
                            cx="24"
                            cy="24"
                            opacity="0.6"
                            r="9.25"
                            stroke="#F63B74"
                            stroke-width="1.5"
                          ></circle>
                          <circle cx="24" cy="24" fill="#F63B74" r="3"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className={classes.AboutTextContent}>
                      <Typography
                        className={classes.AboutTextHeaderContent}
                        component="h3"
                        variant="h3"
                      >
                        Apply online
                      </Typography>
                      <Typography
                        className={classes.AboutTextSubHeaderContent}
                        component="div"
                        variant="h6"
                      >
                        Filter by location, price range, bedroom count,
                        pet-friendly, or amenity and set an alert to get
                        notifications when a new listing is posted.
                      </Typography>
                    </div>
                  </Container>
                  <div className={classes.AboutAppDownload}>
                    <Link href="#" onClick={preventDefault}>
                      <img
                        className={classes.AboutAppstore}
                        alt="appstore"
                        src="https://d214hhm15p4t1d.cloudfront.net/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/app_store_badge.8409988d.svg"
                        width="135"
                        height="40"
                      />
                    </Link>
                    <Link href="#" onClick={preventDefault}>
                      <img
                        alt="appstore"
                        src="https://d214hhm15p4t1d.cloudfront.net/nzr/f1e073a66408c9ee7470d2d548101ac9980ec1fd/img/play_store_badge.43b1ffd5.svg"
                        width="135"
                        height="40"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSectionAboutRow;

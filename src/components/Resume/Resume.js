import React from 'react';
import { Tile } from '../tile/Tile';
import '../../App.scss';
import styles from './Resume.module.scss';
import { WorkRounded, SchoolRounded, BuildRounded, EmojiEventsRounded } from '@material-ui/icons';

export default function Resume(props) {
    return (
        <div className={`page_container`}>
            <h1 className={`page_title`}>resume</h1>
            <div className={styles.section}>
                <div className={styles.section_header}>
                    <SchoolRounded className={styles.icon} />
                    <p>Education</p>
                </div>
                <div className={`montage_container ${styles.items}`}>
                    <Tile 
                        type = "content"
                        image = "ucberkeley_seal.png"
                        title = "University of California, Berkeley"
                        subTitle = "B.A. Computer Science, Data Science | 3.714"
                        descriptions = {["Coursework | Data Structures, Machine Structures, Discrete Mathematics and Probability Theory, The Structure and Interpretation of Computer Programs, Designing Information Devices and Systems, Foundations of Data Science, Human Contexts and Ethics of Data",
                            "Organizations | Alpha Tau Omega Fraternity, Cubstart DeCal"
                        ]}
                        underContent = "Class of 2023"
                        externalUrl = "https://www.berkeley.edu/"
                    />
                    <Tile 
                        type = "content"
                        image = "pcs_logo.png"
                        title = "Pacific Collegiate Charter"
                        subTitle = "High School"
                        descriptions = {["Coursework | Advanced Computer Science, AP Computer Science, AP Biology, AP Literature, AP English Language",
                            "Organizations | Senior Class Senator, Varsity Swim"
                        ]}
                        underContent = "Class of 2019"
                        externalUrl = "https://www.pacificcollegiate.com/"
                    />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.section_header}>
                    <BuildRounded className={styles.icon} />
                    <p>Skills</p>
                </div>
                <div className={`montage_container ${styles.items}`}>

                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.section_header}>
                    <WorkRounded className={styles.icon} />
                    <p>Experience</p>
                </div>
                <div className={`montage_container ${styles.items}`}>
                    <Tile 
                        type = "content"
                        title = "Software Engineering Intern"
                        subTitle = "SummerBio."
                        descriptions = {["Designed and implemented a mobile cross-platform app in Capacitor/AngularJS, HTML, SCSS, and Adobe XD for personal COVID-19 test submission and expedited test result delivery.",
                            "Tested and modified multiple contact tracing applications implementing Google/Apple’s API and the TCN Bluetooth Protocol for internal use.",
                            "Published COVID-19 test management app to beta testers on iOS and Android.",
                            "Developed NodeJS backend for both contact tracing and test result applications through Google Firebase and Amazon Web Services."
                        ]}
                        underContent = "May 2020 - Aug 2020 (3mo)"
                        externalUrl = "https://www.summer.bio/"
                    />
                    <Tile 
                        type = "content"
                        image = "jobylogo.png"
                        title = "Software Engineering Intern"
                        subTitle = "Joby Aviation"
                        descriptions = {["Developed a mobile cross-platform flight booking application using Apache Cordova (and later) React Native frameworks, HTML, and CSS on a small team.",
                            "Implemented backend functionality with Amazon Web Services and REST APIs for syncing, automated scheduling, and updating.",
                            "Published flight booking app on internal test tracks for both iOS and Android devices.",
                            "Coordinated with a team of 6-8 in an Agile/SCRUM environment."
                        ]}
                        underContent = "June 2018 - May 2020 (2yr)"
                        externalUrl = "https://www.jobyaviation.com/"
                    />
                    <Tile 
                        type = "content"
                        title = "Software Development Consultant"
                        subTitle = "GammaDynamics"
                        descriptions = {["Developed a cross-platform web application in Apache Cordova, HTML, and CSS to provide access to a trained neural network on product reviews.",
                            "Published multiple apps on the Apple and Google App Stores.",
                        ]}
                        underContent = "Sept 2016 - Jan 2018 (1yr 5mo)"
                        externalUrl = "https://www.jobyaviation.com/"
                    />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.section_header}>
                    <EmojiEventsRounded className={styles.icon} />
                    <p>Awards & Activities</p>
                </div>
                <div className={`montage_container ${styles.items}`}>
                </div>
            </div>
        </div>
    )
};
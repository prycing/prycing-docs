import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
    {
        title: 'Phone & mail support',
        Svg: require('../../static/img/icons/mail.svg').default,
        description: (
            <>
                We provide support via phone and mail. Our team is available to help you with any questions you may
                have.
            </>
        ),
    },
    {
        title: 'Helpcenter & Docs',
        Svg: require('../../static/img/icons/headset.svg').default,
        description: (
            <>
                Our helpcenter and documentation is always available. You can find answers to most questions here in the
                documentation.
            </>
        ),
    },
    {
        title: 'Our offices',
        Svg: require('../../static/img/icons/office.svg').default,
        description: (
            <>
                We have two offices located in the Netherlands, One in Dronten, one in Zwolle. Book an appointment on
                the site.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

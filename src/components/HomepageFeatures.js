import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Prycing docs',
        Svg: require('../../static/img/prycing.svg').default,
        description: (
            <>
                Prycing docs is the best way to find out how to use our API. We provide
                you with all the information you need to get started.
            </>
        ),
    },
    {
        title: 'Integrate with Prycing',
        Svg: require('../../static/img/prycing.svg').default,
        description: (
            <>
                Integrate with Prycing to get the best prices for your products. We provide
                you with all the information you need to get started.
            </>
        ),
    },
    {
        title: 'Placeholder',
        Svg: require('../../static/img/prycing.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
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

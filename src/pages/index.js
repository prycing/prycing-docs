import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Redirect} from '@docusaurus/router';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header>

        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    // Redirect to the docs page
    return (
        <Redirect to="/docs/introduction"/>
    );
}

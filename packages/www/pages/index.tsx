import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import style from './index-styles.module.css';

import bannerImage from '../public/assets/images/bannerImage.png';
import backdropLogo from '../public/assets/images/backdropLogo.svg';

import logoSecretarium from '../public/assets/images/logoSecretarium.svg';
import logoElement22 from '../public/assets/images/logoElement22.svg';

import optQuality from '../public/assets/images/optQuality.svg';
import optUndisclosed from '../public/assets/images/optUndisclosed.svg';
import optUniq from '../public/assets/images/optUniq.png';

import productSemaphore from '../public/assets/images/productSemaphore.png';
import productDatalign from '../public/assets/images/productDatalign.png';

import logoSemaphore from '../public/assets/images/logoSemaphore.svg';
import logoDatalign from '../public/assets/images/logoDatalign.svg';

import storyA from '../public/assets/images/3rd/storyA.png';
import storyB from '../public/assets/images/3rd/storyB.png';

import semPointA from '../public/assets/images/semPointA.svg';
import semPointB from '../public/assets/images/semPointB.svg';
import semPointC from '../public/assets/images/semPointC.svg';

import daPointA from '../public/assets/images/daPointA.svg';
import daPointB from '../public/assets/images/daPointB.svg';
import daPointC from '../public/assets/images/daPointC.svg';

const Index: React.FC = () => {

    return (
        <>
            <Head>
                <title>DANIE</title>
            </Head>
            <Layout>
                <section className="text-center bg-light-blue pt-10 md:pt-20 pb-10 md:pb-48 lg:pb-40">
                    <Container>
                        <div className="px-5 md:px-12">
                            <h1 className="text-dark-blue text-3xl md:text-5xl pb-5">DANIE</h1>
                            <p className="text-medium-blue font-bold text-lg md:text-xl">
                                A community of financial institutions harnessing the
                                latest privacy enhancing technology to collaborate
                                and share insights securely.
                            </p>
                        </div>
                    </Container>
                </section>
                <section className="text-center pt-10 pb-10 md:pb-20 md:pt-5 relative">
                    <Container>
                        <img alt="" src={backdropLogo} className="absolute z-0" style={{
                            left: '-50%'
                        }} />
                        <div className="relative z-10">
                            <img alt="" src={bannerImage} className="mb-10 md:-mt-32 md:w-2/3" />
                            <div className="px-5 md:px-12 z-10">
                                <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">Provably confidential collaboration with peers</h2>
                                <p className="text-sm md:text-base">
                                    DANIE provides next generation benchmarking for ultra-sensitive data reconciliation,
                                    including KYC and AML, without having to rely on a trusted third-party. Financial
                                    institutions in the group share their information in a fully privacy-preserving and
                                    automated way, so everyone gets insights without disclosing any data.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="text-center bg-light-blue py-10 md:py-20">
                    <Container>
                        <div className="px-5 md:px-12">
                            <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">Trusted by banks</h2>
                            <div className="flex flex-wrap gap-10 md:flex-no-wrap">
                                <a rel="noreferrer" target="_blank" className="w-full md:w-1/2 relative overflow-hidden" href="https://a-teaminsight.com/danie-consortium-uses-game-changing-privacy-enhancing-technology-to-improve-client-reference-data-quality/" style={{
                                    height: '12rem'
                                }} >
                                    <img alt="" src={storyA} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 bg-opacity-75 bg-white w-full py-5 text-sm md:text-base">
                                        <span>20 august 2019 | Design</span><br />
                                        <span><b>Future of customer support</b></span>
                                    </div>
                                </a>
                                <a rel="noreferrer" target="_blank" className="w-full md:w-1/2 relative overflow-hidden" href="https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/banks-use-privacy-enhancing-tech-to-tackle-money-laundering-as-regulation-lags-61074568" style={{
                                    height: '12rem'
                                }} >
                                    <img alt="" src={storyB} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 bg-opacity-75 bg-white w-full py-5 text-sm md:text-base">
                                        <span>18 august 2019 | Tech</span><br />
                                        <span><b>Digital trends in next 2020</b></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="text-center py-10 md:py-20">
                    <Container>
                        <div className="px-5 md:px-12 pb-10">
                            <img alt="" src={optQuality} className="pb-10" style={{
                                height: '8rem'
                            }} />
                            <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">Quality benchmarks for sensitive data</h2>
                            <p className="text-sm md:text-base">
                                The DANIE product suite has tools for comparing all kinds of data metrics, like client
                                reference data, commercial margins and asset prices, while preserving total secrecy
                                and anonymity.
                            </p>
                        </div>
                        <div className="px-5 md:px-12">
                            <img alt="" src={optUndisclosed} className="pb-10" style={{
                                height: '8rem'
                            }} />
                            <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">Data is never disclosed</h2>
                            <p className="text-sm md:text-base">
                                All DANIE products are built on confidential computing technology to make sure
                                data submissions are always kept secret. Allowing peers to collaborate on sensitive
                                data while making sure nobody can see it, not even the technology and
                                infrastructure providers.
                            </p>
                        </div>
                    </Container>
                </section>
                <section className="text-center bg-light-blue py-10 md:py-20 relative">
                    <Container>
                        <div className="px-5 md:px-12 text-sm md:text-base">
                            <img alt="" src={backdropLogo} className="absolute z-0" style={{
                                right: '-50%'
                            }} />
                            <div className="relative pb-20 md:pb-32 z-10">
                                <img alt="Logo Semaphore" src={logoSemaphore} className="pb-5" style={{
                                    height: '4.5rem'
                                }} />
                                <img alt="Screenshots Semaphore" src={productSemaphore} className="py-10" />
                                <div className="flex flex-wrap md:flex-no-wrap gap-5 md:px-20">
                                    <div className="w-full md:w-1/3">
                                        <img alt="" src={semPointA} className={`pb-3 ${style.semImage}`} />
                                        <span><b>KYC and AML</b> data collaboration</span>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <img alt="" src={semPointB} className={`pb-3 ${style.semImage}`} />
                                        <span>Signals <b>KYC anomalies</b></span>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <img alt="" src={semPointC} className={`pb-3 ${style.semImage}`} />
                                        <span>Includes PEP, sanctions and <b>negative news</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <img alt="Logo Datalign" src={logoDatalign} className="pb-5" style={{
                                    height: '5rem'
                                }} />
                                <img alt="Screenshots Datalign" src={productDatalign} className="py-10" />
                                <div className="flex flex-wrap md:flex-no-wrap gap-5 md:px-40">
                                    <div className="w-full md:w-1/3">
                                        <img alt="" src={daPointA} className={`pb-3 ${style.semImage}`} />
                                        <span>Currently compares <b>24 client reference data attributes</b></span>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <img alt="" src={daPointB} className={`pb-3 ${style.semImage}`} />
                                        <span><b>Client reference</b> data collaboration</span>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <img alt="" src={daPointC} className={`pb-3 ${style.semImage}`} />
                                        <span>Over <b>5 million</b> records benchmarked in the last 6 months</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="text-center md:text-left py-10 md:py-20 relative">
                    <Container>
                        <img alt="" src={backdropLogo} className="absolute z-0" style={{
                            left: '-50%'
                        }} />
                        <div className="relative z-10 flex flex-wrap md:flex-no-wrap gap-10 px-5 md:px-12">
                            <div className="w-full md:w-1/2 lg:w-1/3" >
                                <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">What makes DANIE unique?</h2>
                                <p className="pb-10 text-sm md:text-base">
                                    Until now, financial institutions struggled to share data insights
                                    due to privacy concerns. The DANIE product suite provides
                                    decentralised solutions that have been built for collaboration.
                                </p>
                                <ul className={`list-none ${style.listTick} text-sm md:text-base`}>
                                    <li className="pb-5 md:pb-0">Each party has control of their own data</li>
                                    <li className="pb-5 md:pb-0">No ties to the other participants</li>
                                    <li className="pb-5 md:pb-0">Easy to use, no IT skills required</li>
                                    <li className="pb-5 md:pb-0">Processes more than 2,000 records per second</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-2/3 align-middle" >
                                <img alt="" src={optUniq} className="pb-3 ml-5 md:-mr-10" />
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="text-center bg-light-blue py-10 md:py-20">
                    <Container>
                        <div className="px-5 md:px-12">
                            <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">The only tested technology proven to maintain complete privacyfor data collaboration</h2>
                            <p className="text-sm md:text-base">
                                DANIE data collaboration products have been used by some of the largest banks in the
                                world and, since 2018, have been trialled successfully to reconcile millions of records
                                across peers securely.
                            </p>
                        </div>
                    </Container>
                </section>
                <section className="text-center py-10 md:py-20">
                    <Container>
                        <div className="px-5 md:px-12">
                            <h2 className="text-dark-blue font-bold text-xl md:text-2xl pb-5">Who’s behind DANIE?</h2>
                            <div className="flex flex-wrap md:flex-no-wrap gap-10">
                                <div className="w-full md:w-1/2">
                                    <img alt="" src={logoSecretarium} className="my-10" style={{
                                        height: '3.5rem'
                                    }} />
                                    <p className="pb-5 md:pb-10 text-sm md:text-base">
                                        DANIE products are built by Secretarium, a deep tech start up specialising in data
                                        privacy, cryptography and Privacy Enhancing Technologies.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <img alt="" src={logoElement22} className="my-12" style={{
                                        height: '2.6rem'
                                    }} />
                                    <p className="text-sm md:text-base">
                                        Element22 combines strategy, execution, and analytics expertise to deliver innovative
                                        solutions for financial institutions and the broader industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="text-center bg-light-blue py-10 md:py-20">
                    <Container>
                        <div className="px-5 md:px-12">
                            <h2 className="text-medium-blue font-bold text-xl md:text-2xl pb-5">Partner enquiries</h2>
                            <p className="text-sm md:text-base">
                                If you’re interested in finding out more about the community, our technology, or how
                                confidential computing could help you collaborate better on data, we’d love to hear from
                                you at <a href="mailto:community@danie.tech" className="text-medium-blue">community@danie.tech</a>.
                            </p>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Index;

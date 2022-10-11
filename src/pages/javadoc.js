import React from 'react';
import  { Redirect } from 'react-router-dom';
import Layout from '@theme/Layout';
import versions from '/versions.json';
import javadocs from '../data/javadoc.json'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function JavadocVersions() {
  const {siteConfig} = useDocusaurusContext();
    return (
      <div>
        {javadocs.map((row, idd) => (
          <div className="container" key={idd}>
            <h1 className='margin-bottom--lg margin-top--lg text--center'>
            Javadoc for {row} API
            </h1>
            <div className="row">
              {versions.map((version, idx) => (
                <div className="col col--6" key={idx}>
                    <div className="card">
                        <a href={`${siteConfig.baseUrl}javadoc/${version}/${row}/`}>
                            <div className="card__header">
                                <div className="avatar">
                                    <div className="avatar__intro">
                                        <h3 className="text--center margin-bottom--none">{version}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
              ))} 
            </div>
          </div>
        ))}  
      </div>
    );
  }

export default function javadoc() {
    return <Layout title="Javadoc" description="Openflexo is a model-federation infrastructure software.">
        <JavadocVersions />
    </Layout>;
}
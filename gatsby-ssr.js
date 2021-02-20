import React from 'react';  
import Layout from './src/components/Layout';

export function wrapPageElements({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}
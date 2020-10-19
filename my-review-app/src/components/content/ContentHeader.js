import React from 'react';
import {TextStyle, Layout} from '@shopify/polaris';

const ContentHeader = () => {
    return (
        <div style={{textAlign: 'right',marginBottom:"10px"}}>
            <Layout>
                <Layout.Section>
                    <TextStyle variation="strong">Total: 56 products.</TextStyle>
                </Layout.Section>
            </Layout>
        </div>
    );
}

export default ContentHeader
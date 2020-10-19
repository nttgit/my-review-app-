import React from 'react';
import {Button, ButtonGroup, Layout} from '@shopify/polaris';
import {Icon} from '@shopify/polaris';
import {RefreshMajor} from '@shopify/polaris-icons';

const ContentBody = () => {
    return (
        <div>
            <Layout>
               <Layout.Section oneHalf>
                    <ButtonGroup spacing="loose">
                        <Button>CREATE REVIEW</Button>
                        <Button>IMPORT EXCEL</Button>
                        <Button>EXPORT EXCEL</Button>
                    </ButtonGroup>
                </Layout.Section>
                <Layout.Section oneHalf>
                    <div style={{textAlign:'right'}}>
                       <button style={{backgroundColor:"#50B83C"}} className="Polaris-Button">
                           <span style={{marginRight: "10px"}}><Icon source={RefreshMajor} /></span>
                           
                           Sync products From Shopify
                        </button>
                    </div>
                </Layout.Section>
            </Layout>
        </div>
    );
}

export default ContentBody;
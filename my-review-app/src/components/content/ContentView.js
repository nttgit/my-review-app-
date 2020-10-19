import React from 'react';
import {Layout, Card} from '@shopify/polaris';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';

const ContentView = () => {
  return (
      <Card sectioned>
                <ContentHeader />

                <ContentBody />
        </Card>
  );
}

export default ContentView;
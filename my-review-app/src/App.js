import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import View from './components/header/View';
import ContentView from './components/content/ContentView';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
        <View />
        <ContentView />
    </AppProvider>
  );
}

export default App;

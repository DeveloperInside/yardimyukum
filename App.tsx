/* eslint-disable import/first */
if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  import('./ReactotronConfig').then(() => { console.log('Reactotron Configured') })
}
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation/Navigation'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ApplicationProvider>
  )
}

export default App

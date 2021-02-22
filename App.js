 import 'react-native-gesture-handler';
 import React from 'react';
 import RootNavigator from './src/navigation';
import store from './src/redux';
import {Provider} from 'react-redux';

const App=()=> {
    return(
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
};

export default App;



  
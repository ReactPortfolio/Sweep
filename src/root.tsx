import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Test} from './Test';

ReactDOM.render( <Test compiler="Typescript" framework="Reacting" />,
    document.getElementById('app-container')
);
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Test} from './Test';

ReactDOM.render( <Test compiler="Typescript" framework="React" />,
    document.getElementById('app-container')
);
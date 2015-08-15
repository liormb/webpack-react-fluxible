/**
 * User: Lior Elrom
 * Date: 08/09/15
 * Time: 12:06 AM
 */

'use strict';

import Fluxible from 'fluxible';
import UIStore from './src/stores/UIStore';
import Routes from './src/components/Routes';

let app = new Fluxible({
    component: Routes
});

app.registerStore(UIStore);

export default app;
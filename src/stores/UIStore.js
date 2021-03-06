/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 11:32 PM
 */

'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class UIStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = {
            name: ''
        }
    }

    changeName(payload, action) {
        const { name } = payload;
        console.log('The name has changed to', name);
    }
}

UIStore.storeName = 'UIStore';

UIStore.handlers = {
    'NAME_CHANGED': 'changeName'
};

export default UIStore;
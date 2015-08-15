/**
 * User: Lior Elrom
 * Date: 08/09/15
 * Time: 12:44 AM
 */

module.exports = {
    changeName (actionContext, payload) {
        actionContext.dispatch('NAME_CHANGED', payload);
    }
};
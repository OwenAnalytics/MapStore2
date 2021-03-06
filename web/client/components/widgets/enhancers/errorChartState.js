const React = require('react');
const Message = require('../../I18N/Message').default;
const emptyState = require('../../misc/enhancers/emptyState');

const getErrorMessage = (error = {}) => {
    if (error.code === "ECONNABORTED") {
        return <Message msgId="widgets.errors.timeoutExpired" />;
    }
    return error.message ?
        <Message msgId="widgets.errors.genericErrorWithMessage" msgParams={{message: error.message}}/> :
        <Message msgId="widgets.errors.genericError"/>;
};

module.exports = emptyState(
    ({error}) => error,
    ({error, iconFit} = {}) => ({
        glyph: "warning-sign",
        iconFit,
        tooltip: getErrorMessage(error)
    })
);

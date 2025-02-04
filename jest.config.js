const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^c-component-communication-child$': '<rootDir>/examples/lwc_custom_mocks/componentCommunicationChild',
    }
};

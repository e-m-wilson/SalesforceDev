import { createElement } from 'lwc';
import JestExample from 'c/jestExample';

describe('c-jest-example - Testing Suite', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    async function flushPromises() {
        return Promise.resolve();
    }

    it('This test method will check that the message is set properly both when the component loads and when the user clicks the button', async () => {
        // Arrange
        const element = createElement('c-jest-example', {
            is: JestExample
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(element.shadowRoot.querySelector('p').textContent).toBe('Hello World!');

        let btn = element.shadowRoot.querySelector('lightning-button');
        btn.click();

        await flushPromises();

        expect(element.shadowRoot.querySelector('p').textContent).toBe('The message changed!');
    });

});
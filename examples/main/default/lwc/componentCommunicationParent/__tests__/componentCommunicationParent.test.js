import { createElement } from 'lwc';
import ComponentCommunicationParent from 'c/componentCommunicationParent';

describe('c-component-communication-parent', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    async function flushPromises() {
        return Promise.resolve();
    }

    it('message on child component is accessible', async () => {
        // Arrange
        const element = createElement('c-component-communication-parent', {
            is: ComponentCommunicationParent
        });

        // Act
        document.body.appendChild(element);

        const childComp = element.shadowRoot.querySelector('c-component-communication-child');


        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(childComp).toHaveProperty('message');
    });

    it('message received from child component event', async () => {
        // Arrange
        const element = createElement('c-component-communication-parent', {
            is: ComponentCommunicationParent
        });

        // Act
        document.body.appendChild(element);

        const childComp = element.shadowRoot.querySelector('c-component-communication-child');
        
        childComp.dispatchEvent(new CustomEvent('mycustomevent', {detail: 'message from child'}));

        await flushPromises();

        let p = element.shadowRoot.querySelector('p');


        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(p.textContent).toBe('message from child');
    });

});
import { newSpecPage } from '@stencil/core/testing';
import { LogoutComp } from '../logout-comp';

describe('logout-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LogoutComp],
      html: `<logout-comp></logout-comp>`,
    });
    expect(page.root).toEqualHtml(`
      <logout-comp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </logout-comp>
    `);
  });
});

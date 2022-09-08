import { newE2EPage } from '@stencil/core/testing';

describe('logout-comp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<logout-comp></logout-comp>');

    const element = await page.find('logout-comp');
    expect(element).toHaveClass('hydrated');
  });
});

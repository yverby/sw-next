import { render, screen, userEvent } from '@/utils/test-utils';

import { RootWelcome, testId } from './root-welcome';

describe('features/root/components/root-welcome', () => {
  test('should toggle theme color mode', async () => {
    render(<RootWelcome />);
    expect(screen.getByTestId(testId.toggleMode)).toHaveTextContent(/light/i);

    await userEvent.click(screen.getByTestId(testId.toggleMode));
    expect(screen.getByTestId(testId.toggleMode)).toHaveTextContent(/dark/i);
  });
});

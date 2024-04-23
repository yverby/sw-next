import { useColorMode } from '@chakra-ui/react';

import { mocks, fireEvent, render, screen } from '@/utils/test-utils';

import { ToggleMode } from '../toggle-mode';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: jest.fn(),
}));

jest.mock('@chakra-ui/icons', () => ({
  ...jest.requireActual('@chakra-ui/icons'),
  SunIcon: () => <svg data-testid="sun" />,
  MoonIcon: () => <svg data-testid="moon" />,
}));

const mock = mocks({ useColorMode });

describe('@/components/theme/toggle-mode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should toggle color mode when clicked', () => {
    const toggleColorMode = jest.fn();

    mock.useColorMode.mockReturnValue({ toggleColorMode });
    render(<ToggleMode />);

    fireEvent.click(screen.getByLabelText('Toggle color mode'));
    expect(toggleColorMode).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['sun', 'dark'],
    ['moon', 'light'],
  ])('should render "%s" icon if color mode is %s', (icon, colorMode) => {
    mock.useColorMode.mockReturnValue({ colorMode });
    render(<ToggleMode />);

    expect(screen.getByTestId(icon)).toBeInTheDocument();
  });
});

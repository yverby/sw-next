import { APP_NAME } from '@/config/app';
import { ToggleMode } from '@/components/theme';
import { render, screen } from '@/utils/test-utils';

import { RootShell } from '../root-shell';

jest.mock('@/components/theme');

describe('@/features/root/components/root-shell', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display logo as link', () => {
    render(<RootShell />);
    const logo = screen.getByText(APP_NAME);
    expect(logo).toHaveAttribute('href', '/');
  });

  it('should render ToggleMode', () => {
    render(<RootShell />);
    expect(ToggleMode).toHaveBeenCalledTimes(1);
  });
});

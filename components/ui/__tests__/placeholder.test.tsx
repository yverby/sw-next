import { render, screen } from '@/utils/test-utils';

import { Placeholder } from '../placeholder';

describe('@/components/ui/placeholder', () => {
  it('should render props as elements', () => {
    const props = {
      title: <div data-testid="title" />,
      subtitle: <div data-testid="subtitle" />,
      children: <div data-testid="children" />,
    };

    render(<Placeholder {...props} />);

    Object.keys(props).forEach((testId) => {
      expect(screen.queryByTestId(testId)).toBeInTheDocument();
    });
  });

  it('should render props as strings', () => {
    const props = {
      title: 'title',
      subtitle: 'subtitle',
      children: 'children',
    };

    render(<Placeholder {...props} />);

    Object.keys(props).forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });
});

import { useQuery } from '@tanstack/react-query';

import { mocks, render } from '@/utils/test-utils';
import { Placeholder } from '@/components/ui';

import { PeopleCard } from '../people-card';
import { PeopleDetails } from '../people-details';
import { PeopleDetailsFlow } from '../people-details-flow';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

jest.mock('@/components/ui', () => ({
  ...jest.requireActual('@/components/ui'),
  Placeholder: jest.fn(),
}));

// Mocking people components
jest.mock('../people-card');
jest.mock('../people-details-flow');

const mock = mocks({ useQuery });

describe('@/features/people/components/people-details', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Placeholder with loading state', () => {
    mock.useQuery.mockReturnValue({ isFetching: true });
    render(<PeopleDetails id={1} />);

    expect(Placeholder).toHaveBeenCalledWith(
      expect.objectContaining({ loading: true }),
      expect.anything()
    );
  });

  it('should render Placeholder with error message', () => {
    const query = { isError: true, error: new Error('error') };

    mock.useQuery.mockReturnValue(query);
    render(<PeopleDetails id={1} />);

    expect(Placeholder).toHaveBeenCalledWith(
      expect.objectContaining({ subtitle: query.error.message }),
      expect.anything()
    );
  });

  it('should render PeopleCard and PeopleDetailsFlow with data', () => {
    const query = { isSuccess: true, data: {} };

    mock.useQuery.mockReturnValue(query);
    render(<PeopleDetails id={1} />);

    expect(PeopleCard).toHaveBeenCalledWith(
      expect.objectContaining({ data: query.data }),
      expect.anything()
    );
    expect(PeopleDetailsFlow).toHaveBeenCalledWith(
      expect.objectContaining({ data: query.data }),
      expect.anything()
    );
  });
});

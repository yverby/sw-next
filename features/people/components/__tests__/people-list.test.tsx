import { useInfiniteQuery } from '@tanstack/react-query';

import { Placeholder } from '@/components/ui';
import { fireEvent, mocks, render, screen } from '@/utils/test-utils';

import { PeopleList } from '../people-list';
import { PeopleCard } from '../people-card';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useInfiniteQuery: jest.fn(),
}));

jest.mock('@/components/ui', () => ({
  ...jest.requireActual('@/components/ui'),
  Placeholder: jest.fn(),
}));

// Mocking people components
jest.mock('../people-card');

const mock = mocks({ useInfiniteQuery });

describe('@/features/people/components/people-list', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Placeholder with loading state', () => {
    mock.useInfiniteQuery.mockReturnValue({ isFetching: true });
    render(<PeopleList />);

    expect(Placeholder).toHaveBeenCalledWith(
      expect.objectContaining({ loading: true }),
      expect.anything()
    );
  });

  it('should render Placeholder with error message', () => {
    const query = { isError: true, error: new Error('error') };

    mock.useInfiniteQuery.mockReturnValue(query);
    render(<PeopleList />);

    expect(Placeholder).toHaveBeenCalledWith(
      expect.objectContaining({ subtitle: query.error.message }),
      expect.anything()
    );
  });

  it('should render PeopleCard with data', () => {
    const data = { id: 1 };
    const query = { isSuccess: true, data: { pages: [{ results: [data] }] } };

    mock.useInfiniteQuery.mockReturnValue(query);
    render(<PeopleList />);

    expect(PeopleCard).toHaveBeenCalledWith(
      expect.objectContaining({ data }),
      expect.anything()
    );
  });

  it('should load more data', () => {
    const fetchNextPage = jest.fn();
    const query = { isSuccess: true, hasNextPage: true, fetchNextPage };

    mock.useInfiniteQuery.mockReturnValue(query);
    render(<PeopleList />);

    fireEvent.click(screen.getByText('Load more'));
    expect(fetchNextPage).toHaveBeenCalledTimes(1);
  });
});

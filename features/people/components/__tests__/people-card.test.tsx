import { render } from '@/utils/test-utils';

import { PeopleCard } from '../people-card';

describe('@/features/people/components/people-details-graph', () => {
  it('should render without crashing', () => {
    render(<PeopleCard data={{}} />);
  });
});

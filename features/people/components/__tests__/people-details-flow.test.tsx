import { render } from '@/utils/test-utils';

import { PeopleDetailsFlow } from '../people-details-flow';

describe('@/features/people/components/people-details-flow', () => {
  it('should render without crashing', () => {
    render(<PeopleDetailsFlow data={{}} />);
  });
});

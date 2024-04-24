import { useRouter } from 'next/navigation';
import { Drawer } from '@chakra-ui/react';

import { mocks, render } from '@/utils/test-utils';

import { PeoplePreview } from '../people-preview';

jest.mock('next/navigation');

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  Drawer: jest.fn(),
}));

const mock = mocks({ useRouter, Drawer });

describe('@/features/people/components/people-preview', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Drawer by default', () => {
    render(<PeoplePreview />);

    expect(Drawer).toHaveBeenCalledWith(
      expect.objectContaining({ isOpen: true }),
      expect.anything()
    );
  });

  it('should call router.back when Drawer is closed', () => {
    const back = jest.fn();

    mock.useRouter.mockReturnValue({ back });
    render(<PeoplePreview />);

    // Drawer closing simulation
    mock.Drawer.mock.calls[0][0].onClose();
    expect(back).toHaveBeenCalledTimes(1);
  });
});

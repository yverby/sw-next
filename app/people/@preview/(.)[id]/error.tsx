'use client';

import { Placeholder } from '@/components/ui';
import { PeoplePreview } from '@/features/people/components';

export default function PeoplePreviewDetailsError({ error }: { error: Error }) {
  return (
    <PeoplePreview>
      <Placeholder title="Oops!" subtitle={error.message} />
    </PeoplePreview>
  );
}

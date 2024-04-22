'use client';

import { Placeholder } from '@/components/ui';

export default function PeopleError({ error }: { error: Error }) {
  return <Placeholder title="Oops!" subtitle={error.message} />;
}

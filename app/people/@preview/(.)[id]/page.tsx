import { PeopleDetails, PeoplePreview } from '@/features/people/components';

export default function PeoplePreviewDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <PeoplePreview>
      <PeopleDetails {...params} />
    </PeoplePreview>
  );
}

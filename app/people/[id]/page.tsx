import { Placeholder } from '@/components/ui';

export default function PeopleDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Placeholder title="People details page" subtitle={`ID: ${params.id}`} />
  );
}

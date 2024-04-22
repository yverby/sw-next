import { redirect, RedirectType } from 'next/navigation';

export default function RootPage() {
  redirect('/people', RedirectType.replace);
}

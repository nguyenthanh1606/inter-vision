import { redirect } from '@/i18n/navigation';

export default function AboutRedirect() {
  redirect({ href: '/about/about-i-dent', locale: 'vi' });
}

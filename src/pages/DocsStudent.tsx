import DocsPage from '../components/docs/DocsPage';
import { studentAppUrl } from '../lib/config';

export default function DocsStudent() {
  return <DocsPage ns="student" accent="amber" appUrl={studentAppUrl} />;
}

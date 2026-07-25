import DocsPage from '../components/docs/DocsPage';
import { staffAppUrl } from '../lib/config';

export default function DocsStaff() {
  return <DocsPage ns="staff" accent="brand" appUrl={staffAppUrl} />;
}

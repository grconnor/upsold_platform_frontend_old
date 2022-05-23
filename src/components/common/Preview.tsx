import Link from 'next/link';
import { ReactElement } from 'react';

interface PreviewPropTypes {
  preview: boolean;
}

const Preview = ({ preview }: PreviewPropTypes): ReactElement | null => {
  if (!preview) {
    return null;
  }

  return (
    <div className="preview">
      This is a page preview. <Link href="/api/exit-preview">Click here</Link> to exit preview mode.
    </div>
  );
};

export default Preview;

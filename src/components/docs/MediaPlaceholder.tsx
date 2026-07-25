import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageIcon, PlayCircle } from 'lucide-react';

export default function MediaPlaceholder({
  kind,
  label,
  src
}: {
  kind: 'image' | 'video';
  label: string;
  src: string;
}) {
  const { t } = useTranslation();
  const [failed, setFailed] = useState(false);
  const isVideo = kind === 'video';

  if (!failed) {
    return isVideo ? (
      <video
        src={src}
        controls
        className="aspect-video w-full rounded-2xl border border-ink-700 bg-ink-100 object-cover"
        onError={() => setFailed(true)}
      />
    ) : (
      <img
        src={src}
        alt={label}
        className="aspect-video w-full rounded-2xl border border-ink-700 bg-ink-100 object-cover"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={`group relative flex aspect-video w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed px-6 text-center ${
        isVideo ? 'border-amber-400/40 bg-amber-400/[0.05]' : 'border-ink-600 bg-ink-850/60'
      }`}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative flex flex-col items-center gap-2">
        {isVideo ? (
          <PlayCircle className="h-9 w-9 text-amber-600" />
        ) : (
          <ImageIcon className="h-9 w-9 text-ink-500" />
        )}
        <p className="text-sm font-medium text-ink-300">{label}</p>
        <p className="text-xs text-ink-500">
          {isVideo ? t('docs.common.videoComingSoon') : t('docs.common.mediaComingSoon')}
        </p>
        <code className="mt-1 rounded-md border border-ink-700 bg-ink-950/60 px-2 py-1 text-[11px] text-ink-400">
          {src.replace(/^\//, '')}
        </code>
      </div>
    </div>
  );
}

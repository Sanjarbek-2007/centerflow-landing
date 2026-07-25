export type DocNamespace = 'staff' | 'student';
export type MediaKind = 'screenshot' | 'video';

/**
 * Every doc section's media lives in one flat folder: public/media/.
 * Filename convention: {staff|student}-{section-id}-{screenshot|video}.{png|mp4}
 * Drop a correctly named file in and the page picks it up automatically —
 * no code change needed. See MediaPlaceholder, which falls back to a
 * placeholder box (showing this exact filename) until the file exists.
 */
export function mediaPath(ns: DocNamespace, sectionId: string, kind: MediaKind): string {
  const ext = kind === 'video' ? 'mp4' : 'png';
  return `/media/${ns}-${sectionId}-${kind}.${ext}`;
}

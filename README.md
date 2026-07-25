# CenterFlow — Landing Page

Marketing site for CenterFlow: services/features, pricing (Freemium / Pro / Pro+), a contact form wired to a Google Sheet, and a full staff + student instructions ("docs") section. Available in English, Russian and Uzbek.

- **Landing:** centerflow.comma.uz
- **Study Center app:** centerflow-app.comma.uz
- **Student app:** student-app.comma.uz

## Stack

React 19 + Vite + Tailwind CSS 4 + react-router-dom + i18next + motion (Framer Motion successor) + lucide-react.

## Development

```bash
npm install
npm run dev      # http://localhost:3020
npm run build    # production build to dist/
npm run lint     # tsc --noEmit
```

## Translations

All copy lives in `src/locales/{en,ru,uz}.json`, same key structure in all three files. Default language is Uzbek (`src/i18n.ts`). If you add a new key, add it to all three files — nothing falls back silently to English in the UI.

## Adding screenshots & videos for the instructions pages

Every step-by-step guide under `/docs/staff` and `/docs/student` has a spot for a screenshot (and, for a few key steps, a short screen recording). **They all live in one folder:**

```
public/media/
```

Drop a correctly named file in there and it appears automatically — no code change, no rebuild needed in dev (just refresh). Until a file exists, that spot shows a placeholder box that prints the exact filename it's waiting for, so you never have to look this up twice.

**Naming convention:**

```
{staff|student}-{section-id}-{screenshot|video}.{png|mp4}
```

Screenshots are `.png`, roughly a 16:9 crop. Videos are `.mp4`.

### Staff docs (`public/media/`)

| Section | Screenshot | Video |
|---|---|---|
| Create center & sign in | `staff-getting-started-screenshot.png` | `staff-getting-started-video.mp4` |
| Add students | `staff-add-students-screenshot.png` | — |
| Invite team | `staff-invite-team-screenshot.png` | — |
| Group by section | `staff-group-by-section-screenshot.png` | — |
| Build the schedule | `staff-schedule-lessons-screenshot.png` | — |
| Run a lesson (attendance & grading) | `staff-run-lessons-screenshot.png` | `staff-run-lessons-video.mp4` |
| Share materials | `staff-materials-screenshot.png` | — |
| Payments & invoicing | `staff-payments-screenshot.png` | — |
| Certificates | `staff-certificates-screenshot.png` | — |

### Student docs (`public/media/`)

| Section | Screenshot | Video |
|---|---|---|
| Join your center | `student-getting-started-screenshot.png` | `student-getting-started-video.mp4` |
| Home tab | `student-home-tab-screenshot.png` | — |
| Lessons in Learn tab | `student-learn-lessons-screenshot.png` | — |
| Submitting homework | `student-homework-screenshot.png` | `student-homework-video.mp4` |
| Requesting extra lessons | `student-extra-lessons-screenshot.png` | — |
| Chat & announcements | `student-messages-screenshot.png` | — |
| Profile, XP & leaderboard | `student-profile-leaderboard-screenshot.png` | — |

If a doc section ever gets renamed/added in `src/locales/*.json` (the `id` field under `docs.staff.sections` / `docs.student.sections`), the expected filename changes with it — the placeholder box always shows the current expected name, so check there if something stops showing up after an edit.

The lookup logic itself is in `src/lib/media.ts`, and the fallback rendering is in `src/components/docs/MediaPlaceholder.tsx`.
# centerflow-landing

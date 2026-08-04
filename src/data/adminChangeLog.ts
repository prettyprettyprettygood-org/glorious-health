export interface ChangeLogEntry {
  date: string;
  summary: string;
}

// Newest entry first. Add a line here whenever a requested change is completed.
export const ADMIN_CHANGE_LOG: ChangeLogEntry[] = [
  {
    date: 'August 1, 2026',
    summary:
      'Initial build request — added core page content and images, and settled on the overall site theme.',
  },
];

/** Single place for repo pointers — every doc link on the site resolves through here. */
export const REPO_URL = 'https://github.com/mnemonik-dev/universal-paywall';
export const REPO_BRANCH = 'main';

/** Turn a repo-relative doc path (or an absolute URL) into a browsable link. */
export function repoLink(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${REPO_URL}/blob/${REPO_BRANCH}/${path}`;
}

export const SITE_TITLE = 'Universal Paywall';
export const TAGLINE =
  'Get paid on the platforms you already run — without forking them. Non-custodial, feeless, per-event settlement.';

/** The six permissionless attachment patterns (+ the resolver enrichment). */
export const PATTERN_LABELS: Record<string, string> = {
  'config-redirect': 'config redirect',
  'event-sidecar': 'event sidecar',
  'reverse-proxy': 'reverse proxy',
  'published-plugin': 'published plugin',
  'external-provider': 'external provider',
  'payer-side': 'payer-side adaptor',
  resolver: 'resolver',
};

/** Curated doc index (drives /docs and the per-page "Links" sections). */
export const DOCS = [
  {
    label: 'Integration Playbook — build a new integration',
    path: 'packages/integrations/INTEGRATION-PLAYBOOK.md',
    blurb:
      'The step-by-step instruction doc + "questions script": pick the attachment pattern, build the adapter, wire the rail, climb the test ladder.',
  },
  {
    label: 'The six permissionless attachment patterns',
    path: 'work/creator-platform-integrations/integration-patterns.md',
    blurb:
      'How to integrate a paywall without touching the platform — config redirect, event sidecar, reverse proxy, published plugin, external provider, payer-side adaptor.',
  },
  {
    label: 'Testing plan — the L1→L4 ladder + per-platform matrix',
    path: 'work/creator-platform-integrations/testing-plan.md',
    blurb:
      'Four layers per platform; an integration is "done" only when its layer-4 money loop settles on-chain. Drives the tested badges on this site.',
  },
  {
    label: 'Deployment plan + per-platform recipes',
    path: 'packages/integrations/deploy/README.md',
    blurb:
      'Shared prerequisites, the up-integration env reference, and the fork-free attach recipe for every platform.',
  },
  {
    label: 'Status',
    path: 'work/creator-platform-integrations/STATUS.md',
    blurb: 'Current build/test status across all verticals.',
  },
  {
    label: 'Handoff / doc index',
    path: 'work/HANDOFF.md',
    blurb: 'Doc index and environment gotchas (Docker, anvil, gitleaks).',
  },
];

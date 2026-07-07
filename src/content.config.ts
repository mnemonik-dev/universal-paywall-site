import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One YAML record per integration (src/content/integrations/<slug>.yaml) drives
 * the /integrations grid, the home grid, and every per-platform page.
 * Adding a platform = adding one record here + its recipe link in the repo.
 */
const integrations = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/integrations' }),
  schema: z.object({
    name: z.string(),
    vertical: z.string(),
    pattern: z.enum([
      'config-redirect',
      'event-sidecar',
      'reverse-proxy',
      'published-plugin',
      'external-provider',
      'payer-side',
      'resolver',
    ]),
    /** One-liner for the grid cards: the attach surface in a sentence. */
    summary: z.string(),
    /** The event → who pays → who gets paid. */
    meteredEvent: z.string(),
    payer: z.string(),
    payee: z.string(),
    /** The exact hook/config/proxy/provider surface — always fork-free. */
    attachSurface: z.string(),
    quickstartIntro: z.string().optional(),
    /** Copy-paste block (env vars / install steps). Placeholder secrets only. */
    quickstart: z.string(),
    verifyCmd: z.string().optional(),
    verifyNote: z.string().optional(),
    /** Drives the "tested" badge (from the testing-plan matrix). */
    tested: z.boolean(),
    testedDetail: z.string().optional(),
    /** Repo-relative path to the authoritative recipe. */
    recipeDoc: z.string(),
    caveats: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), path: z.string() })).default([]),
    /** PeerTube is first-class. */
    featured: z.boolean().default(false),
    /** The browser extension is the consumer side, not a creator platform. */
    payerSide: z.boolean().default(false),
    /** Sort order in grids (featured first, then ascending order). */
    order: z.number().default(100),
  }),
});

export const collections = { integrations };

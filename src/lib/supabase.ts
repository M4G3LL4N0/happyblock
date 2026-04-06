import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey);

let browserClient: SupabaseClient | null = null;

function createMockQueryBuilder(initialData: unknown[] = []) {
  let rows = [...initialData];

  const builder = {
    select() {
      return builder;
    },
    insert(payload: unknown) {
      const inserted = Array.isArray(payload) ? payload : [payload];
      rows = inserted;
      return Promise.resolve({ data: inserted, error: null });
    },
    update(payload: Record<string, unknown>) {
      rows = rows.map((row) =>
        typeof row === "object" && row !== null ? { ...row, ...payload } : row
      );
      return builder;
    },
    upsert(payload: unknown) {
      const upserted = Array.isArray(payload) ? payload : [payload];
      rows = upserted;
      return Promise.resolve({ data: upserted, error: null });
    },
    delete() {
      rows = [];
      return builder;
    },
    eq(column: string, value: unknown) {
      rows = rows.filter((row) => {
        if (typeof row !== "object" || row === null) return false;
        return (row as Record<string, unknown>)[column] === value;
      });
      return builder;
    },
    neq(column: string, value: unknown) {
      rows = rows.filter((row) => {
        if (typeof row !== "object" || row === null) return true;
        return (row as Record<string, unknown>)[column] !== value;
      });
      return builder;
    },
    order(column: string, options?: { ascending?: boolean }) {
      const ascending = options?.ascending ?? true;
      rows = [...rows].sort((a, b) => {
        const aValue =
          typeof a === "object" && a !== null
            ? (a as Record<string, unknown>)[column]
            : undefined;
        const bValue =
          typeof b === "object" && b !== null
            ? (b as Record<string, unknown>)[column]
            : undefined;

        if (aValue === bValue) return 0;
        if (aValue == null) return ascending ? 1 : -1;
        if (bValue == null) return ascending ? -1 : 1;
        if (aValue < bValue) return ascending ? -1 : 1;
        return ascending ? 1 : -1;
      });
      return Promise.resolve({ data: rows, error: null });
    },
    limit(count: number) {
      rows = rows.slice(0, count);
      return builder;
    },
    single() {
      return Promise.resolve({ data: rows[0] ?? null, error: null });
    },
    maybeSingle() {
      return Promise.resolve({ data: rows[0] ?? null, error: null });
    },
    then(resolve: (value: { data: unknown[]; error: null }) => unknown) {
      return Promise.resolve({ data: rows, error: null }).then(resolve);
    },
    catch() {
      return Promise.resolve({ data: rows, error: null });
    },
  };

  return builder;
}

export function getSupabaseClient(): SupabaseClient | null {
  if (!hasSupabaseEnv) return null;

  if (!browserClient) {
    browserClient = createClient(supabaseUrl!, supabaseAnonKey!);
  }

  return browserClient;
}

export const supabase = new Proxy(
  {},
  {
    get(_target, prop) {
      const client = getSupabaseClient();

      if (!client) {
        if (prop === "from") {
          return () => createMockQueryBuilder([]);
        }

        return undefined;
      }

      const value = (client as unknown as Record<string, unknown>)[String(prop)];
      return typeof value === "function" ? value.bind(client) : value;
    },
  }
) as unknown as SupabaseClient;

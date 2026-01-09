import { QueryClient } from "@tanstack/vue-query"

const queryClient = new QueryClient()

if (import.meta.env.DEV) {
  window.__TANSTACK_QUERY_CLIENT__ = queryClient
}

export { queryClient }
import { QueryClient } from "@tanstack/vue-query"

const queryClient = new QueryClient()

window.__TANSTACK_QUERY_CLIENT__ = queryClient

export { queryClient }
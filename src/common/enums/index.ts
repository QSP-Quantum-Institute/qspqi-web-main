export const AppRoutes = {
  HOME: "/",
  HIOXX: "/hioxx",
} as const;

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const ApiEndpoints = {} as const;

export type ApiEndpoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];

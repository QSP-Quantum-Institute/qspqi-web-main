export const AppRoutes = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
} as const;

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const ApiEndpoints = {
  // Add your API endpoints here
  // EXAMPLE: '/example',
} as const;

export type ApiEndpoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];

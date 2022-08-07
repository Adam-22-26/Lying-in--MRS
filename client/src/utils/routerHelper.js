export function getParentRouterPath(instance) {
  try {
    return instance.$parent.$route.meta.basePath;
  } catch (e) {
    return "";
  }
}

export function routeNameAlreadyRegistered(router, routeName) {
  const registered = router.resolve({ name: routeName });
  if (registered && registered.href !== "#/" && registered.href !== "/") {
    return true;
  }
  return false;
}

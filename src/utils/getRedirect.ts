import router from "@/router";

const getRedirect = (fallback) => {
  const redirectUrl = router.currentRoute.value.query.redirect;
  if (redirectUrl) {
    return redirectUrl.toString();
  } else {
    return fallback;
  }
};
export default getRedirect;

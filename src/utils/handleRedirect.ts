import router from "@/router";

const handleRedirect = (fallback) => {
  const redirectUrl = router.currentRoute.value.query.redirect;
  if (redirectUrl) {
    router.push(redirectUrl.toString());
  } else {
    router.push(fallback);
  }
};
export default handleRedirect;

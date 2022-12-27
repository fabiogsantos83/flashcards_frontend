function handleError(error, router, toast) {
  if (error.response.status === 401) {
    router.push("login");
    return true;
  }

  toast.error(error.response.data.error);

  return false;
}

export default handleError;

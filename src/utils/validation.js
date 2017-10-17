export const isLoggedIn = (iam) => {
  return iam.hasOwnProperty('token');
}

export const isAdmin = (iam) => {
  if(!isLoggedIn(iam)) {
    return false;
  }
  return iam.scope === 'ADMIN';
}

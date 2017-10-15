export const isLoggedIn = () => {
  return localStorage.hasOwnProperty('iam');
}

export const isAdmin = () => {
  if(!isLoggedIn()) {
    return false;
  }
  return JSON.parse(localStorage.getItem('iam')).scope === 'ADMIN';
}

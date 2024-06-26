// Authenticated user check
export function isAuthenticated(username, password) {
    if (username === 'admin@gmail.com' && password === 'password') {
      return true;
    } else {
      return false;
    }
  }
  
  // clear error message from fields
  export function clearError (errors , field) {
    console.log("errors: " , errors , field);
    if (errors[field]) {
        errors[field] = '';
    }
};


import { logout } from "./Apis";

const apiPlugin = {
  install(app) {
    app.config.globalProperties.$logout = logout;
    // app.config.globalProperties.$clearError = clearError;
  }
};

export default apiPlugin;

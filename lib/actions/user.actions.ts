// TODO: Replace stubs with real backend implementation

export const signIn = async (data: { email: string; password: string }) => {
  throw new Error("signIn: not implemented");
};

export const signUp = async (userData: any) => {
  throw new Error("signUp: not implemented");
};

export const getLoggedInUser = async () => {
  // Return null to simulate logged-out state during frontend dev
  return null;
};

export const logoutAccount = async () => {
  throw new Error("logoutAccount: not implemented");
};

export const createLinkToken = async (user: any) => {
  throw new Error("createLinkToken: not implemented");
};

export const exchangePublicToken = async ({ publicToken, user }: any) => {
  throw new Error("exchangePublicToken: not implemented");
};

export const getUserInfo = async ({ userId }: { userId: string }) => {
  throw new Error("getUserInfo: not implemented");
};

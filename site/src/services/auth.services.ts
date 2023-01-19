import supabase from "../lib/superbase";

const origin_url = import.meta.env.VITE_ORIGIN_URL;

class AuthServices {
  createAccount = async ({ email, password }: any) => {
    const { error, data } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      throw Error(error.message);
    } else {
      return data;
    }
  };
  signIn = async ({ email, password }: any) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      throw Error(error.message);
    } else {
      return data;
    }
  };
  signWithGoogle = async ({ redirect }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: origin_url + redirect,
      },
    });
    if (error) {
      throw Error(error.message);
    } else {
      return data;
    }
  };

  getCurrentUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw Error(error.message);
    } else {
      return data;
    }
  };
  currentUserChanged = (callback) => {
    return supabase.auth.onAuthStateChange((event, session) => {
      const user = session?.user?.user_metadata;

      return callback({
        id: session?.user?.id,
        email: user?.email,
        names: user?.name,
        photo: user?.picture,
      });
    });
  };
  forgotPassword = async ({ email }) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: origin_url + "/reset-password",
    });
    if (error) {
      throw Error(error.message);
    } else {
      return data;
    }
  };
  resetPassword = async ({ password, code }) => {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) {
      throw Error(error.message);
    } else {
      return data;
    }
  };
  logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw Error(error.message);
    } else {
      return;
    }
  };
}

export default AuthServices;

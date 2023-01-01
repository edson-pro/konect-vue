import supabase from "../lib/superbase";

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
      return callback(session?.user);
    });
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

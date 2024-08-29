import axiosHTTP from "./axiosHTTP";
export const userSlice = (set, get) => ({
  name: "UserSlice",
  token: null,
  profile: null,
  facebookData: null,
  setUser: async (user) => {
    set({ user: user });
  },
  login: async (data) => {
    //console.log(data);
    set((state) => (
      { ...state, token: data.accessToken,facebookData:data }
    ));
  },


  logout: async () => {

    set((state) => ({
      ...state,
      token: null,
      profile: null,
      facebookData: null,
    }));

    return true;
  },
  getProfile: async (token) => {
    const { data } = await axiosHTTP({
      url: 'https://graph.facebook.com/me',
      method: 'get',
      params: {
        fields: ['id', 'email', 'first_name', 'last_name','picture.width(800).height(600)'].join(','),
        access_token: token,
      },
    });
    
    if (data) {
      set((state) => ({
        ...state,
        profile: data,
      }));
    }
  }
});
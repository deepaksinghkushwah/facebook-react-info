import { useEffect } from "react";
import { useUserStore } from "../store/useStore";

const Profile = () => {
  const token = useUserStore((state) => state.token);
  const getProfile = useUserStore((state) => state.getProfile);
  const profile = useUserStore((state) => state.profile);
  useEffect(() => {    
    (async() => {
      await getProfile(token);    
    })();
     
  }, []);

  return (
    <>
      <h1>Profile</h1>
      {profile != null ? (
        <>
          Name: {profile?.first_name + " " + profile.last_name}
          <br />
          Email: {profile?.email}
          <br />
          ID: {profile?.id}
          <br />
          <img src={profile?.picture?.data?.url} />
        </>
      ) : (
        <span>Profile not found</span>
      )}
    </>
  );
};

export default Profile;

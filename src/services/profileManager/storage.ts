import { useLocalStorage } from "@raycast/utils";
import { Profile } from "../../models/profile";

export const useProfileStorage = () => {
  const { value: profiles = [], setValue: setProfiles } = useLocalStorage<Profile[]>("profiles", []);

  // Create - Add a new profile
  const addProfile = (profile: Profile) => {
    setProfiles([...profiles, profile]);
  };

  // Read - Get all profiles
  const getAllProfiles = () => {
    return profiles;
  };

  // Read - Get profile by id
  const getProfileById = (id: string) => {
    return profiles.find((profile) => profile.id === id);
  };

  // Update - Update an existing profile
  const updateProfile = (updatedProfile: Profile) => {
    setProfiles(profiles.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)));
  };

  // Delete - Remove a profile
  const deleteProfile = (id: string) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return {
    profiles,
    addProfile,
    getAllProfiles,
    getProfileById,
    updateProfile,
    deleteProfile,
  };
};

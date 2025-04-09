import { Detail, ActionPanel, Action, Form } from "@raycast/api";
import { useProfileStorage } from "./services/profileManager/storage";

export default function Command() {
  const { profiles, addProfile, getAllProfiles, getProfileById, updateProfile, deleteProfile } = useProfileStorage();

  // Example: Add a new profile
  const handleAddProfile = () => {
    const newProfile = {
      id: "2",
      name: "Test Profile",
      email: "test@example.com",
    };
    addProfile(newProfile);
  };

  // Example: Get all profiles
  const handleGetAllProfiles = () => {
    const allProfiles = getAllProfiles();
    console.log("All Profiles:", allProfiles);
  };

  return (
    <Detail
      markdown="# Profile Storage Test"
      actions={
        <ActionPanel>
          <Action title="Add Profile" onAction={handleAddProfile} />
          <Action title="Get All Profiles" onAction={handleGetAllProfiles} />
        </ActionPanel>
      }
    />
  );
}
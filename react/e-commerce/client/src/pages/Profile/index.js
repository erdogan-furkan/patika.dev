import { Heading, Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <Heading as="h3">Profile</Heading>

      <code>{JSON.stringify(user)}</code>

      <br />
      <br />

      <Button colorScheme="pink" variant="solid" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;

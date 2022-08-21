// Component
import Layout from '../layout';

// Main
const ProfileContainer: React.FC = () => {
  return (
    <Layout.Root>
      <Layout.Header></Layout.Header>
      <Layout.SidePane></Layout.SidePane>
      <Layout.Main></Layout.Main>
    </Layout.Root>
  );
};

export default ProfileContainer;

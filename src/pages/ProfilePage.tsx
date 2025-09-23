const ProfilePage = () => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  return (
    <main style={{ padding: 16 }}>
      <h1>Profile</h1>
      <p>Only visible when authenticated.</p>
      <p>Token: {token}</p>
    </main>
  );
};

export default ProfilePage;

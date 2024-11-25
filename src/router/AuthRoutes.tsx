import { Routes } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/micro-alerts" element={<Repositories />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/settings" element={<ComingSoon />} />
        <Route path="/integrations" element={<ComingSoon />} />
        <Route path="/login" element={<VsCodeConnectingPage />} />
        <Route path="/bridge" element={<ComingSoon />} />
        <Route path="/IDO" element={<IDO />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<VsCodeConnectingPage />} />
      <Route path="/oauth/github" element={<GithubConnectingPage />} /> */}
    </Routes>
  );
};

export default AuthRoutes;

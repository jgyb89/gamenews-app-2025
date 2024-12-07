import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "false";

  // Debug log to verify the authentication state
  console.log("AuthLayout: isAuthenticated =", isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;

import React from "react";
// import LoginGithub from "../components/LoginGithub"
// import LoginGoogle from "../components/LoginGoogle"
import LoginForm from "../components/PostBlogForm";

const SignIn = () => {
  return (
    <div className="w-full flex mt-20 justify-center">
      <section className="flex flex-col w-[400px]">
        <h1 className="text-3xl w-full text-center font-bold mb-6">Sign in</h1>
        <LoginForm />
        {/* <LoginGithub />
        <LoginGoogle /> */}
      </section>
    </div>
  )
}

export default SignIn
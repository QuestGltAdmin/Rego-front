import React from "react";
import AnimatedPage from "../components/Animation/AnimatedPage";

const SetAnimationPage = (Component) => {
  function wrappedComponent(props) {
    return (
      <AnimatedPage>
        <Component {...props} />
      </AnimatedPage>
    );
  }
  return wrappedComponent;
};

export default SetAnimationPage;

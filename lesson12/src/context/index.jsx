/* eslint-disable react/prop-types */
import { UserProvider } from "./user";
import { HrProvider } from "./hr";

const Context = (props) => {
  return (
    <div>
      <UserProvider>
        <HrProvider>{props.children}</HrProvider>
      </UserProvider>
    </div>
  );
};

export default Context;

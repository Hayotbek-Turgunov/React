import { useContext } from "react";
import { MenuItem, Wrapper } from "./style";

import { UserContext } from "../../context/user";
import { HrContext } from "../../context/hr";

const Navbar = (props) => {
  const val = useContext(UserContext);
  const hrval = useContext(HrContext);

  console.log(val, "user");
  console.log(hrval, "hr");

  return (
    <Wrapper>
      <MenuItem>Home{props?.length}</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Reset</MenuItem>
      <MenuItem>Info {props.data?.length}</MenuItem>
    </Wrapper>
  );
};

export default Navbar;

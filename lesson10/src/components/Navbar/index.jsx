import { useContext } from "react";
import { MenuItem, Wrapper } from "./style";

import { UserContext } from "../../context/user";
import { HrContext } from "../../context/hr";

const Navbar = () => {
  const [val] = useContext(UserContext);

  return (
    <Wrapper>
      <MenuItem>Home{val?.length}</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Reset</MenuItem>
      <MenuItem>Info {val?.length}</MenuItem>
    </Wrapper>
  );
};

export default Navbar;

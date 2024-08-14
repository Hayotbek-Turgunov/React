import { MenuItem, Wrapper } from "./style";
import { UserContext } from "../../context/user";

const Navbar = () => {
  const [val] = UserContext();

  return (
    <Wrapper>
      <MenuItem>Home{val.length}</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Reset</MenuItem>
      <MenuItem>Info {val.length}</MenuItem>
    </Wrapper>
  );
};

export default Navbar;

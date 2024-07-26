import { Container, Input, Title, Wrapper, Button } from "./style";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>Login to your account</Title.Main>
        <Title.Description>Enter your details to login.</Title.Description>
        {/* Email */}
        <Title.Label>
          Email Addres <span className="star">*</span>
        </Title.Label>
        <Input placeholder="Enter your email address" />
        {/* PW */}
        <Title.Label>
          Email Password <span className="star">*</span>
        </Title.Label>
        <Input placeholder="Enter your email address" />
        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};
export default Login;

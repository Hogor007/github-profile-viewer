import { Container } from "./styles";
import { Header } from "../Header/Header";
import GitHubAvatar from '../../assets/error_icon.png'
import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <Container>
      <Header></Header>
      <div>
        <img src={GitHubAvatar} alt="GitHub avatar" />
        <h1>User not found!</h1>
        <Link className="btn" to="/">
          Back to Home Menu</Link>
      </div>
    </Container>
  );
}
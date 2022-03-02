import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../utils/context";

import LandingPage from "../view/LandingPage";
import { useRouter } from "next/router";
import Enter from "../pages/login";

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { user } = useContext(UserContext);
  const router = useRouter();

  return user ? props.children : props.fallback || <Enter />;
}

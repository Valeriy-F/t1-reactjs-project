import { ResponseErrorTemplate } from "../../components/templates";

const Error404 = () => {
  return <ResponseErrorTemplate response={{ status: 404, error: "Page not found" }} />;
};

export default Error404;

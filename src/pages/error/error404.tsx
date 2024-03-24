import { Typography, TypographyVariant } from "../../components/atoms";
import { ErrorTemplate } from "../../components/templates";

const Error404 = () => {
  return (
    <ErrorTemplate>
      <div>
        <Typography variant={TypographyVariant.H1} color="important">
          404
        </Typography>
      </div>
      <div>
        <Typography variant={TypographyVariant.H2}>Page is not found</Typography>
      </div>
    </ErrorTemplate>
  );
};

export default Error404;

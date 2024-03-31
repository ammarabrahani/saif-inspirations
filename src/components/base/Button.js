import { Button } from "@mui/material";

export const BaseButton = ({ text, navigate }) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate?.("/form/1");
      }}
    >
      {text}
    </Button>
  );
};

export default BaseButton;

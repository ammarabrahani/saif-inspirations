import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Context } from "../../context/contextAPI";

export default function RadioButtonsGroup() {
  const { formFields } = React.useContext(Context);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="0"
        name="radio-buttons-group"
      >
        {formFields?.selectedOptions?.map?.((opt, i) => {
          return <FormControlLabel value={i} control={<Radio />} label={opt} />;
        })}
      </RadioGroup>
    </FormControl>
  );
}

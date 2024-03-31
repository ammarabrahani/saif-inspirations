import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import FormTable from "../table";

import { Input } from "@mui/material";

import BaseButton from "../base/Button";
import { useNavigate } from "react-router-dom";

function Main(props) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: 400 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${500}px)` },
        }}
      >
        <Box
          style={{
            display: "flex",
            padding: "20px 0",
            justifyContent: "space-between",
          }}
        >
          <Input />
          <BaseButton text="New Form" navigate={navigate} />
        </Box>
        <FormTable />
        {/* <BasicModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
        /> */}
      </Box>
    </Box>
  );
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Main;

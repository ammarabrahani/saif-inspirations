import { Box, Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { Context } from "../../context/contextAPI";
import RadioButtonsGroup from "../base/Radio";
const Preview = () => {
  const { formFields } = useContext(Context);
  return (
    <Container>
      {" "}
      <Box
        style={{
          padding: "20px 0",
        }}
      >
        <Typography
          component={"h1"}
          style={{
            fontWeight: 600,
          }}
        >
          FORM 1
        </Typography>
      </Box>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"500px"}
            >
              <Box>Visit 1</Box>
              <Box>Type 1</Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {formFields?.map?.((field, i) => {
              return (
                <Box
                  style={{
                    backgroundColor: "#E2E8F0",
                    marginBottom: "20px",
                    padding: "15px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      lineHeight: "0",
                    }}
                  ></Box>
                  <Box>
                    <h4>
                      {i + 1}. {field?.name}
                    </h4>

                    {field?.fieldType === "Text Box" ? (
                      <Box
                        style={{
                          width: "300px",
                          height: "44px",
                          backgroundColor: "white",
                          borderRadius: "8px",
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        <Typography
                          style={{
                            lineHeight: "2.5",
                            marginLeft: "10px",
                          }}
                        >
                          {field?.value}
                        </Typography>
                      </Box>
                    ) : field?.fieldType === "Date/Time" ? (
                      <Box
                        style={{
                          width: "300px",
                          height: "44px",
                          backgroundColor: "white",
                          borderRadius: "8px",
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        <Typography
                          style={{
                            lineHeight: "2.5",
                            marginLeft: "10px",
                          }}
                        >
                          {field?.value}
                        </Typography>
                      </Box>
                    ) : field?.fieldType === "Radio Buttons (Single Answer)" ? (
                      <RadioButtonsGroup />
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default Preview;

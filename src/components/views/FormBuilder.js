import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RadioButtonsGroup from "../base/Radio";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import BasicModal from "../base/Modal";
import { useContext, useState } from "react";
import { Context } from "../../context/contextAPI";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const FormBuilder = () => {
  const [open, setOpen] = useState(false);
  const [editForm, setEditForm] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date

  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const { formFields, setFormFields, setSelectedOptions } = useContext(Context);
  const handleAddFields = () => {
    setOpen(true);
    // setEditForm(undefined);
    setSelectedOptions([]);
  };

  const handleInput = (val, i) => {
    setSelectedDate(val);
    // const filterField = formFields?.findIndex?.((item, index) => index !== i);
    // filterField.value = val;
    formFields[i].value = val;
  };

  const handleDate = (val, i) => {
    const formattedDate = dayjs(val?.$d).format("DD/MM/YYYY");
    formFields[i].value = formattedDate;
  };

  const handleDeleteField = (i) => {
    const filterField = formFields?.filter?.((item, index) => index !== i);
    setFormFields(filterField);
  };

  const handleEditForm = (index, field) => {
    setOpen(true);
    setEditForm(index);
  };

  return (
    <>
      <Container>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          <Typography
            component={"h1"}
            style={{
              fontWeight: 600,
            }}
          >
            {" "}
            FORM 1{" "}
          </Typography>
          <Box
            onClick={() => navigate("/form/1/preview")}
            style={{
              cursor: "pointer",
            }}
          >
            <img src={"/view.png"} alt="" />
          </Box>
        </Box>
        <Box>
          <Box>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    Section 1
                  </Typography>
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
                        >
                          <Box display={"flex"}>
                            <Box
                              mr={"2px"}
                              onClick={() => navigate("/form/1/preview")}
                            >
                              <img
                                src="/branching-paths-down-svgrepo-com 1.png"
                                alt=""
                              />
                            </Box>
                            <Box mr={"2px"}>
                              <img src="/copy-svgrepo-com 1.png" alt="" />
                            </Box>
                            <Box
                              mr={"2px"}
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() => handleEditForm(i)}
                            >
                              <img src="/edit-3-svgrepo-com 1.png" alt="" />
                            </Box>
                            <div
                              style={{
                                cursor: "pointer",
                              }}
                              mr={"2px"}
                              onClick={() => handleDeleteField(i)}
                            >
                              <img src="/delete-3-svgrepo-com 1.png" alt="" />
                            </div>
                          </Box>
                          <Box>var: _{field?.variable_name}</Box>
                        </Box>
                        <Box>
                          <h4>
                            {i + 1}. {field?.name}
                          </h4>

                          {field?.fieldType === "Text Box" ? (
                            <TextField
                              placeholder={field?.placeholder}
                              onChange={(e) => handleInput(e?.target?.value, i)}
                            />
                          ) : field?.fieldType === "Date/Time" ? (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={["DatePicker"]}>
                                <DatePicker
                                  style={{
                                    width: "300px",
                                  }}
                                  label="Basic date picker"
                                  onChange={(e) => {
                                    handleDate(e, i);
                                  }}
                                  value={selectedDate}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </DemoContainer>
                            </LocalizationProvider>
                          ) : field?.fieldType ===
                            "Radio Buttons (Single Answer)" ? (
                            <RadioButtonsGroup />
                          ) : (
                            ""
                          )}
                        </Box>
                      </Box>
                    );
                  })}
                  <Button
                    onClick={handleAddFields}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "0 auto",
                      border: "1px dashed",
                      width: "100%",
                    }}
                  >
                    Add fields
                  </Button>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
        </Box>
        <BasicModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleAddFields}
          handleClose={handleClose}
          editForm={editForm}
        />
      </Container>
    </>
  );
};

export default FormBuilder;

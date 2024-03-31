import { Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";

import BasicSelect from "./Select";
import InputMultiline from "./TextArea";
import UnstyledInputBasic from "./Input";
import { Context } from "../../context/contextAPI";

function Tab({ label, isActive, onClick }) {
  return (
    <Button
      style={{
        textTransform: "initial",
        color: "#94A3B8",
        background: "#F1F5F9",
        marginRight: "10px",
        padding: "10px",
        fontSize: "14px",
        ...(isActive && {
          background: "#0E6ACE",
          color: "white",
        }),
      }}
      onClick={onClick}
    >
      {" "}
      {label}
    </Button>
  );
}

function TabContent({ children }) {
  return <div className="tab-content">{children}</div>;
}

function Tabs({ handleClose }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [field, setField] = React.useState("");

  const { formFields, selectedOptions, setSelectedOptions } =
    useContext(Context);

  const [placeholder, setPlaceholder] = useState("");
  const [variable, setVaraible] = useState("");
  const [textArea, setTextArea] = useState("");
  const [options, setOptions] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const handleChange = (event) => {
    setField(event.target.value);
  };

  const handleDate = (e) => {
    setDateFormat(e?.target?.value);
  };

  const handleInputs = (e, type) => {
    if (type === "options") {
      setOptions(e?.target?.value);
    }

    if (type === "placeholder") {
      setPlaceholder(e?.target?.value);
    }

    if (type === "variable") {
      setVaraible(e?.target?.value);
    }

    if (type === "textarea") {
      setTextArea(e?.target?.value);
    }
  };

  const handleSelectedOptions = (index) => {
    const filteredOptions = formFields.selectedOptions?.filter?.(
      (item, i) => i !== index
    );
    formFields.selectedOptions = filteredOptions;

    setSelectedOptions(filteredOptions);
  };

  const submitOptions = (e) => {
    e?.preventDefault?.();

    if (options) {
      selectedOptions?.push?.(options);
      formFields.selectedOptions = selectedOptions;
    }

    setOptions("");
  };

  const handleSave = () => {
    formFields?.push?.({
      placeholder,
      variable_name: variable,
      fieldType: field,
      name: textArea,
    });
    handleClose();
  };
  return (
    <div className="app">
      <div className="tabs">
        <Tab
          label="General"
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        />
        <Tab
          label="Advanced"
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <Tab
          label="Validation"
          isActive={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
      </div>
      <div
        className="tab-contents"
        style={{
          margin: "20px 0",
        }}
      >
        <TabContent>
          {activeTab === 0 && (
            <>
              <Box
                style={{
                  marginBottom: "15px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Choose a Field
                </Typography>
                <BasicSelect
                  label={"Choose a Field"}
                  list={[
                    "Text Box",
                    "Date/Time",
                    "Radio Buttons (Single Answer)",
                  ]}
                  value={field}
                  onChange={handleChange}
                />
              </Box>

              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Field Label
              </Typography>
              <Box
                style={{
                  marginBottom: "15px",
                }}
              >
                <InputMultiline onChange={(e) => handleInputs(e, "textarea")} />
              </Box>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Field Label
              </Typography>

              <Box
                style={{
                  marginBottom: "15px",
                  display: "flex",
                }}
              >
                <UnstyledInputBasic
                  placeholder="Variable Name*"
                  onChange={(e) => handleInputs(e, "variable")}
                />

                {/* <UnstyledSwitchIntroduction />
                <UnstyledSwitchIntroduction /> */}
              </Box>
              <Box>
                <Box
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Tool Tip
                  </Typography>

                  <UnstyledInputBasic
                    placeholder="Tool Tip"
                    onChange={(e) => handleInputs(e, "tooltip")}
                  />
                </Box>
                <Box
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Help Text
                  </Typography>

                  <UnstyledInputBasic
                    placeholder="Help Text"
                    onChange={(e) => handleInputs(e, "help")}
                  />
                </Box>

                <Box
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Placeholder Text
                  </Typography>

                  <UnstyledInputBasic
                    placeholder="Placeholder Text"
                    onChange={(e) => handleInputs(e, "placeholder")}
                  />
                </Box>

                <Box
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Custom Alignment
                  </Typography>
                  <UnstyledInputBasic
                    placeholder="Custom Alignment"
                    onChange={(e) => handleInputs(e, "alignment")}
                  />
                </Box>
              </Box>
            </>
          )}
        </TabContent>
        <TabContent>
          {activeTab === 1 && (
            <>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  paddingBottom: "10px",
                }}
              >
                Add Options
              </Typography>
              <form onSubmit={(e) => submitOptions(e)}>
                <UnstyledInputBasic
                  onChange={(e) => handleInputs(e, "options")}
                  value={options}
                  width="320px"
                />
              </form>

              <Box display={"flex"} flexWrap={"wrap"} lineHeight={0} my={2}>
                {formFields?.selectedOptions?.map((option, index) => {
                  return (
                    <Box
                      key={index}
                      display={"flex"}
                      my={1}
                      mr={2}
                      px={2}
                      py={"1px"}
                      style={{
                        background: "#0E6ACE",
                        color: "white",
                        borderRadius: "12px",
                      }}
                    >
                      <Typography component={"span"} mr={1}>
                        {option}
                      </Typography>
                      <Typography
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => handleSelectedOptions(index)}
                      >
                        x
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </>
          )}
        </TabContent>
        <TabContent>
          {activeTab === 2 && (
            <Box
              style={{
                marginBottom: "15px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  paddingBottom: "10px",
                }}
              >
                Choose Date Format
              </Typography>{" "}
              <BasicSelect
                label={"Choose Date Format"}
                list={["Date (D-M-Y)"]}
                value={dateFormat}
                width={300}
                onChange={handleDate}
              />
            </Box>
          )}
        </TabContent>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Tabs;

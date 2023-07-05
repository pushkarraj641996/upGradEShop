import { React, useRef, useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import ProductInfo from "../ProductInfo/ProductInfo";
import NewAddressPage from "../AddressPage/AddressPage";
import OrderSummary from "../OrderSummary/OrderSummary";
import SnackBar from "../SnackBar/SnackBar";

const steps = ["Items", "Select Address", "Confirm Order"];

export default function HorizontalLinearStepper(props) {
  const selectedAddress = useRef();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const addressHandler = (address) => {
    selectedAddress.current = address;
  };

  const closeSnackBar = () => {
    props.redirectBack("default");
  };

  return (
    <Box sx={{ width: "70%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Fragment>
        {activeStep === 0 ? <ProductInfo item={props.cartItem} /> : null}
        {activeStep === 1 ? <NewAddressPage address={addressHandler} /> : null}
        {activeStep === 2 ? (
          <OrderSummary
            data={props.cartItem}
            address={selectedAddress.current}
          />
        ) : null}
        {activeStep >= 3 ? (
          <div>
            <OrderSummary
              data={props.cartItem}
              address={selectedAddress.current}
            />
            <SnackBar onCloseHandler={closeSnackBar} />
          </div>
        ) : null}
        {activeStep < steps.length ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              pt: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              style={{ marginBottom: 200 }}
            >
              Back
            </Button>

            <Button
              variant="contained"
              onClick={handleNext}
              style={{ marginBottom: 200 }}
            >
              {activeStep === steps.length - 1 ? "Place Order" : "Next"}
            </Button>
          </Box>
        ) : null}
      </Fragment>
    </Box>
  );
}

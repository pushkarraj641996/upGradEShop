import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import ProductInfo from "../ProductInfo/ProductInfo";
import NewAddressPage from "./AddressPage/AddressPage";
import OrderSummary from "../OrderSummary/OrderSummary";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const steps = ["Items", "Select Address", "Confirm Order"];

export default function HorizontalLinearStepper(props) {
  let selectedAddress;

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const addressHandler = address => {
    console.log(address);
    selectedAddress = address;
  }

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
      <React.Fragment>
        {activeStep === 0 ? <ProductInfo item={props.cartItem} /> : null }
        {activeStep === 1 ? <NewAddressPage address={addressHandler} /> : null }
        {activeStep === 2 ? <OrderSummary data={props.cartItem} address={selectedAddress} /> : null}
        {activeStep === 3? <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      /> : null}
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
          >
            Back
          </Button>

          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Place Order" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}

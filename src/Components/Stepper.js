import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Steps from "../Data/Hacksteps";
const ReactMarkdown = require("react-markdown");
const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    // fontSize: "10em",'
    textAlign: "left"
  },
  label: {
    fontSize: "1em"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = Steps;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          const lineLength = step.indexOf("\n");
          const title = step.substr(0, lineLength);
          const rest = step.substr(lineLength + 1);
          return (
            <Step key={step.title}>
              <StepLabel
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  active: classes.label // class name, e.g. `classes-nesting-label-x`
                }}
                alignItems="left"
              >
                {title}
              </StepLabel>
              <StepContent>
                <Typography align="left">
                  <ReactMarkdown source={rest} escapeHtml={false} />
                </Typography>
                {/* <Typography align="left">{line}</Typography> */}

                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

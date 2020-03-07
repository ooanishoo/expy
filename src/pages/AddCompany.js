import React from "react";
import range from "lodash/range";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { industries, companyTypes } from "../data";
import FRM_CANCEL_BUTTON from "../components/FRM_CANCEL_BUTTON";

const useStyles = makeStyles(theme => ({
  formWrapper: {
    margin: "auto"
  }
}));

export default function AddCompany() {
  const classes = useStyles();
  const [industry, setIndustry] = React.useState("");
  const [numberOfStaff, setNumberOfStaff] = React.useState("");
  const [companyType, setCompanyType] = React.useState({});
  const [title, setTitle] = React.useState("Company");

  React.useEffect(() => {
    console.log(companyType, 'aftter setting');
    Object.keys(companyType).length === 0 ? setTitle('Company') : 
    setTitle(companyType.name);
  })

  return (
    <Grid
      container
      direction={"column"}
      justify={"center"}
      spacing={2}
      className={classes.formWrapper}
      xs={12}
      md={8}
      lg={6}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Add {title}
        </Typography>
      </Grid>
      <Grid item>
        <Autocomplete
          autoComplete
          options={companyTypes}
          getOptionLabel={option => option.name}
          value={companyType}
          onChange={(event, value) => {
            setCompanyType(value);
            // setTitle(companyType.name);
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Company Type"
              placeholder="Select Company Type"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          autoFocus={true}
          fullWidth
          required
          // value={name}
          // onChange={event => setName(event.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="ABN number"
          variant="outlined"
          autoFocus={true}
          fullWidth
          required
          // value={name}
          // onChange={event => setName(event.target.value)}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          autoComplete
          options={industries}
          getOptionLabel={option => option}
          value={industry}
          onChange={(event, value) => {
            setIndustry(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Industry"
              placeholder="Select Industry"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Website"
          variant="outlined"
          autoFocus={true}
          fullWidth
          required
          // value={name}
          // onChange={event => setName(event.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
          autoFocus={true}
          fullWidth
          required
          // value={name}
          // onChange={event => setName(event.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Number of staff"
          variant="outlined"
          autoFocus={true}
          fullWidth
          type="number"
          // value={name}
          // onChange={event => setName(event.target.value)}
        />
      </Grid>

      <Grid item>
        <Grid container justify={"flex-end"} spacing={2}>
          <FRM_CANCEL_BUTTON />
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

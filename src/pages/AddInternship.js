import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import range from "lodash/range";
import throttle from "lodash/throttle";
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { Autocomplete } from "@material-ui/lab";
import {
  TextField,
  Grid,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import {
  skills,
  industries,
  occupations,
  hcRepresentatives,
  hostCompanies,
} from "../data";
import parse from "autosuggest-highlight/parse";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      // width: "100%",
      // minWidth: 300,
      // maxWidth: 700
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 700,
    width: "100%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  // Address style
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  formWrapper: {
    //width: "60%",
    margin: "auto"
  }
}));


// Adress stuff
function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

export default function AddInternship() {
  const classes = useStyles();
  const theme = useTheme();
  // Form Fields
  const [hostCompany, setHostCompany] = React.useState("");
  const [hostCompanyRep, setHostCompanyRep] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [occupation, setOccupation] = React.useState([]);
  const [internshipDuration, setInternshipDuration] = React.useState("");
  const [internshipDaysPerWeek, setInternshipDaysPerWeek] = React.useState("");
  const [numberOfInterns, setNumberOfInterns] = React.useState("");
  const [skill, setSkill] = React.useState([]);
  const [age, setAge] = React.useState([]);
  React.useEffect(() => console.log(skill), [skill]);

  // Address vars
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  const [selectedDate, setSelectedDate] = React.useState(Date.now());

  // calling google maps api for date stuff
  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyACQXubGDUa1nrPJdWPynW83j-sggY1dBE&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    let active = true;
    console.log(skill);

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        setOptions(results || []);
      }
    });

    //setLabelWidth(inputLabel.current.offsetWidth);

    return () => {
      active = false;
    };
  }, [inputValue, fetch, skill]);

  // Address End

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  return (
    <Grid
      container
      direction={"column"}
      justify={'center'}
      spacing={2}
      className={classes.formWrapper}
      xs={12}
      md={8}
      lg={6}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Add Internship
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Internship Title"
          variant="outlined"
          autoFocus={false}
          fullWidth
          required
        />
      </Grid>
      <Grid item>
        <Autocomplete
          options={hostCompanies}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Select Host Company"
              variant="outlined"
              label="Host Company"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          options={hcRepresentatives}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Select Host Company Representative"
              variant="outlined"
              label="Host Company Representative"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          options={industries}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Select Industry"
              variant="outlined"
              label="Industry"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          multiple
          autoComplete
          options={occupations}
          getOptionLabel={option => option}
          value={occupation}
          onChange={(event, value) => {
            console.log(event, "event");
            console.log(value, "value");
            setOccupation(value);
            console.log(occupation);
          }}
          //defaultValue={[skills[0]]}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Occupations"
              placeholder="Select Occupations"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          multiple
          autoComplete
          options={skills}
          getOptionLabel={option => option}
          value={skill}
          onChange={(event, value) => {
            console.log(event, "event");
            console.log(value, "value");
            setSkill(value);
            console.log(skill);
          }}
          //defaultValue={[skills[0]]}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Internship Skills"
              placeholder="Select Internship Skills"
            />
          )}
        />
      </Grid>
      <Grid item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            autoOk
            //disableToolbar
            inputVariant="outlined"
            format="dd/MM/yyyy"
            label="Internship Start Date"
            value={selectedDate}
            onChange={setSelectedDate}
            fullWidth
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item>
        <Autocomplete
          options={range(7).map(n => n + 6)}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Weeks"
              variant="outlined"
              label="Number of weeks"
              fullWidth
              required
              type="number"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          options={range(7).map(n => n + 1)}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Internships days in a week"
              variant="outlined"
              label="Days per week"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          id="google-map-demo"
          getOptionLabel={option =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={x => x}
          options={options}
          autoComplete
          includeInputInList
          disableOpenOnFocus
          renderInput={params => (
            <TextField
              {...params}
              label="Add a location"
              variant="outlined"
              fullWidth
              required
              onChange={event => setInputValue(event.target.value)}
            />
          )}
          renderOption={option => {
            const matches =
              option.structured_formatting.main_text_matched_substrings;
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map(match => [match.offset, match.offset + match.length])
            );

            return (
              <Grid container alignItems="center">
                <Grid item>
                  {/* <LocationOnIcon className={classes.icon} /> */}
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{ fontWeight: part.highlight ? 700 : 400 }}
                    >
                      {part.text}
                    </span>
                  ))}

                  <Typography variant="body2" color="textSecondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            );
          }}
        />
      </Grid>
      <Grid item>
        <Grid container justify={"flex-end"} spacing={2} >
          <Grid item >
            <Button variant="outlined" color="primary" size="large">
              Cancel
            </Button>
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // <Typography variant="h4" gutterBottom>
    //   Add Internship
    // </Typography>
    // <Grid container className={classes.form}>
    //   <TextField
    //     id="outlined-basic"
    //     label="Internship Title"
    //     variant="outlined"
    //     autoFocus={true}
    //     fullWidth
    //   />
    // </Grid>
    // <Grid container spacing={1} direction={'row'}>
    //   <Grid item>
    //     <TextField
    //       id="outlined-basic"
    //       label="one"
    //       variant="outlined"
    //       autoFocus={true}
    //       fullWidth
    //     />
    //   </Grid>
    //   <Grid item>
    //     <TextField
    //       id="outlined-basic"
    //       label="two"
    //       variant="outlined"
    //       autoFocus={true}
    //       //fullWidth
    //     />
    //   </Grid>
    // </Grid>

    // <Grid container className={classes.form}>
    //   <TextField
    //     id="outlined-basic"
    //     label="Internship Title"
    //     variant="outlined"
    //     autoFocus={true}
    //     fullWidth
    //   />
    // </Grid>
    // </Grid>

    // </Container>
  );
}

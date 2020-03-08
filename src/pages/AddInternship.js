import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import range from "lodash/range";
import throttle from "lodash/throttle";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  DatePicker
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import {
  skills,
  industries,
  occupations,
  hcRepresentatives,
  hostCompanies
} from "../data";
import parse from "autosuggest-highlight/parse";
import FRM_CANCEL_BUTTON from '../components/FRM_CANCEL_BUTTON'

const useStyles = makeStyles(theme => ({
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

  // Form Fields
  const [name, setName] = React.useState("");
  const [hostCompany, setHostCompany] = React.useState("");
  const [hostCompanyRep, setHostCompanyRep] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [occupation, setOccupation] = React.useState([]);
  const [internshipDuration, setInternshipDuration] = React.useState("");
  const [internshipDaysPerWeek, setInternshipDaysPerWeek] = React.useState("");
  const [numberOfInterns, setNumberOfInterns] = React.useState("");
  const [skill, setSkill] = React.useState([]);

  React.useEffect(() => {
    console.log(name, "name");
    console.log(hostCompany, "hostCompany");
    console.log(hostCompanyRep, "hostCompanyRep");
    console.log(industry, "industry");
    console.log(occupation, "occupation");
    console.log(skill, "skill");
    console.log(internshipDuration, "internshipDuration");
    console.log(internshipDaysPerWeek, "internshipDaysPerWeek");
    console.log(numberOfInterns, "numberOfInterns");
    console.log(startDate, "startDate");
  });

  // Address vars
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);
  const [startDate, setStartDate] = React.useState(Date.now());

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

  React.useEffect(() => {
    let active = true;

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
  }, [inputValue, fetch, skill, hostCompany]);

  // Address End

  const handleDateChange = date => {
    setStartDate(date);
  };

  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

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
          Add Internship
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Internship Title"
          variant="outlined"
          autoFocus={true}
          fullWidth
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          autoComplete
          options={hostCompanies}
          getOptionLabel={option => option}
          value={hostCompany}
          onChange={(event, value) => {
            setHostCompany(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Host Company"
              placeholder="Select Host Company"
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
          value={hostCompanyRep}
          onChange={(event, value) => {
            setHostCompanyRep(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Host Company Representative"
              placeholder="Select Host Company Representative"
              fullWidth
              required
            />
          )}
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
        <Autocomplete
          multiple
          autoComplete
          options={occupations}
          getOptionLabel={option => option}
          value={occupation}
          onChange={(event, value) => {
            setOccupation(value);
          }}
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
            setSkill(value);
          }}
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
          <DatePicker
            //autoOk
            disableToolbar
            inputVariant="outlined"
            format="dd/MM/yyyy"
            label="Internship Start Date"
            fullWidth
            value={startDate}
            onChange={date => setStartDate(date)}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item>
        <Autocomplete
          autoComplete
          options={range(7).map(n => n + 6)}
          getOptionLabel={option => option.toString()}
          value={internshipDuration}
          onChange={(event, value) => {
            setInternshipDuration(value);
          }}
          type="number"
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Weeks"
              variant="outlined"
              label="Internship Duration"
              fullWidth
              required
              type="number"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          autoComplete
          options={range(7).map(n => n + 1)}
          getOptionLabel={option => option.toString()}
          value={internshipDaysPerWeek}
          onChange={(event, value) => {
            setInternshipDaysPerWeek(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Internship Days per week"
              variant="outlined"
              label="Internship Days per week"
              fullWidth
              required
              type="number"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          autoComplete
          options={range(7).map(n => n + 1)}
          getOptionLabel={option => option.toString()}
          value={numberOfInterns}
          onChange={(event, value) => {
            setNumberOfInterns(value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="Number of Interns"
              variant="outlined"
              label="Number of Interns"
              fullWidth
              required
              type="number"
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

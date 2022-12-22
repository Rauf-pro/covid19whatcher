import React, { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchCountries } from "./api";
import covidLogo from "./covid-19.png";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("azerbaijan");
  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };
    fetchCountriesData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img
            src={covidLogo}
            alt="Covid19 Logo"
            style={{ width: 100, height: 100, marginTop: 20 }}
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              {countries.map((country) => (
                <MenuItem value={country.Slug}>{country.Country}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;

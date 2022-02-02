import { Button, Grid } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { usePokemons } from "./hooks/usePokemons";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [selected, setSelected] = useState("");
  const { convertedPokemons } = usePokemons({ limit, offset });

  function handleNext() {
    setOffset(offset + limit);
  }
  function handleBack() {
    if (offset !== 0) {
      setOffset(offset - limit);
    }
  }

  const pokeNames = Object.keys(convertedPokemons).map(function (key, index) {
    return key;
  });

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <div style={{ height: "70%", overflow: "auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokeNames.map((name, index) => {
            return (
              <Grid
                onClick={() => {
                  setSelected(name);
                }}
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
              >
                <PokemonCard url={name}></PokemonCard>
              </Grid>
            );
          })}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "8px",
          }}
        >
          <Button onClick={() => handleBack()} variant="contained">
            Back
          </Button>
          <Button onClick={() => handleNext()} variant="contained">
            Next
          </Button>
        </div>
      </div>
      <footer style={{ height: "30%", backgroundColor: "rgb(187, 93, 76)" }}>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid
            style={{
              marginTop: "2em",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <div
              onClick={() => {
                setSelected("");
              }}
            >
              <PokemonCard url={selected}></PokemonCard>
            </div>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default App;

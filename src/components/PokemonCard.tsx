import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import useStats from "../hooks/useStats";







export function PokemonCard(url: { url: string }) {
  const {pokemon} = useStats(url)
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={pokemon?.data?.sprites?.front_default}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {pokemon?.data?.name} #0{pokemon?.data?.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

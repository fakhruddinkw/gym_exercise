import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import Loader from "../components/Loader";
const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same Muscle Group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that uses the same Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;

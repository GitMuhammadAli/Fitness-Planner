import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  useFetchCategories,
  WorkoutindividualType,
  useFetchUpperLowerTypeWorkouts,
  useFetchBodybuilderSplitTypeWorkouts,
  useFetchBroSplitTypeWorkouts,
} from "../hooks/useFetchCategories";
import useFetchScheme from "../hooks/userFetchSchemes";
import Header from "./Header";
import Model from "./Model";
import Schemes from "./Schemes";
import CategoryButtons from "./Categories";
import { senddata, ProceedData } from "../Api";
import Button from "./Button";

export default function Generator({ setProccededData, setIsLoading }) {
  const { categories, error: categoryError } = useFetchCategories();
  const { individualType, error: individualTypeError } =
    WorkoutindividualType();
  const { upperLowerType, error: upperLowerError } =
    useFetchUpperLowerTypeWorkouts();
  const { bodybuilderSplitType, error: bodybuilderSplitError } =
    useFetchBodybuilderSplitTypeWorkouts();
  const { broSplitType, error: broSplitError } = useFetchBroSplitTypeWorkouts();
  const { schemes, error: schemeError } = useFetchScheme();

  const [Workout, setWorkout] = useState("Select the Muscle Group");
  const [Muscle, setMuscle] = useState([]);
  const [Scheme, setScheme] = useState(null);

  const handleSetWorkout = (category) => {
    setWorkout(category);
    setMuscle([]);
  };

  const handleMuscleChange = (items) => {
    setMuscle(items);
  };

  const handleSchemes = (scheme) => {
    setScheme(scheme);
  };


  const sendMuscleToBackend = async () => {
    setIsLoading(true);  
    console.log("inside sendMuscleToBackend");
    const data = {
      Workout,
      Muscle,
      Scheme,
    };



    console.log("Sending data to backend:", data);
    try {
      const response = await ProceedData(data);
      console.log("Backend response:", response.data);
      setProccededData(response.data);

      const sendResponse = await senddata(data);
      console.log("Backend response:", sendResponse.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function ClickScroll() {
    window.location.href = '#MakeWorkout';
  }

  const getWorkoutTypes = () => {
    switch (Workout) {
      case "individual":
        return individualType;
      case "upper_lower":
        return upperLowerType;
      case "bodybuilder_split":
        return bodybuilderSplitType;
      case "bro_split":
        return broSplitType;
      default:
        return [];
    }
  };

  return (
    <SectionWrapper id={'generate'}
      header={"Produce Your WorkOut"}
      title={["It's", "Huge ", "o'clock "]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />

      {categoryError ? (
        <p>Error fetching categories: {categoryError}</p>
      ) : (
        <CategoryButtons
          categories={categories}
          onCategorySelect={handleSetWorkout}
        />
      )}

      <Header
        index={"02"}
        title={"Lock in your routine"}
        description={"Select the Muscle group you wish to train."}
      />

      {individualTypeError ||
      upperLowerError ||
      bodybuilderSplitError ||
      broSplitError ? (
        <p>
          Error fetching workout types:{" "}
          {individualTypeError ||
            upperLowerError ||
            bodybuilderSplitError ||
            broSplitError}
        </p>
      ) : (
        <Model
          Workout={Workout}
          workoutTypes={getWorkoutTypes()}
          onMuscleChange={handleMuscleChange}
        />
      )}

      <Header
        index={"03"}
        title={"Become Enterprise"}
        description={"Select the Workout you wish to Endure."}
      />
      {schemeError ? (
        <p>Error fetching schemes: {schemeError}</p>
      ) : (
        <Schemes Schemes={schemes} sendSchemes={handleSchemes} />
      )}

      <Button onClick={() => { sendMuscleToBackend(); ClickScroll(); }}>Generate Workout</Button>
    </SectionWrapper>
  );
}

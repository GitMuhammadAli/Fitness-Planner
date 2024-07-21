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

export default function Generator() {
  const { categories, error: categoryError } = useFetchCategories();
  const { individualType, error: individualTypeError } = WorkoutindividualType();
  const { upperLowerType, error: upperLowerError } = useFetchUpperLowerTypeWorkouts();
  const { bodybuilderSplitType, error: bodybuilderSplitError } = useFetchBodybuilderSplitTypeWorkouts();
  const { broSplitType, error: broSplitError } = useFetchBroSplitTypeWorkouts();

  const { schemes, error: schemeError } = useFetchScheme();
  const [selectedCategory, setSelectedCategory] = useState("Select the Muscle Group");

  const handleSetSelectedCategory = (category) => {
    setSelectedCategory(category);
    setShowModel(false);
  };




  const getWorkoutTypes = () => {
    switch (selectedCategory) {
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
    <SectionWrapper
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
          onCategorySelect={handleSetSelectedCategory}
        />
      )}

      <Header
        index={"02"}
        title={"Lock in your routine"}
        description={"Select the Muscle group you wish to train."}
      />
      <Model
        selectedCategory={selectedCategory}
        workoutTypes={getWorkoutTypes()}
      />
      <Header
        index={"03"}
        title={"Become Enterprise"}
        description={"Select the Workout you wish to Endure."}
      />
      {schemeError ? (
        <p>Error fetching schemes: {schemeError}</p>
      ) : (
        <Schemes Schemes={schemes} />
      )}
    </SectionWrapper>
  );
}

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

  const [Workout, setWorkout] = useState("Please select a muscle group");
  const [Muscle, setMuscle] = useState([]);
  const [Scheme, setScheme] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Select the Muscle Group"
  );
  const [selectedtype, setSelectedtype] = useState(
    "Select the Muscle Category Group"
  );
  const [selectedScheme, setSelectedScheme] = useState(
    "Select the Scheme Group"
  );
  const [arrowVisible, setArrowVisible] = useState(false); 

  const handleSetWorkout = (category) => {
    setWorkout(category);
    setMuscle([]);
    setSelectedCategory(category);
  };

  const handleMuscleChange = (items) => {
    setMuscle(items);
  };

  const handleSchemes = (scheme) => {
    setScheme(scheme);
  };

  const sendMuscleToBackend = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setArrowVisible(false); 
    if (!Workout || Workout === "Select the Muscle Group") {
      setErrorMessage("Please select a workout type.");
      setIsLoading(false);
      return;
    }

    if (Muscle.length === 0) {
      setErrorMessage("Please select at least one muscle group.");
      setIsLoading(false);
      return;
    }

    if (!Scheme) {
      setErrorMessage("Please select a scheme.");
      setIsLoading(false);
      return;
    }

    const data = {
      Workout,
      Muscle,
      Scheme,
    };

    console.log("Sending data to backend:", data);

    try {
      const response = await ProceedData(data);
      console.log("Backend response:", response.data);

      if (!response.data) {
        setErrorMessage("Missing data in the response from ProceedData.");
        return;
      }

      setProccededData(response.data);

      const sendResponse = await senddata(data);
      console.log("Backend response:", sendResponse.data);

      if (!sendResponse) {
        setErrorMessage("Error sending data to the backend.");
        return;
      }

      setArrowVisible(true); 
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  function ClickScroll() {
    window.location.href = "#MakeWorkout";
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
    <SectionWrapper
      id={"generate"}
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
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
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
          selectedtype={selectedtype}
          setSelectedtype={setSelectedtype}
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
        <Schemes
          Schemes={schemes}
          sendSchemes={handleSchemes}
          selectedScheme={selectedScheme}
          setSelectedScheme={setSelectedScheme}
        />
      )}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <Button
        onClick={() => {
          sendMuscleToBackend();
          ClickScroll();
        }}
      >
        Generate Workout 
        {arrowVisible && (
        <div className="flex justify-center mt-4">
          <svg className="animate-bounce w-6 h-6 text-[#946f6f]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L12 3M12 21L4 13M12 21L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      </Button>

      
    </SectionWrapper>
  );
}

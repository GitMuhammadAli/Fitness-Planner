import React from 'react';
import { useState } from 'react';
import Loading from "./Loading";
import WorkoutExcersice from "./WorkoutExcersice";
import Generator from './Generator';

export default function Workout() {
    const [ProccededData, setProccededData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSetProccededData = (data) => {
      setProccededData(data);
      setIsLoading(false);
    };
  return (
    <>
    <Generator setProccededData={handleSetProccededData} setIsLoading={setIsLoading}  />
      {isLoading  ? (
        <Loading />
      ) : (
        ProccededData && <WorkoutExcersice data={ProccededData}  />
      )}
    </>
  );
}

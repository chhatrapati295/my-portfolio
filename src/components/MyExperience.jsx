import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const ExperienceCompo = () => {
  useEffect(() => {
    getExperience();
  }, []);
  const getExperience = async () => {
    let { data, error } = await SupabaseClient.from(data).select("*");
    console.log(data);
    console.log(error);
  };
  return <div className="">hi</div>;
};

export default ExperienceCompo;

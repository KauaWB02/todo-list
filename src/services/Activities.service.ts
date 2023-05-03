import Axios from "axios";
import { Iactivity } from "../interfaces/activity";

export default async function getAllActivities(): Promise<Iactivity[]>{

  const response = await Axios.get('http://localhost:8080/activity');

  const activities = response.data.activity;
  // console.log(activities)

  return activities;

}
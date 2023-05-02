import Axios from "axios";

export default async function getAllActivities(){

  const response = await Axios.get('http://localhost:8080/activity');

  const activities = response.data.activity;
  return activities;

}
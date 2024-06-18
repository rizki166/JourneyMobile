import API from "../..";

export const getJourney = async () => {
  return await API.get("journey");
};

export const getJourneyId = async (id: number) => {
  try {
    const response = await API.get(`journey/${id}`);
    console.log(response, "testtt");
    return response;
  } catch (error) {
    throw new Error();
  }
};

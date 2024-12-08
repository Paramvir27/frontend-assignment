export const API_GET_PROJECTS = async () => {
  try {
    const url = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData
  } catch (error) {
    console.error('ERROR FETCHING DATA: ', error)
    return Promise.reject(new Error(error.message));
  }
}
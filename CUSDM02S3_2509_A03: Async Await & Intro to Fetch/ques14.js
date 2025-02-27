function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Fetched data successfully!");
      } else {
        reject("Network error occurred");
      }
    }, 1000);
  });
}
async function fetchDataHandler() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchDataHandler();

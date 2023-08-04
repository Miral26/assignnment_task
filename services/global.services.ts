// fetch resources
export const fetchResources = async () => {
  try {
    const response = await fetch(
      "https://engineering-task.elancoapps.com/api/resources"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// fetch resources with name
export const fetchResourcesWithName = async (key: string) => {
  try {
    if (key !== " ") {
      const response = await fetch(
        `https://engineering-task.elancoapps.com/api/resources/${key}`
      );
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};

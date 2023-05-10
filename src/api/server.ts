const token = `${process.env.REACT_APP_USER_TOKEN}`;
const fireToken = localStorage.getItem("user_token");

export const serverCalls = {
  get: async () => {
    const response = await fetch(
      `https://car-inventory-backend.glitch.me/api/cars/${fireToken}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from server");
    }
    return await response.json();
  },
  create: async (data: any = {}) => {
    const response = await fetch(
      `https://car-inventory-backend.glitch.me/api/cars/${fireToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create new data on server");
    }
    return await response.json();
  },
  update: async (id: string, data: any = {}) => {
    const response = await fetch(
      `https://car-inventory-backend.glitch.me/api/cars/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update data on server");
    }
    console.log(`Successfully updated car with id: ${id}`);
  },
  delete: async (id: string) => {
    const response = await fetch(
      `https://car-inventory-backend.glitch.me/api/cars/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to delete car with id: ${id}`);
    }
  },
};

export const getCarsData = async (
  callType: "makes" | "years" | "types"
): Promise<any> => {
  const url = `https://car-data.p.rapidapi.com/cars/${callType}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API}`,
      "X-RapidAPI-Host": "car-data.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data from server");
  }
};

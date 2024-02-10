import axios from "axios";

export const getAppDataAction = async () => {
  try {
    // *** We could use axios instance here to set base url and token, but for simplicity purpose I'm just using normal axios.

    const response = await axios.get("https://fridaysg.com/api/get_app_data", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    });

    if (response.status === 200)
      return Promise.resolve({
        status: true,
        data: response.data,
      });

    throw new Error("Api failed!");
  } catch (err) {
    console.warn(err);
    return Promise.resolve({
      status: false,
      data: null,
    });
  }
};

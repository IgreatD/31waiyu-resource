import axios from "axios";

export const getResourceInfo = async (resourceId) => {
  try {
    const {
      data: { code, data },
    } = await axios.post(
      "/api_resource/GetResourceInfo",
      {
        resourceId,
      },
      {
        method: "POST",
      }
    );
    if (code === 1) {
      return data;
    }
    return {};
  } catch (error) {
    return {};
  }
};

import axios from "axios";

const API_URL = "http://127.0.0.1:8000"

export const sendMessage = async (
    message: string,
    token: string
) => {

    const response = await axios.post(
        `${API_URL}/ai/chat`,
        null,
        {
            params: {

                message,
            },
            headers: {

                "Authorization": `Bearer ${token}`
            },
        }
    );
    return response.data;
};
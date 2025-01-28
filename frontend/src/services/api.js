const API_URL = import.meta.env.VITE_API_URL;

export const getExampleData = async () => {
    const response = await fetch(`${API_URL}/example`);
    return response.json();
};
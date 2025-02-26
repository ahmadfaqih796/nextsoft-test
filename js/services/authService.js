import { BASE_URL } from "../api/client.js";

class AuthService {
  async login(data) {
    try {
      let response = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();

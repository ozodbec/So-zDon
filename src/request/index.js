import { BASE_URL } from "../utils";

export async function register(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("Check your password or username.");
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
export async function login(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("Check your password or username.");
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
export async function getArticles() {
  try {
    const res = await fetch(`${BASE_URL}/articles?skip=0&limit=10`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status == 403) {
      throw new Error(403);
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}

export async function getArticlesById(id) {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status == 403) {
      throw new Error(403);
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}

// upload  img
export const uploadImage = async (image) => {
  console.log(image);
  const formData = new FormData();

  formData.append("file", image);

  const res = await fetch(BASE_URL + "/upload", {
    method: "POST",
    body: formData,
  });

  if (res.status === 200 || res.status === 201) {
    return await res.text();
  } else {
    throw new Error("Nimadir hatolik bo'ldi");
  }
};
export const addArticle = async (article) => {
  const token = JSON.parse(localStorage.getItem("user")).access_token;
  console.log(token);
  const res = await fetch(BASE_URL + "/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  });

  if (res.status === 200 || res.status === 201) {
    return "Ma'lumot muvaffaqiyatli qo'shildi";
  } else if (res.status === "403") {
    throw new Error("403");
  } else {
    throw new Error("Nimadir hato ketti!");
  }
};

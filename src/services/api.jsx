class API{
    static BaseURL = import.meta.env.VITE_SOME_KEY
    static Login = `${API.BaseURL}/login`
}

export default API
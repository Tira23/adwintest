export const GetFromLocal = () => {
    const local = localStorage.getItem("notes")
    if (local) {
        const initialValue = JSON.parse(local);
        return initialValue
    }
}

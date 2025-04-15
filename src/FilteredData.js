import data from "./Data";

const filteredData = (selectedName, selectedAge, search) => data.filter(user => {
    const matchesName = selectedName === '' || user.name === selectedName;
    const matchesAge = selectedAge === '' || user.age === Number(selectedAge);
    const matchesSearch =
        search === '' ||
        Object.values(user).some(value =>
            String(value).toLowerCase().includes(search.toLowerCase())
        );
    return matchesName && matchesAge && matchesSearch;
});
export default filteredData;
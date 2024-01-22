export default defineEventHandler((event) => {
  async function getDogeData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const DogeData = await res.json();
    return DogeData;
  }
  const data = getDogeData();
  return data;
});
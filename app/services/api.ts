export default async function getRepos() {
  const res = await fetch("https://api.github.com/users/gneo0/repos");
  const data = await res.json();
  return data;
}

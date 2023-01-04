const getProjects = ({ userId }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Mall center construction",
          category: "contruction",
          plan: "free plan",
          members: [
            { name: "Edson Ntwali", photo: "", id: 1 },
            { name: "Hirwa Aldo", photo: "", id: 2 },
          ],
          id: 1,
        },
      ]);
    }, 3000);
  });
};
const createProject = ({ name, category }) => {
  console.log(name, category);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1 });
    }, 3000);
  });
};
const updateProject = () => {};
const deleteProject = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ok");
    }, 3000);
  });
};

export { getProjects, createProject, updateProject, deleteProject };

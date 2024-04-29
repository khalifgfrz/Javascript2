const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function search(query, limit, cb) {
  const filtered = names.filter((name) => name.toLowerCase().includes(query.toLowerCase())).slice(0, limit);
  return cb(filtered);
}

const callback = (value) => {
  if (value.length === 0) return console.log("Data tidak ditemukan");
  return console.log(value);
};

search("an", 3, callback);

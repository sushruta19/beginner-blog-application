
document.getElementById("publishBtn").addEventListener("click", () => {
  const createdAtField = document.getElementById("createdAt");
  const currentTime = new Date();
  createdAtField.value = currentTime.toLocaleDateString("en-UK", {
    day : "numeric",
    month : "short",
    year : "numeric"
  });
});
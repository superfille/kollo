const createCheckbox = (obj) => {
  return `
    <div>
      <input type="checkbox" id="${obj.id}" name="${obj.name}" value="${obj.value}">
      <label for="${obj.id}">${obj.text}</label>
    </div>
  `;
}
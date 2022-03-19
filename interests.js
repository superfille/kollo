const addedInteresets = [];

const addIntereset = (interest) => {
  addedInteresets.push(interest);
  printInterests();
}

const deleteInterest = (index) => {
  addedInteresets.splice(index, 1);
  printInterests();
}

const createInterestRow = (obj) => {
  return `
    <tr>
      <td>${obj.text}</td>
      <td class="selected-interests__td--delete">
        <button class="icon-button icon-button--delete" type="button" onclick="deleteInterest(${obj.index})">
          &#x1F5D1;
        </button>
      </td>
    </tr>
  `;
}

const printInterests = () => {
  const rows = addedInteresets
    .map((interest, index) => {
      return createInterestRow({
        index: index,
        text: interest,
      });
    })
    .join('');

  // Skapar table här för vet inte hur jag ska få bort border annars när den är tom
  const table = rows ? `
    <table>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `
    : '';
  document.getElementById('interestsTable').innerHTML = table;
}

document.getElementById('addInterestButton').addEventListener('click', () => {
  addIntereset(document.getElementById('addInterestInput').value);
  document.getElementById('addInterestInput').value = '';
});

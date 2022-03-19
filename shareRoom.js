const createCanShareRoomWith = () => {
  const checkboxes = [
    createCheckbox({
      id: 'boy',
      name: 'boy',
      value: 'boy',
      text: 'Kille',
    }),
    createCheckbox({
      id: 'girl',
      name: 'girl',
      value: 'girl',
      text: 'Tjej',
    }),
  ];

  document.getElementById('canShareRoomWithCheckboxes').innerHTML = checkboxes.join('');
}

document.getElementById('sharingRoomYes').addEventListener('click', (event) => {
  document.getElementById('canShareRoomWith').style.display = 'block';
});

document.getElementById('sharingRoomNo').addEventListener('click', (event) => {
  document.getElementById('canShareRoomWith').style.display = 'none';
});

const createCanShareRoomWith = () => {
  const checkboxes = [
    createCheckbox({
      id: 'boy',
      name: 'shareRoomWith',
      value: 'boy',
      text: 'Kille',
    }),
    createCheckbox({
      id: 'girl',
      name: 'shareRoomWith',
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

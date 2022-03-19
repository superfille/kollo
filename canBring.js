const createCanBringCheckboxes = () => {
  const checkboxes = [
    createCheckbox({
      id: 'sleepingbag',
      name: 'sleepingbag',
      value: 'sleepingbag',
      text: 'Sovsäck',
    }),

    createCheckbox({
      id: 'pillow',
      name: 'pillow',
      value: 'pillow',
      text: 'Kudde',
    }),

    createCheckbox({
      id: 'sleepingMat',
      name: 'sleepingMat',
      value: 'sleepingMat',
      text: 'Liggunderlag',
    }),
  ];

  document.getElementById('canBringCheckboxes').innerHTML = checkboxes.join('');
}
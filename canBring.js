const createCanBringCheckboxes = () => {
  const checkboxes = [
    createCheckbox({
      id: 'sleepingbag',
      name: 'bringWith',
      value: 'sleepingbag',
      text: 'Sovsäck',
    }),

    createCheckbox({
      id: 'pillow',
      name: 'bringWith',
      value: 'pillow',
      text: 'Kudde',
    }),

    createCheckbox({
      id: 'sleepingMat',
      name: 'bringWith',
      value: 'sleepingMat',
      text: 'Liggunderlag',
    }),
  ];

  document.getElementById('canBringCheckboxes').innerHTML = checkboxes.join('');
}
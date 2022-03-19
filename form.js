const validateAndGetName = () => {
  const name = document.getElementById('name').value;
  if (name === '') {
    document.getElementById('nameError').style.display = 'block';
  } else {
    document.getElementById('nameError').style.display = 'none';
  }

  return name;
}

const validateAndGetEmail = () => {
  const email = document.getElementById('email').value;
  if (email === '') {
    document.getElementById('emailError').style.display = 'block';
  } else {
    document.getElementById('emailError').style.display = 'none';
  }

  return email;
}

const validateAndGetInterests = () => {
  const interests = addedInteresets;
  if (interests.length === 0) {
    document.getElementById('interestError').style.display = 'block';
  } else {
    document.getElementById('interestError').style.display = 'none';
  }

  return interests;
}

const getAge = () => {
  return document.getElementById('age').options[document.getElementById('age').selectedIndex].value;
}

const getShareRoom = () => {
  return document.getElementById('sharingRoomYes').checked;
}

const getShareRoomWith = () => {
  const shareRoom = [];
  const shareRoomWith = document.getElementsByName('shareRoomWith');

  for (const sex in shareRoomWith) {
    if (Object.hasOwnProperty.call(shareRoomWith, sex)) {
      const element = shareRoomWith[sex];
      element.checked && shareRoom.push(element.value);
    }
  }

  return shareRoom;
}

const getBringWith = () => {
  const bringWith = [];
  const bringWithElements = document.getElementsByName('bringWith');

  for (const item in bringWithElements) {
    if (Object.hasOwnProperty.call(bringWithElements, item)) {
      const element = bringWithElements[item];
      element.checked && bringWith.push(element.value);
    }
  }

  return bringWith;
}

const validateForm = () => {
  let isValid = true;
  const checkout = {
    name: '',
    email: '',
    age: 10,
    interests: [],
    shareRoom: false,
    shareWith: [],
    canBrin: [],
  };

  checkout.name = validateAndGetName();
  checkout.email = validateAndGetEmail();
  checkout.age = getAge();
  checkout.interests = validateAndGetInterests();
  checkout.shareRoom = getShareRoom();
  checkout.shareWith = checkout.shareRoom ? getShareRoomWith() : [];
  checkout.bringWith = getBringWith();

  isValid =
    checkout.name !== '' &&
    checkout.email !== '' &&
    checkout.interests.length > 0;

  if (isValid) {
    document.getElementById('formSuccess').style.display = 'block';
  }
}

const onCheckout = () => {

}


document.getElementById('submitButton').addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
})

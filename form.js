const validateAndGetName = () => {
  const name = document.getElementById('name').value;

  document.getElementById('nameError').style.display = name === '' ? 'block' : 'none';

  return name;
}

const validateAndGetEmail = () => {
  const email = document.getElementById('email').value;

  document.getElementById('emailError').style.display = email === '' ? 'block' : 'none';

  return email;
}

const validateAndGetInterests = () => {
  const interests = addedInteresets;
  
  document.getElementById('interestError').style.display = interests.length === 0 ? 'block' : 'none';

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
  const checkout = {
    name: '',
    email: '',
    age: 10,
    interests: [],
    shareRoom: false,
    shareWith: [],
    bringWith: [],
  };

  checkout.name = validateAndGetName();
  checkout.email = validateAndGetEmail();
  checkout.age = getAge();
  checkout.interests = validateAndGetInterests();
  checkout.shareRoom = getShareRoom();
  checkout.shareWith = checkout.shareRoom ? getShareRoomWith() : [];
  checkout.bringWith = getBringWith();

  const isValid =
    checkout.name !== '' &&
    checkout.email !== '' &&
    checkout.interests.length > 0;

  if (isValid) {
    onCheckout();
  }

  console.table(checkout);
}

const onCheckout = (payload) => {
  let post = JSON.stringify(payload)
 
  const url = "myBackend/kollo/register"
  let xhr = new XMLHttpRequest()
  
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
  xhr.send(post);
  
  xhr.onload = function () {
    if (xhr.status === 201) {
      // will not work because no server
      // document.getElementById('formSuccess').style.display = 'block';
    } else {
      document.getElementById('formError').style.display = 'block';
    }
  }
  document.getElementById('formSuccess').style.display = 'block';
}


document.getElementById('submitButton').addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
})

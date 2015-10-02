
## Customer

{
    objectId: "",
    
}
## Journey:

{
    objectId: "",
    customerId: "", // from SAP
    name: "", 
    description: "",
    groupLeaders: [User]
}

## Itenary

{
    objectId: "",
    name: "",
    events: [Event]
}

## User

{
    objectId: "",
    
}

## Traveller

{
    objectId: "",
    user: User,
    journey: Journey,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    birthdate: "",
    passportNo:
    ...
}

## Event

{
  objectId: "",
  createdBy: User
  name: "",
  location: "", 
  startTime: 
  endTime:
  travellers: [Travellers]
}

## Post

{
  objectId: "",
  text: "",
  photo: "",
  timestamp:
  location:
  createdBy: User 
}
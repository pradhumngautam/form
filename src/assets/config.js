export const config = [
  {
    id: "1",
    name: "username",
    type: "text",
    required: true,
    regex: "^[a-zA-Z0-9]{3,}$",
  },
  {
    id: "2",
    name: "password",
    type: "password",
    required: true,
    regex: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
  },
  {
    id: "3",
    name: "gender",
    type: "radio",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    id: "4",
    name: "hobbies",
    type: "checkbox",
    options: [
      { label: "Reading", value: "reading" },
      { label: "Traveling", value: "traveling" },
    ],
  },
  {
    id: "5",
    name: "country",
    type: "select",
    required: true,
    multipleSelect: false,
    options: [
      { label: "USA", value: "usa" },
        { label: "Canada", value: "canada" },
      { label: "India", value:"India"}
    ],
  },

  {
    id: "6",
    name: "resume",
    type: "file",
    fileFormatSupported: [".pdf", ".doc"],
  },
];

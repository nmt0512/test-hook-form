export function onSearch<T>(
  input: string,
  optionValue: string,
  fieldsToSearch: Array<keyof T>,
  fieldToMatch: keyof T,
  list: T[]
): boolean {
  return list.some((item) => {
    const isMatch = fieldsToSearch.some((field) =>
      String(item[field]).includes(input)
    );
    return isMatch && String(item[fieldToMatch]) === optionValue;
  });
}

export const dummyMakerList = [
  {
    code: "001",
    name: "Name 1",
  },
  {
    code: "002",
    name: "Name 2",
  },
  {
    code: "003",
    name: "Name 3",
  },
];

export const dummyMakerOptions = [
  {
    value: null,
    label: (
      <div className="flex">
        <p className="w-1/2">CODE</p>
        <p className="w-1/2">NAME</p>
      </div>
    ),
    disabled: true,
  },
  ...dummyMakerList.map((maker) => {
    return {
      value: `${maker.code} - ${maker.name}`,
      label: (
        <div className="flex">
          <p className="w-1/2">{maker.code}</p>
          <p className="w-1/2">{maker.name}</p>
        </div>
      ),
      disabled: false,
    };
  }),
];

export const dummyMakerCodeOptions = [
  {
    value: null,
    label: (
      <div className="flex">
        <p className="w-1/2">CODE</p>
        <p className="w-1/2">NAME</p>
      </div>
    ),
    disabled: true,
  },
  ...dummyMakerList.map((maker) => {
    return {
      value: maker.code,
      label: (
        <div className="flex">
          <p className="w-1/2">{maker.code}</p>
          <p className="w-1/2">{maker.name}</p>
        </div>
      ),
      disabled: false,
    };
  }),
];

export const dummyMakerNameOptions = [
  {
    value: null,
    label: (
      <div className="flex">
        <p className="w-1/2">CODE</p>
        <p className="w-1/2">NAME</p>
      </div>
    ),
    disabled: true,
  },
  ...dummyMakerList.map((maker) => {
    return {
      value: maker.name,
      label: (
        <div className="flex">
          <p className="w-1/2">{maker.code}</p>
          <p className="w-1/2">{maker.name}</p>
        </div>
      ),
      disabled: false,
    };
  }),
];


interface LabeledValue {
  data: {
    customName: string;
    id: string;
    placement: string;
    title: string;
    content: string;
    bottomContent: string;
    color: string;
    background: string;
  }[];
}

function printLabel(getmyObj: LabeledValue) {
  console.table(getmyObj.data);
}

export const myObj = {
  data: [
    {
      customName: "ecpm",
      id: "ecpm",
      placement: "left",
      title: "Effective-Cost-per-Mile (per 1000)",
      content: `xxx`,
      bottomContent: "",
      color: "rgb(51,51,51)",
      background: "rgb(27,255,118)",
    },
    {
      customName: "ecpc",
      id: "ecpm",
      placement: "left",
      title: "Effective-Cost-per-Mile (per 1000)",
      content: `xxx`,
      bottomContent: "",
      color: "rgb(51,51,51)",
      background: "rgb(27,255,118)",
    },
  ],
};

printLabel(myObj);

// {
//   id: string;
//   placement: "top" | "bottom" | "left" | "right";
//   title: string;
//   content: string;
//   bottomContent: string;
//   color: string;
//   background: string;
// }

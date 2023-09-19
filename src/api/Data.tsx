export interface TreeNodeData {
  name:string;
  status:boolean;
  children? : TreeNodeData []

}
export const treeData : TreeNodeData= {
    name: "Root",
    status:true,
    children: [
      {
        name: "Child 1",
        status: true,
        children: [
          { name: "Child 1.1", status: true },
          { name: "Child 1.2", status: true },
          { name: "Child 1.3", status: true },
        ],
      },
      {
        name: "Child 2",
        status: false,
        children: [
          { name: "Child 2.1", status: true },
          { name: "Child 2.2", status: false },
        ],
      },
      {
        name: "Child 3",
        status: true,
        children: [
          { name: "Child 3.1", status: true },
          { name: "Child 3.2", status: false },
        ],
      },
    ],
  };
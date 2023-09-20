export interface TreeNodeData {
  id?:number | null
  name:string;
  status:boolean;
  errors?:String
  children? : (TreeNodeData | AnotherNode)[];
}

export interface AnotherNode {
  name:string;
  status:boolean;
  id?:number | null
}

export const treeData : TreeNodeData= {
  id: 1,
  name: "Root",
  status: true,
  children: [
      {
          id: 2,
          name: "Child 1",
          status: true,
          children: [
              { id: 1, name: "Child 1.1", status: false, errors: "Child 1.1" },
              { id: 2, name: "Child 1.2", status: true, errors: "" },
              { id: 3, name: "Child 1.3", status: true, errors: "" },
          ],
      },
      {
          name: "Child 2",
          id: 3,
          status: false,
          children: [
              { id: 1, name: "Child 2.1", status: true, errors: "" },
              { id: 2, name: "Child 2.2", status: false, errors: "Child 2.2" },
          ],
      },
      {
          id: 4,
          name: "Child 3",
          status: true,
          errors: "Child 3",
          children: [
              { id: 1, name: "Child 3.1", status: true, errors: "" },
              { id: 2, name: "Child 3.2", status: false, errors: "Child 3.2" },
          ],
      },
      {
          id: 5,
          name: "Child 4",
          status: false,

          children: [
              { id: 1, name: "Child 4.1", status: true, errors: "" },
              { id: 2, name: "Child 4.2", status: false, errors: "Child 4.2" },
              { id: 3, name: "Child 4.3", status: true, errors: "" },
              {
                  id: 4,
                  name: "Child 4.4",
                  status: false,
                  errors: "Child 4.2",
                  children: [
                      { id: 1, name: "Child 4.2.1", status: true, errors: "4.2.1" },
                      { id: 2, name: "Child 4.2.2", status: false, errors: "Child 4.2.2" },
                      { id: 3, name: "Child 4.2.3", status: true, errors: "" },
                  ],
              },
              { id: 5, name: "Child 4.5", status: true, errors: "" },
          ],
      },
  ],
};
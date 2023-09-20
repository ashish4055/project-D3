
interface Details {
    outerId: string;
    message: string;
    type: string;
    id: string;
    parsedStack: null | ParsedStack[];
}
interface ParsedStack {
    assembly: string;
    method: string;
    level: number;
    line: number;
    fileName: null | string;
}

export interface NodeData {
    id?: string;
    parentId?: string;
    correlationId?: string;
    timeStamp?: string;
    itemType?: string;
    serviceName?: string;
    operationName?: string;
    target?: string;
    type?: null | string;
    message?: string;
    operationId?: string;
    operationParentId?: string;
    customDimensions?: string;
    resultCode?: string;
    success?: string;
    method?: string;
    outerMessage?: string;
    outerMethod?: string;
    outerType?: string;
    innermostMessage?: string;
    innermostMethod?: string;
    innermostType?: string;
    name: null | string;
    details: null | Details[];
    detailsRoot: null | NodeData[];
}



export interface ChildrenOfChildren {
    name: string;
    // count: number;
    isFailed: boolean;
    children: NodeData[];
}
interface Children {
    name: string;
    isFailed: boolean;
    children?: ChildrenOfChildren[];
}
export interface TreeNodeData {
    name: string;
    isFailed: boolean;
    children?: Children[];
}
export const treeData:TreeNodeData = {
    name: "Gateway",
    isFailed: true,
    children: [
      {
        name: "Gateway",
        isFailed: true,
        children: [
          {
            name: "request",
            isFailed: false,
            children: [
              {
                id: "",
                parentId: "",
                correlationId: "",
                timeStamp: "",
                itemType: "",
                serviceName: "",
                operationName: "",
                target: "",
                message: "",
                operationId: "",
                operationParentId: "",
                customDimensions: "",
                resultCode: "",
                success: "",
                method: "",
                outerMessage: "",
                outerMethod: "",
                outerType: "",
                innermostMessage: "",
                innermostMethod: "",
                innermostType: "",
                name:null,
                details: null,
                detailsRoot: null,
              },
            ],
          },
        ],
      },
    ],
  };
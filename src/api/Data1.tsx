interface NodeData{
    id: string;
    parentId: string;
    correlationId: string;
    timeStamp: string;
    itemType: string;
    serviceName: string;
    operationName: string;
    target: string;
    message: string;
    operationId: string;
    operationParentId: string;
    customDimensions: string;
    resultCode: string;
    success: string;
    method: string;
    outerMessage: string;
    outerMethod: string;
    outerType: string;
    innermostMessage: string;
    innermostMethod: string;
    innermostType: string;
    details: null | NodeData[];
    detailsRoot: null | NodeData[]; 
}

export interface TreeNodeData{
    name      : string;
    status    :boolean;
    children? : (TreeNodeData | NodeData)[];
}
   
  
  export const treeData:TreeNodeData = {
    name: "Gateway",
    status: true,
    children: [
      {
        name: "Gateway",
        status: true,
        children: [
          {
            name: "request",
            status: false,
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
                details: null,
                detailsRoot: null,
              },
            ],
          },
        ],
      },
    ],
  };
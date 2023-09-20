import React, { useState } from 'react'
import Tree, { TreeNodeDatum } from 'react-d3-tree'
import { TreeNodeData, treeData as initialData } from '../api/Data'
import { Card } from 'react-bootstrap'

type RenderCustomElementType = {
  nodeDatum:TreeNodeDatum
  toggleNode:()=>void
}

let showDetails : boolean = true;
const getNodeColor = (nodeData:any) => {
  if (nodeData.isFailed === true || nodeData.itemType === "exception" || nodeData.success === "False") {
    return "red";
  }

  if (nodeData.itemType === "dependency") {
    return "yellow";
  }

    return "rgb(0, 120, 212)";
};

const getServiceName = (nodeData:any) => {
  if (nodeData.name === null ||  nodeData.itemType === "exception" || nodeData.itemType === "trace") {
    return nodeData.serviceName;
  }
  if (nodeData.itemType === "dependency") {
    return nodeData.operationName;
  }

  return nodeData.name;
}
// const getDynamicPathClass = (nodeData: any) => {
//   if (nodeData.isFailed === true || 
//     nodeData.itemType === "exception" 
//     || nodeData.success === "False") {
//     return "node__root";
//   }
//   return "link__to-branch";
// }

const getDynamicPathClass = ({ source, target }: { source: any, target: any }, orientation: string) => {
  if (!source.children) {
    return 'red-link'; // Add a class name for red links
  }
  return 'green-link'; // Add a class name for green links
}

const renderCustomElement = ({ nodeDatum, toggleNode }:RenderCustomElementType) => {
  const nodeColor = getNodeColor(nodeDatum);
  <line x1={0} y1={0} x2={0} y2={-50} stroke="black" />
  if (nodeDatum.children === undefined || nodeDatum.children.length === 0) {
    showDetails = true;
  }
  return (
    <g>
      <circle r={8} fill={`${nodeColor}`} />
      <text dy=".31em" x={0} y={-20} textAnchor="start" onClick={toggleNode} style={{fill:'white'}}>
        {getServiceName(nodeDatum)}
      </text>
    </g>
  );
};
const straightPathFunc = (linkDatum : any, orientation: any) => {
  const { source, target } = linkDatum;
  return orientation === 'horizontal'
    ? `M${source.x},${source.x}L${target.y},${target.x}`
    : `M${source.x},${source.y}L${target.x},${target.y}`;
};


const D32 = () => {
  const [treeData, setTreeData] = useState<TreeNodeData>(initialData);

  return (
    <>
    <h4 className='text-center'>Details </h4>
    <div className='row'>
    <div className="border border-1 p-2 ml-3" style={{  height: "95vh",width:"75vw"}}>
    <Tree 
        data={treeData}
        orientation='horizontal'   
        translate={{ x: 300, y: 50 }}
        renderCustomNodeElement={(rd3tProps) => renderCustomElement({ ...rd3tProps })}
        nodeSize={{ x: 350, y: 70 }}
        pathClassFunc={(getDynamicPathClass)}
    />
   </div>
   <div className="border border-1 p-2 ml-3" style={{  height: "95vh",width:"25vw"}}>
   {showDetails && (
        <Card>
            <Card.Body>
            <Card.Title>Details of :</Card.Title>
            <Card.Text>
            
            </Card.Text>
            </Card.Body>
        </Card>
        )}
         </div>
   </div>
    </>
  )
}


export default D32

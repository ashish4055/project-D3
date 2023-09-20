import React, { useState } from 'react'
import Tree, {  RawNodeDatum,  TreeNodeDatum } from 'react-d3-tree'
import { AnotherNode, TreeNodeData, treeData as initialData } from '../api/Data'
import '../style/style.css'

type RenderCustomElementType = {
  nodeDatum:TreeNodeDatum
  toggleNode:()=>void
}

type LinksInfo = {
  source:{
    data:AnotherNode
  }
}
const getNodeColor = (nodeData:any) => {
    return nodeData.status ? "green" : "red";
};

const isValidNode = (node:RawNodeDatum) => {
  return Object.keys(node).length ? true : false;
}

const doesNodeConsistChild = (node:RawNodeDatum) => {
  return node.hasOwnProperty("children") ? true : false
}

const customToggleNode = (toggleNode:any, nodeData:RawNodeDatum | any) => {
  if (isValidNode(nodeData) && doesNodeConsistChild(nodeData)) {
    const filteredChildren : AnotherNode[] = nodeData.children?.filter((elem : AnotherNode) => !elem.status);
    nodeData.children = filteredChildren;
  }
  toggleNode()
}

const renderCustomElement = ({ nodeDatum, toggleNode }:RenderCustomElementType) => {
  const nodeColor = getNodeColor(nodeDatum);
  return <g>
    <circle r={10} fill={`${nodeColor}`} stroke='none'/>
    <text dy=".31em" x={15} y={-15} textAnchor="start" stroke="none" onClick={(e) => customToggleNode(toggleNode, nodeDatum)} style={{fill:'white'}}>
      {nodeDatum.name}
    </text>
  </g>
};

const customPathClassFunc : any = (linksInfo:LinksInfo ) => {
  const { source : { data }  } = linksInfo;
  if (data.status  === false && doesNodeConsistChild(data)) {
    // css class name append in link tag
    return "path-link ";
  }
  return ;
}

const D31 = () => {
  const [treeData,setTreeData] = useState<TreeNodeData>(initialData);
  return (
    <>
    <h4 className='text-center'>D3-Tree</h4>
    <div className="border border-1 p-2 ml-3" style={{  height: "85vh",width:"80vw",background:"rgba(0,0,0,0.4)"}}>
        <Tree 
         data={treeData}
         orientation='horizontal'   
         translate={{ x:50, y: 230 }}
         renderCustomNodeElement={(rd3tProps) => renderCustomElement({ ...rd3tProps })} 
         initialDepth={1}
         zoom={0.70}
         nodeSize={{ x: 350, y: 150 }}
         enableLegacyTransitions={true}
         shouldCollapseNeighborNodes={true}
         pathClassFunc={customPathClassFunc}
        />
   </div>
    </>
  )
}

export default D31
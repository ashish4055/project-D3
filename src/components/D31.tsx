import React, { useState } from 'react'
import Tree, { TreeNodeDatum } from 'react-d3-tree'
import { TreeNodeData, treeData as initialData } from '../api/Data'

type RenderCustomElementType = {
  nodeDatum:TreeNodeDatum
  toggleNode:()=>void
}

const getNodeColor = (nodeData:any) => {
  if (nodeData.status === false) {
    return "red";
  }
  console.log("nodeData",nodeData)
  return "green";
};

const renderCustomElement = ({ nodeDatum, toggleNode }:RenderCustomElementType) => {
  console.log("")
  const nodeColor = getNodeColor(nodeDatum);
  return <g>
    <circle r={10} fill={`${nodeColor}`} />
    <text dy=".31em" x={15} y={-15} textAnchor="start" onClick={toggleNode} style={{fill:'white'}}>
      {nodeDatum.name}
    </text>
  </g>
};


const D31 = () => {
  const [treeData,setTreeData] = useState<TreeNodeData>(initialData);


  return (
    <>
    <h4 className='text-center'>D3-Tree</h4>
    <div className="border border-1 p-2 ml-3" style={{  height: "85vh",width:"60vw"}}>
        <Tree 
         data={treeData}
         orientation='horizontal'   
         translate={{ x: 300, y: 50 }}
         renderCustomNodeElement={(rd3tProps) => renderCustomElement({ ...rd3tProps })}   //ts will throw error if u not return and jsx or valid react cmp
        />
   </div>
    </>
  )
}

export default D31
import React, { useState } from 'react'
import Tree, { RawNodeDatum, TreeNodeDatum, TreeNodeEventCallback } from 'react-d3-tree'
import { AnotherNode, TreeNodeData, treeData as initialData } from '../api/Data'
import '../style/style.css'
import { Card } from 'react-bootstrap'

type RenderCustomElementType = {
  nodeDatum: TreeNodeDatum
  toggleNode: () => void
  customNodeClick: () => void
}

export type CustomErrorType = {
  nodeName?: string
  status: boolean
  message?: string
}

type LinksInfo = {
  source: {
    data: AnotherNode
  }
}

type NodeClick = {
  onNodeClick: TreeNodeEventCallback
}
const getNodeColor = (nodeData: any) => {
  return nodeData.status ? "green" : "red";
};

const isValidNode = (node: RawNodeDatum) => {
  return Object.keys(node).length ? true : false;
}

const doesNodeConsistChild = (node: RawNodeDatum) => {
  return node.hasOwnProperty("children") ? true : false
}

const customToggleNode = (toggleNode: any, nodeData: RawNodeDatum | any) => {
  if (isValidNode(nodeData) && doesNodeConsistChild(nodeData)) {
    const filteredChildren: AnotherNode[] = nodeData.children?.filter((elem: AnotherNode) => !elem.status);
    nodeData.children = filteredChildren;
  }
  toggleNode()
}

const customPathClassFunc: any = (linksInfo: LinksInfo) => {
  const { source: { data } } = linksInfo;
  if (data.status === false && doesNodeConsistChild(data)) {
    // css class name append in link tag
    return "path-link ";
  }
  return;
}

const initialCustomError = {
  status: false,
  message: ""
}


const D31 = () => {
  const [treeData, setTreeData] = useState<TreeNodeData>(initialData);
  const [customError, setCustomError] = useState<CustomErrorType>(initialCustomError);

  const customNodeClick: any = (nodeDataum: TreeNodeData) => {
    if (isValidNode(nodeDataum) && !doesNodeConsistChild(nodeDataum) && !nodeDataum.status) {
      console.log("leaf node")
      setCustomError({ ...customError, status: true, nodeName: nodeDataum.name, message: nodeDataum.errors })
    }
    else {
      console.log("not leaf")
      setCustomError(initialCustomError);
    }

  }

  const renderCustomElement = ({ nodeDatum, toggleNode }: RenderCustomElementType) => {
    const nodeColor = getNodeColor(nodeDatum);
    return <g>
      <circle r={10} fill={`${nodeColor}`} stroke='none' onClick={(e) => customNodeClick(nodeDatum)} />
      <text dy=".31em" x={15} y={-15} textAnchor="start" stroke="none" onClick={(e) => customToggleNode(toggleNode, nodeDatum)} style={{ fill: 'white' }}>
        {nodeDatum.name}
      </text>
    </g>
  };

  return (
    <>
      <h4 className='text-center'>D3-Tree</h4>
        <div className='main-container d-flex justify-content-between'>
            <div className="border border-1 p-2 ml-3" style={{ height: "85vh", width: "75vw", background: "rgba(0,0,0,0.4)" }}>
            <Tree
              data={treeData}
              orientation='horizontal'
              translate={{ x: 50, y: 230 }}
              renderCustomNodeElement={(rd3tProps) => renderCustomElement({ ...rd3tProps, customNodeClick })}
              initialDepth={1}
              zoom={0.77}
              nodeSize={{ x: 350, y: 150 }}
              enableLegacyTransitions={true}
              shouldCollapseNeighborNodes={true}
              pathClassFunc={customPathClassFunc}
              transitionDuration={800}
            />
          </div>
          <div className='error-wrapper pl-4' style={{width:"22vw"}}>
          {customError.status && <Card>
            <Card.Body>
              <Card.Title>Details of : {customError.nodeName}</Card.Title>
              <Card.Text>
                <code>Errors : {customError.message}</code>
              </Card.Text>
            </Card.Body>
          </Card>}
        </div>
      
        </div>
    </>
  )
}

export default D31
declare namespace Topo {
  interface FirstNode {
    name: string
    code: string
    children: SecondNode[]
    companyNum: number
    childrenCompanyNum: number
    nodeNum: number
    order: number
  }

  interface SecondNode {
    name: string
    node_code: string
    children: Node[]
    companyNum: number
    childrenCompanyNum: number
    nodeNum: number
    parentnode?: string
    order: number
  }

  interface TopoJSON {
    name: string
    theme_code: string
    children: FirstNode[]
    companyNum: number
    childrenCompanyNum: number
    nodeNum: number
    dataPoints: string
    order: number
  }
}

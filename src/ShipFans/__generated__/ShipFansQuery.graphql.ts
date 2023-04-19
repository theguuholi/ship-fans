/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ShipFansQueryVariables = {
    limit?: number | null;
};
export type ShipFansQueryResponse = {
    readonly ships: ReadonlyArray<{
        readonly id: string | null;
        readonly image: string | null;
        readonly name: string | null;
        readonly roles: ReadonlyArray<string | null> | null;
        readonly type: string | null;
        readonly home_port: string | null;
        readonly year_built: number | null;
    } | null> | null;
};
export type ShipFansQuery = {
    readonly response: ShipFansQueryResponse;
    readonly variables: ShipFansQueryVariables;
};



/*
query ShipFansQuery(
  $limit: Int
) {
  ships(limit: $limit) {
    id
    image
    name
    roles
    type
    home_port
    year_built
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      }
    ],
    "concreteType": "Ship",
    "kind": "LinkedField",
    "name": "ships",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "roles",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "home_port",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "year_built",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShipFansQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShipFansQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "458e9fa6cb40da14ef0b6ec2f06cde64",
    "id": null,
    "metadata": {},
    "name": "ShipFansQuery",
    "operationKind": "query",
    "text": "query ShipFansQuery(\n  $limit: Int\n) {\n  ships(limit: $limit) {\n    id\n    image\n    name\n    roles\n    type\n    home_port\n    year_built\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd0f4fb775b12cb240c3aef0b0f9adfda';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type listUserReposQueryVariables = {};
export type listUserReposQueryResponse = {
    readonly viewer: {
        readonly login: string;
    };
};
export type listUserReposQuery = {
    readonly response: listUserReposQueryResponse;
    readonly variables: listUserReposQueryVariables;
};



/*
query listUserReposQuery {
  viewer {
    login
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "listUserReposQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "listUserReposQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ef8d6b32d0e6985dfd915c730ef90410",
    "id": null,
    "metadata": {},
    "name": "listUserReposQuery",
    "operationKind": "query",
    "text": "query listUserReposQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c1a0dc99218638d02861fd76cfff50ff';
export default node;

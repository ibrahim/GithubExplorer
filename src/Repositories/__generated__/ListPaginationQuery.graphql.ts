/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ListPaginationQueryVariables = {
    pageSize: number;
    after?: string | null;
    isFork?: boolean | null;
};
export type ListPaginationQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"List_viewer">;
    };
};
export type ListPaginationQuery = {
    readonly response: ListPaginationQueryResponse;
    readonly variables: ListPaginationQueryVariables;
};



/*
query ListPaginationQuery(
  $pageSize: Int!
  $after: String
  $isFork: Boolean
) {
  viewer {
    ...List_viewer
    id
  }
}

fragment List_viewer on User {
  repositories(first: $pageSize, after: $after, isFork: $isFork) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        ...Repository_item
        __typename
      }
      cursor
    }
  }
}

fragment Repository_item on Repository {
  name
  stargazerCount
  primaryLanguage {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isFork"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pageSize"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "pageSize"
  },
  {
    "kind": "Variable",
    "name": "isFork",
    "variableName": "isFork"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "List_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "stargazerCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Language",
                        "kind": "LinkedField",
                        "name": "primaryLanguage",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "isFork"
            ],
            "handle": "connection",
            "key": "List_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2662e191e5a93ce588834d16e9fbc59d",
    "id": null,
    "metadata": {},
    "name": "ListPaginationQuery",
    "operationKind": "query",
    "text": "query ListPaginationQuery(\n  $pageSize: Int!\n  $after: String\n  $isFork: Boolean\n) {\n  viewer {\n    ...List_viewer\n    id\n  }\n}\n\nfragment List_viewer on User {\n  repositories(first: $pageSize, after: $after, isFork: $isFork) {\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        ...Repository_item\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment Repository_item on Repository {\n  name\n  stargazerCount\n  primaryLanguage {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '5e64f2109e4e991be3e5c4ea5db7ef3b';
export default node;

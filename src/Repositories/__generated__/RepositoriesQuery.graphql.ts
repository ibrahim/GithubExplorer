/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesQueryVariables = {
    pageSize: number;
    after?: string | null;
    isFork?: boolean | null;
};
export type RepositoriesQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"ProfileHeader_viewer" | "List_viewer">;
    };
};
export type RepositoriesQuery = {
    readonly response: RepositoriesQueryResponse;
    readonly variables: RepositoriesQueryVariables;
};



/*
query RepositoriesQuery(
  $pageSize: Int!
  $after: String
  $isFork: Boolean
) {
  viewer {
    ...ProfileHeader_viewer
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

fragment ProfileHeader_viewer on User {
  id
  name
  avatarUrl(size: 300)
}

fragment Repository_item on Repository {
  name
  stargazerCount
  primaryLanguage {
    id
    name
    color
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoriesQuery",
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
            "name": "ProfileHeader_viewer"
          },
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
    "name": "RepositoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 300
              }
            ],
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": "avatarUrl(size:300)"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
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
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "color",
                            "storageKey": null
                          }
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
            "args": (v5/*: any*/),
            "filters": [
              "isFork"
            ],
            "handle": "connection",
            "key": "List_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f006866c0c390e92eac7e15b491a0eaa",
    "id": null,
    "metadata": {},
    "name": "RepositoriesQuery",
    "operationKind": "query",
    "text": "query RepositoriesQuery(\n  $pageSize: Int!\n  $after: String\n  $isFork: Boolean\n) {\n  viewer {\n    ...ProfileHeader_viewer\n    ...List_viewer\n    id\n  }\n}\n\nfragment List_viewer on User {\n  repositories(first: $pageSize, after: $after, isFork: $isFork) {\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        ...Repository_item\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProfileHeader_viewer on User {\n  id\n  name\n  avatarUrl(size: 300)\n}\n\nfragment Repository_item on Repository {\n  name\n  stargazerCount\n  primaryLanguage {\n    id\n    name\n    color\n  }\n}\n"
  }
};
})();
(node as any).hash = '731d561eb04b1347e4e136530ff270c5';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesQueryVariables = {
    pageSize: number;
    after?: string | null;
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
) {
  viewer {
    ...ProfileHeader_viewer
    ...List_viewer
    id
  }
}

fragment List_viewer on User {
  repositories(first: $pageSize, after: $after, isFork: false) {
    edges {
      node {
        id
        ...Repository_item
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
  "name": "pageSize"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
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
    "kind": "Literal",
    "name": "isFork",
    "value": false
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
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
      (v1/*: any*/),
      (v0/*: any*/)
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
          (v2/*: any*/),
          (v3/*: any*/),
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
            "args": (v4/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
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
                      (v2/*: any*/),
                      (v3/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/)
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
              },
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
                    "name": "hasNextPage",
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
            "args": (v4/*: any*/),
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
    "cacheID": "59c42dd22918364a394eec8893636fd9",
    "id": null,
    "metadata": {},
    "name": "RepositoriesQuery",
    "operationKind": "query",
    "text": "query RepositoriesQuery(\n  $pageSize: Int!\n  $after: String\n) {\n  viewer {\n    ...ProfileHeader_viewer\n    ...List_viewer\n    id\n  }\n}\n\nfragment List_viewer on User {\n  repositories(first: $pageSize, after: $after, isFork: false) {\n    edges {\n      node {\n        id\n        ...Repository_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProfileHeader_viewer on User {\n  id\n  name\n  avatarUrl(size: 300)\n}\n\nfragment Repository_item on Repository {\n  name\n  stargazerCount\n  primaryLanguage {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c984f59394b63aa30317fc64330e1639';
export default node;

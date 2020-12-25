/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesQueryVariables = {
    limit?: number | null;
};
export type RepositoriesQueryResponse = {
    readonly viewer: {
        readonly login: string;
        readonly repositories: {
            readonly " $fragmentRefs": FragmentRefs<"List_repositories">;
        };
    };
};
export type RepositoriesQuery = {
    readonly response: RepositoriesQueryResponse;
    readonly variables: RepositoriesQueryVariables;
};



/*
query RepositoriesQuery(
  $limit: Int
) {
  viewer {
    login
    repositories(first: $limit) {
      ...List_repositories
    }
    id
  }
}

fragment List_repositories on RepositoryConnection {
  edges {
    node {
      id
      ...Repository_item
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "limit"
  }
],
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "List_repositories"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0dc807e74896282994f42cad9626d08b",
    "id": null,
    "metadata": {},
    "name": "RepositoriesQuery",
    "operationKind": "query",
    "text": "query RepositoriesQuery(\n  $limit: Int\n) {\n  viewer {\n    login\n    repositories(first: $limit) {\n      ...List_repositories\n    }\n    id\n  }\n}\n\nfragment List_repositories on RepositoryConnection {\n  edges {\n    node {\n      id\n      ...Repository_item\n    }\n  }\n}\n\nfragment Repository_item on Repository {\n  name\n  stargazerCount\n  primaryLanguage {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ecd7f5f8c99ae1f69a832589faed21e8';
export default node;

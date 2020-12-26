/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type List_viewer = {
    readonly repositories: {
        readonly pageInfo: {
            readonly endCursor: string | null;
            readonly startCursor: string | null;
            readonly hasNextPage: boolean;
            readonly hasPreviousPage: boolean;
        };
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"Repository_item">;
            } | null;
            readonly cursor: string;
        } | null> | null;
    };
    readonly " $refType": "List_viewer";
};
export type List_viewer$data = List_viewer;
export type List_viewer$key = {
    readonly " $data"?: List_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"List_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "isFork"
    },
    {
      "kind": "RootArgument",
      "name": "pageSize"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "pageSize",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "repositories"
        ]
      }
    ]
  },
  "name": "List_viewer",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Variable",
          "name": "isFork",
          "variableName": "isFork"
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__List_repositories_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Repository_item"
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'bb456e276a6fd90d94ed61c1b2700d01';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type History_viewer = {
    readonly repository: {
        readonly defaultBranchRef: {
            readonly target: {
                readonly id: string;
                readonly history?: {
                    readonly pageInfo: {
                        readonly hasNextPage: boolean;
                        readonly endCursor: string | null;
                        readonly startCursor: string | null;
                        readonly hasPreviousPage: boolean;
                    };
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly id: string;
                            readonly " $fragmentRefs": FragmentRefs<"Commit_item">;
                        } | null;
                    } | null> | null;
                };
            } | null;
        } | null;
    } | null;
    readonly " $refType": "History_viewer";
};
export type History_viewer$data = History_viewer;
export type History_viewer$key = {
    readonly " $data"?: History_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"History_viewer">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "name"
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
          "repository",
          "defaultBranchRef",
          "target",
          "history"
        ]
      }
    ]
  },
  "name": "History_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "name",
          "variableName": "name"
        }
      ],
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "repository",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Ref",
          "kind": "LinkedField",
          "name": "defaultBranchRef",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "target",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": "history",
                      "args": null,
                      "concreteType": "CommitHistoryConnection",
                      "kind": "LinkedField",
                      "name": "__commits_history_connection",
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
                              "name": "hasNextPage",
                              "storageKey": null
                            },
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
                              "name": "hasPreviousPage",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "CommitEdge",
                          "kind": "LinkedField",
                          "name": "edges",
                          "plural": true,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "Commit",
                              "kind": "LinkedField",
                              "name": "node",
                              "plural": false,
                              "selections": [
                                (v0/*: any*/),
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
                                  "name": "Commit_item"
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
                  "type": "Commit",
                  "abstractKey": null
                }
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
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '1a369af29beb127c4124dcc9c49fb6cd';
export default node;

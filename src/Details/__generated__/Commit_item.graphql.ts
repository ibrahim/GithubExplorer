/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Commit_item = {
    readonly messageHeadline: string;
    readonly author: {
        readonly name: string | null;
        readonly email: string | null;
        readonly date: unknown | null;
    } | null;
    readonly " $refType": "Commit_item";
};
export type Commit_item$data = Commit_item;
export type Commit_item$key = {
    readonly " $data"?: Commit_item$data;
    readonly " $fragmentRefs": FragmentRefs<"Commit_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Commit_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messageHeadline",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GitActor",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
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
          "name": "email",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "date",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Commit",
  "abstractKey": null
};
(node as any).hash = 'ce96d8c427850488030425fc277a7aa3';
export default node;

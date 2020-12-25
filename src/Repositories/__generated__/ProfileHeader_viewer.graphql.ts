/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfileHeader_viewer = {
    readonly id: string;
    readonly name: string | null;
    readonly avatarUrl: unknown;
    readonly " $refType": "ProfileHeader_viewer";
};
export type ProfileHeader_viewer$data = ProfileHeader_viewer;
export type ProfileHeader_viewer$key = {
    readonly " $data"?: ProfileHeader_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ProfileHeader_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileHeader_viewer",
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
      "name": "name",
      "storageKey": null
    },
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '9e31c6896294f47136f15d36a7050707';
export default node;

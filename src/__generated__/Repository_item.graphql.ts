/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Repository_item = {
    readonly id: string;
    readonly name: string;
    readonly stargazerCount: number;
    readonly primaryLanguage: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly " $refType": "Repository_item";
};
export type Repository_item$data = Repository_item;
export type Repository_item$key = {
    readonly " $data"?: Repository_item$data;
    readonly " $fragmentRefs": FragmentRefs<"Repository_item">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repository_item",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();
(node as any).hash = '0a7708358cc275bbcf5232dd7cb37561';
export default node;

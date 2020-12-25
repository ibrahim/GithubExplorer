/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Repository_item = {
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();
(node as any).hash = '8bac00821115c24119bbdfad7f5f6713';
export default node;

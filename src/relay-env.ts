import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const ak1 = 'c251f9dd926611d0e';
const ak2 = 'fab3166bf49a85dee9ca21f';
const ak = ak1 + ak2;
async function fetchQuery(operation: any, variables: any) {
    console.log({ query: operation.text, variables });
    return fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ak}`,
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })
        .then(async (response) => {
            const res = await response.json();
            //console.log({ res });
            return res;
        })
        .catch((error) => {
            console.log({ error });
        });
}

export const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

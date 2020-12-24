import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchQuery(operation: any, variables: any) {
    return fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer `,
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })
        .then(async (response) => {
            const res = await response.json();
            console.log({ res });
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

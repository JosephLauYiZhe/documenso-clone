import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@my-documenso/trpc';

function handleRequest(request: Request){
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req: request,
        router: appRouter,
    })
}

export async function loader({ request }: { request: Request }){
    return handleRequest(request);
}

export async function action({ request }: { request: Request }){
    return handleRequest(request);
}
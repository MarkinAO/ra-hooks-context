import useJsonFetch from "./useJsonFetch"

const url = 'http://localhost:7070/error';

export default function ResponseError() {
    let [data, loading, error] = useJsonFetch({url})
    return(
        <div className="container">
            <div><a href={url}>{url}</a></div>
            <div>{ data ? data.status : 'no data' }</div>
            <div>{loading ? 'loading...' : 'loading finished'}</div>
            <div>{error ? error.message : 'no errors'}</div>
        </div>
    )
}
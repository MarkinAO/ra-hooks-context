import useJsonFetch from "./useJsonFetch"

const url = 'http://localhost:7070/loading';

export default function ResponseLoad() {
    let [data, loading, error] = useJsonFetch({url})
    return(
        <div className="container">
            <div><a href={url}>{url}</a></div>
            <div>{ data ? data.status : 'no data' }</div>
            <div>{loading ? 'loading...' : 'loading finished'}</div>
            <div>{error ? error : 'no errors'}</div>
        </div>
    )
}
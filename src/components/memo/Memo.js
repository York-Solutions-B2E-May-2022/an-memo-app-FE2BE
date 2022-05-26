export function Memo({memo}) {
    return <>
        <div>{memo.title}</div>
        <div>{memo.desc}</div>
        <div>{memo.date?.toString().substring(0, 15)}</div>
        <div>{memo.finished ? 'Finished' : 'Pending'}</div>
    </>
}
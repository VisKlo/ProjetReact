export function Pagination({page, totalPages, previous, next}) {
    return (
        <div className="pagination">
            <button onClick={previous} disabled={page === 1}>précédent</button>
            <button onClick={next} disabled={page === totalPages}>suivant</button>
        </div>
    )
}
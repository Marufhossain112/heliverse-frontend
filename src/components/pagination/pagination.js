import { Pagination } from 'flowbite-react';
export function PaginationUi({ currentPage, setCurrentPage }) {
    const onPageChange = (page: number) => setCurrentPage(page);
    // console.log({ currentPage });
    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
        </div>
    );
}

import { Button, Card, Spinner } from 'flowbite-react';
import { useGetUsersQuery } from '../../redux/features/users/usersApi';
import { PaginationUi } from '../pagination/pagination';
import { useState } from 'react';

export function UserCard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isLoading } = useGetUsersQuery({ page: currentPage, searchTerm });
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <>
            <div className='flex justify-end mb-3'>
                <form>
                    <input onChange={(e) => setSearchTerm(e.target.value)
                    } type='search' placeholder='Search...' />
                </form>
            </div>
            <div className='user-container grid grid-cols-5 gap-4'>
                {data?.data?.map((user, index) => (
                    <Card className="max-w-sm">
                        <div className="flex justify-end px-4 pt-4">
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                alt="avatar"
                                height="96"
                                src={user?.avatar}
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white">{`${user?.first_name} ${user?.last_name}`}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                            <div className=" flex flex-col justify-center items-center  ">
                                <span className="text-sm text-gray-700">Gender: <span>{user?.gender}</span> </span>
                                <span className="text-sm text-gray-700">Domain: <span>{user?.domain.length > 8 ? user?.domain.slice(0, 9) : user?.domain}</span> </span>
                                <span className="text-sm text-gray-700">Availability: {
                                    user?.available ? <span className='text-green-600'>True</span> : <span className='text-red-600'>False</span>
                                } </span>
                            </div>
                            <Button color='dark' disabled={user && !user.available} className='mt-5'>
                                Add to team
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
            <div className='mt-4'>
                <PaginationUi currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </>
    );
}
